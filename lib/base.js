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
    'no-console':['warn', { allow: ['warn', 'error'] }],
    // Best Practices
    eqeqeq: 'error',
    'no-multi-spaces': 'error',
    // Variables
    // Stylistic Issues
    'block-spacing': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'indent': ['error', 2],
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {'words': true,'nonwords': false}],
    'spaced-comment': ['error', 'always'],
    // ECMAScript 6
    'no-var': 'error',
    'prefer-const': 'error',
    // plugin
    'import/order': 'error',
  },
}
