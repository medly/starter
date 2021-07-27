const { configure } = require('@medly/jest-config-react');

module.exports = configure({
    rootDir: './',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/**/index.(ts|tsx)',
        '!<rootDir>/src/theme/**',
        '!<rootDir>/src/icons/**',
        '!<rootDir>/src/utils/styled.ts',
        '!<rootDir>/node_modules/**',
        '!<rootDir>/src/**/types.(ts|tsx)',
        '!<rootDir>/src/**/types/**',
        '!<rootDir>/src/**/pages/**',
        '!<rootDir>/src/**/context/**',
        '!<rootDir>/src/utils/test-utils.tsx'
    ],
    moduleNameMapper: {
        '^@styled': '<rootDir>/src/utils/styled',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@test-utils': '<rootDir>/src/utils/test-utils',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@theme(.*)$': '<rootDir>/src/theme$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@pages(.*)$': '<rootDir>/src/pages$1',
        '^@context(.*)$': '<rootDir>/src/context$1',
        '^@routes(.*)$': '<rootDir>/src/routes$1',
    }
});
