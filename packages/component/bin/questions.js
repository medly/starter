const inquirer = require('inquirer');
const chalk = require('chalk');

const questions = cmdOptions => [
    {
        type: 'input',
        name: 'projectName',
        message: 'Project Name',
        default: 'test-component',
        when: () => !cmdOptions.projectName
    },
    {
        type: 'list',
        name: 'registry',
        message: 'Registry to publish the module',
        choices: ['github', 'npm'],
        default: cmdOptions.registry,
        when: () => !cmdOptions.projectName || cmdOptions.interactive
    },
    {
        type: 'input',
        name: 'owner',
        message: 'Owner of the package',
        when: () => !cmdOptions.owner || !cmdOptions.interactive
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
    }
];

module.exports = async cmdOptions => ({ ...cmdOptions, ...(await inquirer.prompt(questions(cmdOptions))) });
