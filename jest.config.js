const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

customJestConfig = {
  roots: ['<rootDir>/tests'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.+(js|ts)', '**/?(*.)+(spec|test).+(js|ts)'],
  transform: {
    '^.+\\.(js|ts)$': '@swc/jest',
    '^.+\\.(css|scss)$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['js', 'ts'],
};

module.exports = createJestConfig(customJestConfig);
