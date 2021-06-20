// Stylistic Issues
// https://eslint.org/docs/rules/#stylistic-issues
module.exports = {
  rules: {
    'block-spacing': 'error',
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'after': true, 'before': false }],
    'comma-style': ['error', 'last'],
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'asyncArrow': 'always',
      'named': 'never',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {'nonwords': false, 'words': true}],
    'spaced-comment': ['error', 'always'],
  },
}
