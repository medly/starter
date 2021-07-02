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
    removeProjectFolder
} = require('@medly/starter-shared');

async function init() {
    let cmdProjectName, folderName;

    try {
        printMedly();

        // Command information
        const program = new commander.Command(packageJson.name)
            .version(packageJson.version)
            .arguments('[project-name]')
            .option('-o, --owner <owner>', 'owner of the package')
            .addOption(new Option('-r, --registry <registry>', 'registry to publish the module').choices(['npm', 'github']).default('npm'))
            .addOption(
                new Option('-p, --package-manager  <package-manager>', 'package manager').choices(['npm', 'yarn', 'pnpm']).default('yarn')
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
            { packageManager, projectName } = options;

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

        // Final messages
        console.log(chalk.green('\n🚀 Success!') + ' Created ' + chalk.green(projectName) + ' at ' + chalk.green(projectRoot));
        console.log('\nMove to the project directory via ' + chalk.green(`cd ${projectName}`) + ' and then you can run below commands\n');

        console.table([
            { command: `${packageManager} lint`, description: 'To run eslint' },
            { command: `${packageManager} test`, description: 'To run jest tests' },
            { command: `${packageManager} storybook`, description: 'To run storybook server' },
            { command: `${packageManager} dist`, description: 'To create bundle' }
        ]);

        console.log(chalk.bold('Note: ') + 'Add ' + chalk.green('NPM_TOKEN') + ' as secret in github repo to publish the package.');
    } catch (error) {
        printGenericError(error);
        removeProjectFolder(folderName);
    }
}

init();
