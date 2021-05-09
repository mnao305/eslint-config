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
    'import/order': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'no-var': 'error',
  },
}
