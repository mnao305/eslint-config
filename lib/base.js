module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:yml/standard',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: [
    'html',
    'node',
  ],
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  rules: {
    // Possible Errors
    // Best Practices
    // Variables
    // Stylistic Issues
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    // ECMAScript 6
    'no-var': 'error',
    // plugin
    'import/order': 'error',
  },
}
