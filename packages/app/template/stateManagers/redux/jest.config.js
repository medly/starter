const { configure } = require('@medly/jest-config-react');

module.exports = configure({
    rootDir: './',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/**/index.(ts|tsx)',
        '!<rootDir>/src/**.(ts|tsx)',
        '!<rootDir>/src/theme/**',
        '!<rootDir>/src/icons/**',
        '!<rootDir>/src/store/sagas.ts',
        '!<rootDir>/src/utils/styled.ts',
        '!<rootDir>/node_modules/**',
        '!<rootDir>/src/**/types.(ts|tsx)',
        '!<rootDir>/src/**/types/**',
        '!<rootDir>/src/utils/test-utils.tsx',
        '!<rootDir>/src/utils/fetch.ts',
        '!<rootDir>/src/routes/Routes.tsx',
        '!<rootDir>/src/constants/**'
    ],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/config/jest/__mocks__/styleMock.js',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@test-utils': '<rootDir>/src/utils/test-utils',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@theme(.*)$': '<rootDir>/src/theme$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@routes(.*)$': '<rootDir>/src/routes$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@testData(.*)$': '<rootDir>/testData'
    }
});
