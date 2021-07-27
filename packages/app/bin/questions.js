const inquirer = require('inquirer');
const chalk = require('chalk');

const questions = cmdOptions => [
    {
        type: 'input',
        name: 'projectName',
        message: 'Project Name',
        default: 'medly-app',
        when: () => !cmdOptions.projectName
    },
    {
        type: 'list',
        name: 'packageManager',
        message: 'Package Manager',
        choices: [
            { name: chalk.hex('#CC3534')('npm'), value: 'npm' },
            { name: chalk.hex('#2C8EBB')('yarn'), value: 'yarn' },
            { name: chalk.hex('#F9AD00')('pnpm'), value: 'pnpm' }
        ],
        default: 'yarn',
        when: () => !cmdOptions.projectName || cmdOptions.interactive
    },
    {
        type: 'list',
        name: 'stateManager',
        message: 'State Manager',
        choices: [
            { name: chalk.hex('#593d88')('Redux'), value: 'redux' },
            { name: chalk.hex('#61dafb')('React Context'), value: 'context' },
            { name: chalk.hex('#767a7d')('None'), value: 'none' }
        ],
        default: 'redux',
        when: () => !cmdOptions.projectName || cmdOptions.interactive
    }
];

module.exports = async cmdOptions => ({ ...cmdOptions, ...(await inquirer.prompt(questions(cmdOptions))) });
