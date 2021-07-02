const chalk = require('chalk');

module.exports = error => {
    console.log(
        '\nPlease help us in improving the package by raising the bug with the screenshot of the error on this link --> ' +
            chalk.blue(' https://github.com/medly/starter/issues')
    );
    error && error.toString() !== 'Error' && console.log('\n' + chalk.red(error) + '\n');
};
