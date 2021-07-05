const fs = require('fs-extra');
const path = require('path');

module.exports = () => {
    const filePath = path.resolve('.github/workflows/release.yml');
    const content = fs.readFileSync(filePath, 'utf8');
    fs.writeFileSync(filePath, content.replace(/secrets.NPM_TOKEN/g, `secrets.ADMIN_TOKEN`));
};
