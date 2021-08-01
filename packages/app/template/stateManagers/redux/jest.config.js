const { configure } = require('@medly/jest-config-react');

module.exports = configure({
    rootDir: './',
    moduleNameMapper: {
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@testData(.*)$': '<rootDir>/testData'
    }
});
