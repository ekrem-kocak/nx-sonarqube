const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text'], // here
  testResultsProcessor: 'jest-sonar-reporter', // here
};
