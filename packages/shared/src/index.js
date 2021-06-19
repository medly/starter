const addProjectDetails = require('./addProjectDetails');
const installDependencies = require('./installDependencies');
const printMedly = require('./printMedly');
const updateHuskyCommands = require('./updateHuskyCommands');
const removeProjectFolder = require('./removeProjectFolder');
const printGenericError = require('./printGenericError');

module.exports = {
    printMedly,
    addProjectDetails,
    installDependencies,
    updateHuskyCommands,
    removeProjectFolder,
    printGenericError
};
