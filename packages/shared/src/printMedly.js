const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

module.exports = () => {
    clear();
    console.log(chalk.rgb(46, 217, 195)(figlet.textSync('Medly', { horizontalLayout: 'full' })));
    console.log(chalk.rgb(46, 217, 195)('------------------------------------\n'));
};
