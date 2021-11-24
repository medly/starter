const fs = require('fs-extra');
const path = require('path');

module.exports = ({ projectName, language }) => {
    const projectRoot = path.resolve(projectName),
        template = path.join(__dirname, '../template');

    // Moves files under 'common' into projectRoot
    fs.copySync(path.join(template, 'common'), projectRoot);

    fs.copySync(path.join(template, language), projectRoot);

    fs.copySync(path.join(template, `./simple/${language}`), projectRoot);
};
