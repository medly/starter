const fs = require('fs-extra');
const path = require('path');

module.exports = (projectName, stateManager) => {
    const projectRoot = path.resolve(projectName),
        template = path.join(__dirname, '../template');

    // Moves files under 'common' into projectRoot
    fs.copySync(path.join(template, 'common'), projectRoot);

    if (stateManager === 'redux') {
        fs.copySync(path.join(template, `redux`), projectRoot);
    } else {
        fs.copySync(path.join(template, `simple`), projectRoot);
    }
};
