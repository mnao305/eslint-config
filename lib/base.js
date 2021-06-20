module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:yml/standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    './rules/best-practices.js',
    './rules/es6.js',
    './rules/plugin.js',
    './rules/possible.js',
    './rules/stylistic-issues.js',
    './rules/variables.js',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'html',
    'node',
    'sort-keys-fix',
  ],
  rules: {
  },
}
