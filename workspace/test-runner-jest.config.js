const { getJestConfig } = require('@storybook/test-runner');

const config = getJestConfig();

module.exports = {
    ...config,
    transform: {
        '^.+\\.stories\\.[jt]sx?$': '@storybook/test-runner/playwright/transform',
    },
};
