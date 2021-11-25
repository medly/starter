#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const packageJson = require('../package.json');
const copyTemplateFiles = require('./copyTemplateFiles');
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
            .addOption(
                new Option('-p, --package-manager  <package-manager>', 'package manager').choices(['npm', 'yarn', 'pnpm']).default('yarn')
            )
            .option('-i, --interactive', 'show interactive questionnaire')
            .description('An application for generating backend application using ExpressJS')
            .usage(`${chalk.green('<project-name>')} [options]`)
            .action(name => {
                cmdProjectName = name;
            })
            .parse(process.argv);

        // access the parsed options from command line
        const commanderOptions = program.opts();

        const options = await questions({ ...commanderOptions, projectName: cmdProjectName });
        // extract the answers chosen by the developer
        const { packageManager, projectName } = options;

        folderName = projectName;

        // Create project directory
        const projectRoot = path.resolve(projectName);
        fs.ensureDirSync(projectName);
        console.log('Creating the project at ' + chalk.green(projectRoot));

        // Copy template files
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

        // Update husky commands with chosen package manager
        updateHuskyCommands(packageManager);

        // Final messages
        console.log(chalk.green('\n🚀 Success!') + ' Created ' + chalk.green(projectName) + ' at ' + chalk.green(projectRoot));
        console.log('\nMove to the project directory via ' + chalk.green(`cd ${projectName}`) + ' and then you can run below commands\n');

        console.table([
            { command: `${packageManager} lint`, description: 'To run eslint' },
            { command: `${packageManager} test`, description: 'To run jest tests' },
            { command: `${packageManager} test <test_name>`, description: 'To run specific test' },
            { command: `${packageManager} watch`, description: 'To run nodemon server' },
            { command: `${packageManager} start`, description: 'To run node server' }
        ]);
    } catch (error) {
        printGenericError(error);
        removeProjectFolder(folderName);
    }
}

init();
