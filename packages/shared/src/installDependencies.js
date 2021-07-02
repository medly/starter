const { execSync, spawnSync } = require('child_process');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

module.exports = packageManager => {
    let package = fs.readJSONSync(path.resolve('package.json'));
    const { dependencies, devDependencies } = package;

    // Remove dependencies in array format
    package.dependencies = {};
    package.devDependencies = {};

    // Change command based on the package manager choice
    package = JSON.parse(JSON.stringify(package).replace(/yarn/g, packageManager === 'npm' ? 'npm run' : packageManager));

    // Write updated package.json
    fs.writeJSONSync(path.join('package.json'), package, {
        spaces: 4,
        EOL: '\n'
    });

    if (packageManager === 'pnpm') {
        try {
            execSync('pnpm --version');
        } catch (err) {
            console.log(chalk.green('Installing pnpm'));
            execSync('npm install -g pnpm');
        }
    }
    try {
        const param =
            packageManager === 'yarn'
                ? ['add', '--prefer-offline', '--silent']
                : packageManager === 'npm'
                ? ['install', '--legacy-peer-deps']
                : ['add'];
        dependencies?.length > 0 &&
            spawnSync(packageManager, [...param, ...dependencies], {
                stdio: 'inherit'
            });
        devDependencies?.length > 0 && spawnSync(packageManager, [...param, '-D', ...devDependencies], { stdio: 'inherit' });
    } catch (error) {
        console.log(chalk.red('\nInstalling dependency failed with error: \n'));
        console.log(chalk.red(error));

        console.log('\n🛠️ ' + '  Possible resolution \n');

        packageManager === 'yarn' && console.log('If there is any cache issue, you can try running -> ', chalk.green('yarn cache clean'));
        packageManager === 'npm' &&
            console.log(
                'If there is any peer dependency error, you can try running -> ',
                chalk.green('npm config set legacy-peer-deps true')
            );

        throw new Error();
    }
};
