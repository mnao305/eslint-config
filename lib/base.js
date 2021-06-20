module.exports = {
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
  plugins: [
    'html',
    'node',
    'sort-keys-fix',
  ],
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: {
  },
}
