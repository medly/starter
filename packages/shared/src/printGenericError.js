const chalk = require('chalk');
const removeProjectFolder = require('./removeProjectFolder');

module.exports = error => {
    removeProjectFolder();
    console.log(
        chalk.red('\n\nSomething went wrong.\n\n') +
            'Please help us in improving the package by raising the bug with error stack' +
            chalk.blue('\n\nhttps://github.com/medly/starter/issues')
    );
    console.log('\nError:\n\n' + chalk.red(error));
};
