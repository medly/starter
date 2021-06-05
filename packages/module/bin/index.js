#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const packageJson = require('../package.json');
const template = path.join(__dirname, '../template');
const { execSync } = require('child_process');
const addProjectDetails = require('./addProjectDetails');
const installDependencies = require('./installDependencies');
const clear = require('clear');
const figlet = require('figlet');
const commander = require('commander');
const { Option } = require('commander');
const questions = require('./questions');

async function init() {
    let projectName;

    clear();
    console.log(chalk.rgb(46, 217, 195)(figlet.textSync('Medly', { horizontalLayout: 'full' })));
    console.log(chalk.rgb(46, 217, 195)('------------------------------------'));

    // Command information
    const program = new commander.Command(packageJson.name)
        .version(packageJson.version)
        .arguments('<project-name>')
        .option('-o, --owner <owner>', 'owner of the package')
        .option('-o, --owner <owner>', 'owner of the package')
        .addOption(new Option('-p, --publish <registry>', 'registry to publish the module').choices(['npm', 'github']))
        .addOption(
            new Option('-m, --package-manager  <package-manager>', 'package manager').choices(['npm', 'yarn', 'pnpm']).default('yarn')
        )
        .option('-i, --interactive', 'show interactive questionnaire')
        .description('An application for generating either ts module or simple ts app')
        .usage(`${chalk.green('<project-name>')} [options]`)
        .action((name, options) => {
            if (options.publish && !options.owner) {
                console.error('Error: Owner of the repo required when you add publish option');
                process.exit(1);
            }
            projectName = name;
        })
        .parse(process.argv);

    const options = program.opts(),
        { publish, packageManager } = options.interactive ? await questions() : options;

    // Create project directory
    const projectRoot = path.resolve(projectName);
    fs.ensureDirSync(projectName);
    console.log(chalk.green('Project created at ->', projectRoot));

    // Copying template files
    fs.copySync(path.join(template, 'common'), projectRoot);
    publish ? fs.copySync(path.join(template, 'publishable'), projectRoot) : fs.copySync(path.join(template, 'simple'), projectRoot);

    // Add project details
    addProjectDetails(projectName, options);

    // Move to project directory
    process.chdir(projectRoot);

    // Initializing git
    execSync('git init');

    // Installing dependencies
    console.log(chalk.green('Installing dependencies'));
    installDependencies(packageManager);

    console.log(chalk.green(projectName) + ' created. You can run the following commands: ');
    console.log(chalk.green(`${packageManager} start`) + chalk.cyan(' To start the project'));
    console.log(chalk.green(`${packageManager} test`) + chalk.cyan(' To run the jest tests'));
    console.log(chalk.green(`${packageManager} lint`) + chalk.cyan(' To run eslint'));
}

init();
