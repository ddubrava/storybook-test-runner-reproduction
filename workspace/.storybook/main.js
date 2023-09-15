import { join, dirname } from 'path';

const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
};

export default config;
