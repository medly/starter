const fs = require('fs-extra');
const path = require('path');

module.exports = packageManager => {
    const fileNames = fs.readdirSync(path.resolve('.husky'));
    fileNames
        .filter(fileName => fileName !== '_' && fileName !== '.gitignore')
        .forEach(fileName => {
            const filePath = `.husky/${fileName}`;
            const content = fs.readFileSync(filePath, 'utf8');
            fs.writeFileSync(filePath, content.replace(/yarn run/g, `${packageManager} run`));
        });
};
