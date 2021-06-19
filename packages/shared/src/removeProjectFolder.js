const fs = require('fs-extra');

module.exports = projectName => {
    if (fs.existsSync(projectName)) {
        fs.removeSync(projectName);
    } else {
        process.chdir('../');
        fs.existsSync(projectName) && fs.removeSync(projectName);
    }
};
