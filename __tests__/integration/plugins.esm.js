import dotenvPlugin from 'cypress-dotenv';

export default (on, config) => {
    config = dotenvPlugin(config, {}, true); // eslint-disable-line
    config.ignoreTestFiles = '**/cypress/*'; // eslint-disable-line

    return config;
};
