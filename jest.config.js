module.exports = {
    moduleNameMapper: {
        '\\.(scss|css)$' : '<rootDir>/__mocks__/styleMock.js'
    },
    testMatch: [
        '**/*.(spec|test).js?(x)'
    ]
}
