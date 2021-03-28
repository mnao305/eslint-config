module.exports = {
  extends: [
    'standard',
    'plugin:jsonc/recommended-with-json',
    'plugin:yml/standard',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    'html'
  ],
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser'
    }
  ],
  rules: {}
}
