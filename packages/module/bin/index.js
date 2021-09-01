#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const packageJson = require('../package.json');
const { execSync } = require('child_process');
const commander = require('commander');
const { Option } = require('commander');
const questions = require('./questions');
const copyTemplateFiles = require('./copyTemplateFiles');
const {
    addProjectDetails,
    installDependencies,
    printMedly,
    printGenericError,
    removeProjectFolder,
    updateTokensInGithubWorkflow
} = require('@medly/starter-shared');

async function init() {
    let cmdProjectName, folderName;

    try {
        printMedly();

        // Command information
        const program = new commander.Command(packageJson.name)
            .version(packageJson.version)
            .arguments('[project-name]')
            .option('-o, --org <org>', 'name of the organization')
            .addOption(
                new Option('-r, --registry <registry>', 'registry to publish the module').choices(['none', 'npm', 'github']).default('none')
            )
            .addOption(
                new Option('-p, --package-manager  <package-manager>', 'package manager').choices(['npm', 'yarn', 'pnpm']).default('yarn')
            )
            .addOption(
                new Option('-a, --access  <access>', 'Access level of the module').choices(['public', 'restricted']).default('public')
            )
            .addOption(new Option('-l, --language  <language>', 'language').choices(['typescript', 'javascript']).default('typescript'))
            .option('-i, --interactive', 'show interactive questionnaire')
            .description('An application for generating either ts module or simple ts app')
            .usage(`${chalk.green('<project-name>')} [options]`)
            .action((name, options) => {
                if (options.registry && options.registry !== 'none' && !options.org) {
                    console.error(chalk.red('Error: ') + '-o, --org <org> required when you have added registry option');
                    process.exit(1);
                }
                cmdProjectName = name;
            })
            .parse(process.argv);

        const commanderOptions = program.opts(),
            options = await questions({ ...commanderOptions, projectName: cmdProjectName }),
            { registry, packageManager, projectName } = options;

        folderName = projectName;

        // Create project directory
        const projectRoot = path.resolve(projectName);
        fs.ensureDirSync(projectName);
        console.log('Creating the project at ' + chalk.green(projectRoot));

        // Copying template files
        copyTemplateFiles(options);

        // Add project details
        addProjectDetails(options);

        // Move to project directory
        process.chdir(projectRoot);

        // Initializing git
        execSync('git init');

        // Installing dependencies
        console.log('\nInstalling dependencies\n');
        installDependencies(packageManager);

        // Final messages
        console.log(chalk.green('\n🚀 Success!') + ' Created ' + chalk.green(projectName) + ' at ' + chalk.green(projectRoot));
        console.log('\nMove to the project directory via ' + chalk.green(`cd ${projectName}`) + ' and then you can run below commands\n');

        console.table([
            { command: `${packageManager} start`, description: 'To start the project' },
            { command: `${packageManager} test`, description: 'To run the jest tests' },
            { command: `${packageManager} lint`, description: 'To run eslint' },
            ...(registry && registry !== 'none' ? [{ command: `${packageManager} build`, description: 'To create the bundle' }] : [])
        ]);

        if (registry && registry !== 'none') {
            registry === 'github' && updateTokensInGithubWorkflow();
            console.log(
                chalk.bold('\nNote: ') +
                    'Add ' +
                    `${registry === 'github' ? 'github token as ' + chalk.green('ADMIN_TOKEN') : chalk.green('NPM_TOKEN')}` +
                    ' as secret in github repo to publish the package.'
            );
        }
    } catch (error) {
        printGenericError(error);
        removeProjectFolder(folderName);
    }
}

init();
