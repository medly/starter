const inquirer = require('inquirer');

const questions = [
    { type: 'list', name: 'registry', message: 'Registry to publish the module', choices: ['none', 'github', 'npm'], default: 'none' },
    { type: 'list', name: 'packageManager', message: 'Package Manager', choices: ['npm', 'yarn', 'pnpm'], default: 'yarn' },
    {
        type: 'input',
        name: 'owner',
        message: 'Owner of the package',
        when(answers) {
            return answers.registry !== 'none';
        }
    }
];

module.exports = async function () {
    return inquirer.prompt(questions);
};
