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
const { addProjectDetails, installDependencies, printMedly } = require('@medly/starter-shared');

async function init() {
    let projectName;

    printMedly();

    // Command information
    const program = new commander.Command(packageJson.name)
        .version(packageJson.version)
        .arguments('<project-name>')
        .addOption(
            new Option('-p, --package-manager  <package-manager>', 'package manager').choices(['npm', 'yarn', 'pnpm']).default('yarn')
        )
        .option('-i, --interactive', 'show interactive questionnaire')
        .description('An application for generating either ts module or simple ts app')
        .usage(`${chalk.green('<project-name>')} [options]`)
        .action(name => {
            projectName = name;
        })
        .parse(process.argv);

    const options = program.opts(),
        { packageManager } = options.interactive ? await questions() : options;

    // Create project directory
    const projectRoot = path.resolve(projectName);
    fs.ensureDirSync(projectName);
    console.log('Creating the project at ' + chalk.green(projectRoot));

    // Copying template files
    fs.copySync(template, projectRoot);

    // Add project details
    addProjectDetails(projectName, options);

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
        { command: `${packageManager} lint`, description: 'To run eslint' },
        { command: `${packageManager} test`, description: 'To run jest tests' },
        { command: `${packageManager} test:jest <test_name>`, description: 'To run specific test' },
        { command: `${packageManager} watch`, description: 'To run local server' },
        { command: `${packageManager} dist`, description: 'To create bundle' },
        { command: `${packageManager} dist:analyze`, description: 'To analyze bundle' }
    ]);
}

init();
