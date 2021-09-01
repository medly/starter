const fs = require('fs-extra');
const path = require('path');

module.exports = ({ projectName, registry, org, access }) => {
    const projectRoot = path.resolve(projectName),
        package = fs.readJSONSync(path.join(projectRoot, 'template.json'));

    // Delete template.json file
    fs.removeSync(path.join(projectRoot, 'template.json'));

    // Update basic details based on the options chosen
    package.author = org || '';
    if (registry && registry !== `none`) {
        package.name = `@${org}/${projectName}`;
        package.repository = {
            type: 'git',
            url: `git://github.com/${org}/${projectName}.git`
        };
        package.homepage = `https://github.com/${org}/${projectName}#readme`;
        package.bugs = `https://github.com/${org}/${projectName}/issues`;
        package.publishConfig.registry = `${registry === 'github' ? 'https://npm.pkg.github.com' : 'https://registry.npmjs.org'}`;
        package.publishConfig.access = access;
    } else {
        package.name = projectName;
    }

    // Write update package.json
    fs.writeJSONSync(path.join(projectRoot, 'package.json'), package, {
        spaces: 4,
        EOL: '\n'
    });

    // Write readme file with package name
    fs.writeFileSync(path.join(projectRoot, 'README.md'), `# ${projectName}`);
};
