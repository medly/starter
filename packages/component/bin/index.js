#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const packageJson = require('../package.json');
const template = path.join(__dirname, '../template');
const { execSync } = require('child_process');
const questions = require('./questions');
const { Option } = require('commander');
const commander = require('commander');
const {
    addProjectDetails,
    installDependencies,
    printMedly,
    updateHuskyCommands,
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
            .addOption(new Option('-r, --registry <registry>', 'registry to publish the module').choices(['npm', 'github']).default('npm'))
            .addOption(
                new Option('-p, --package-manager  <package-manager>', 'package manager').choices(['npm', 'yarn', 'pnpm']).default('yarn')
            )
            .addOption(
                new Option('-a, --access  <access>', 'Access level of the component').choices(['public', 'restricted']).default('public')
            )
            .option('-i, --interactive', 'show interactive questionnaire')
            .description('An application for creating scaffolding for react component')
            .usage(`${chalk.green('<project-name>')} [options]`)
            .action(name => {
                cmdProjectName = name;
            })
            .parse(process.argv);

        const commanderOptions = program.opts(),
            options = await questions({ ...commanderOptions, projectName: cmdProjectName }),
            { packageManager, projectName, registry } = options;

        folderName = projectName;

        // Create project directory
        const projectRoot = path.resolve(projectName);
        fs.ensureDirSync(projectName);
        console.log('Creating the project at ' + chalk.green(projectRoot));

        // Copying template files
        fs.copySync(template, projectRoot);

        // Add project details
        addProjectDetails(options);

        // Move to project directory
        process.chdir(projectRoot);

        // Initializing git
        execSync('git init');

        // Installing dependencies
        console.log('\nInstalling dependencies\n');
        installDependencies(packageManager);

        // Update husky commands with chosen package manager
        updateHuskyCommands(packageManager);

        // Update token based on chosen registry
        registry === 'github' && updateTokensInGithubWorkflow();

        // Final messages
        console.log(chalk.green('\n🚀 Success!') + ' Created ' + chalk.green(projectName) + ' at ' + chalk.green(projectRoot));
        console.log('\nMove to the project directory via ' + chalk.green(`cd ${projectName}`) + ' and then you can run below commands\n');

        console.table([
            { command: `${packageManager} lint`, description: 'To run eslint' },
            { command: `${packageManager} test`, description: 'To run jest tests' },
            { command: `${packageManager} storybook`, description: 'To run storybook server' },
            { command: `${packageManager} dist`, description: 'To create bundle' }
        ]);
        if (registry === 'github') {
            console.log(
                chalk.bold('\nNote: ') +
                    'Add github token as ' +
                    chalk.green('ADMIN_TOKEN') +
                    ' with ' +
                    chalk.green('write:packages') +
                    ' scope in github repo secrets.'
            );
        } else {
            console.log(chalk.bold('\nNote: ') + 'Add below tokens in github repo secrets. ');
            console.table([
                { token: `NPM_TOKEN`, description: 'This is to publish the package on github registry.' },
                { token: `ADMIN_TOKEN`, description: 'Add github token to publish the storybook on github pages.' }
            ]);
        }
    } catch (error) {
        printGenericError(error);
        removeProjectFolder(folderName);
    }
}

init();
