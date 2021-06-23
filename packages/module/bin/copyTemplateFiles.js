const fs = require('fs-extra');
const path = require('path');

module.exports = ({ projectName, registry, language }) => {
    const projectRoot = path.resolve(projectName),
        template = path.join(__dirname, '../template');

    fs.copySync(path.join(template, 'common'), projectRoot);
    fs.copySync(path.join(template, language), projectRoot);

    if (registry && registry !== 'none') {
        fs.copySync(path.join(template, `./publishable/common`), projectRoot);
        fs.copySync(path.join(template, `./publishable/${language}`), projectRoot);
    } else {
        fs.copySync(path.join(template, `./simple/${language}`), projectRoot);
    }
};
