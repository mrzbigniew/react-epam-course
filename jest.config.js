module.exports = {
  setupTestFrameworkScriptFile: './enzyme.config.js',
  moduleNameMapper: {
    '\\.(scss|css)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  testMatch: [
    '**/*.spec.(js|jsx)',
  ],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.spec.{js,jsx}',
    '!src/index.jsx',
    '!**/*.{css,scss}',
    '!**/node_modules/**',
  ],
  setupFiles: [
    './setupJest.js',
  ],
};
