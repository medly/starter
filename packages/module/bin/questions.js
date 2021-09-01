const inquirer = require('inquirer');
const chalk = require('chalk');

const questions = cmdOptions => [
    {
        type: 'input',
        name: 'projectName',
        message: 'Project Name',
        default: 'medly-module',
        when: () => !cmdOptions.projectName
    },
    {
        type: 'list',
        name: 'registry',
        message: 'Registry to publish the module',
        choices: ['none', 'github', 'npm'],
        default: cmdOptions.registry || 'none',
        when: () => !cmdOptions.projectName || cmdOptions.interactive
    },
    {
        type: 'input',
        name: 'org',
        message: 'Name of the organization',
        when: answers => !cmdOptions.org && answers.registry && answers.registry !== 'none'
    },
    {
        type: 'list',
        name: 'access',
        message: 'Access level of the module',
        choices: [
            { name: chalk.hex('#00FF00')('Public'), value: 'public' },
            { name: chalk.hex('#FFFF00')('Restricted'), value: 'restricted' }
        ],
        default: cmdOptions.access,
        when: answers => !cmdOptions.access && answers.registry && answers.registry !== 'none'
    },
    {
        type: 'list',
        name: 'language',
        message: 'Language',
        choices: [
            { name: chalk.hex('#007acc')('typescript'), value: 'typescript' },
            { name: chalk.yellow('javascript'), value: 'javascript' }
        ],
        default: cmdOptions.language,
        when: () => !cmdOptions.projectName || cmdOptions.interactive
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
        default: cmdOptions.packageManager,
        when: () => !cmdOptions.projectName || cmdOptions.interactive
    }
];

module.exports = async cmdOptions => ({ ...cmdOptions, ...(await inquirer.prompt(questions(cmdOptions))) });
