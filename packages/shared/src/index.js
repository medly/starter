const addProjectDetails = require('./addProjectDetails');
const installDependencies = require('./installDependencies');
const printMedly = require('./printMedly');
const updateHuskyCommands = require('./updateHuskyCommands');
const removeProjectFolder = require('./removeProjectFolder');
const printGenericError = require('./printGenericError');
const updateTokensInGithubWorkflow = require('./updateTokensInGithubWorkflow');

module.exports = {
    printMedly,
    addProjectDetails,
    installDependencies,
    updateHuskyCommands,
    removeProjectFolder,
    printGenericError,
    updateTokensInGithubWorkflow
};
