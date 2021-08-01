const { configure } = require('@medly/jest-config-react');

module.exports = configure({
    rootDir: './',
    collectCoverageFrom: ['!<rootDir>/src/**/context/**'],
    moduleNameMapper: {
        '^@context(.*)$': '<rootDir>/src/context$1'
    }
});
