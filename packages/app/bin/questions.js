const inquirer = require('inquirer');

const questions = [{ type: 'list', name: 'packageManager', message: 'Package Manager', choices: ['npm', 'yarn', 'pnpm'], default: 'yarn' }];

module.exports = async function () {
    return inquirer.prompt(questions);
};
