const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'owner',
        message: 'Owner of the package',
        when(answers) {
            return answers.registry !== 'none';
        }
    },
    { type: 'list', name: 'language', message: 'Language', choices: ['typescript', 'javascript'], default: 'typescript' },
    { type: 'list', name: 'registry', message: 'Registry to publish the module', choices: ['none', 'github', 'npm'], default: 'none' },
    { type: 'list', name: 'packageManager', message: 'Package Manager', choices: ['npm', 'yarn', 'pnpm'], default: 'yarn' }
];

module.exports = async function () {
    return inquirer.prompt(questions);
};
