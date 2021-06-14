#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const packageJson = require('../package.json');
const template = path.join(__dirname, '../template');
const { execSync } = require('child_process');
const clear = require('clear');
const figlet = require('figlet');
const commander = require('commander');
const { Option } = require('commander');
const questions = require('./questions');
const { addProjectDetails, installDependencies } = require('@medly/starter-shared');

async function init() {
    let projectName;

    clear();
    console.log(chalk.rgb(46, 217, 195)(figlet.textSync('Medly', { horizontalLayout: 'full' })));
    console.log(chalk.rgb(46, 217, 195)('------------------------------------\n'));

    // Command information
    const program = new commander.Command(packageJson.name)
        .version(packageJson.version)
        .arguments('<project-name>')
        .option('-o, --owner <owner>', 'owner of the package')
        .addOption(new Option('-r, --registry <registry>', 'registry to publish the module').choices(['npm', 'github']))
        .addOption(
            new Option('-p, --package-manager  <package-manager>', 'package manager').choices(['npm', 'yarn', 'pnpm']).default('yarn')
        )
        .option('-i, --interactive', 'show interactive questionnaire')
        .description('An application for generating either ts module or simple ts app')
        .usage(`${chalk.green('<project-name>')} [options]`)
        .action((name, options) => {
            if (options.registry && !options.owner) {
                console.error('Error: Owner of the repo required when you add registry option');
                process.exit(1);
            }
            projectName = name;
        })
        .parse(process.argv);

    const options = program.opts(),
        { registry, packageManager } = options.interactive ? await questions() : options;

    // Create project directory
    const projectRoot = path.resolve(projectName);
    fs.ensureDirSync(projectName);
    console.log('Creating the project at ' + chalk.green(projectRoot));

    // Copying template files
    fs.copySync(path.join(template, 'common'), projectRoot);
    registry ? fs.copySync(path.join(template, 'publishable'), projectRoot) : fs.copySync(path.join(template, 'simple'), projectRoot);

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
        { command: `${packageManager} start`, description: 'To start the project' },
        { command: `${packageManager} test`, description: 'To run the jest tests' },
        { command: `${packageManager} lint`, description: 'To run eslint' }
    ]);
}

init();
