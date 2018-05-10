module.exports = {
    setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
    moduleNameMapper: {
        '\\.(scss|css)$' : '<rootDir>/src/__mocks__/styleMock.js'
    },
    testMatch: [
        '**/*.spec.(js|jsx)',
    ],
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/index.jsx',
        '!**/*.{css,scss}',
        '!**/node_modules/**',
        '!src/__tests__/**'
    ]
}
