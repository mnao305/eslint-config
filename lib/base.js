module.exports = {
  extends: [
    'standard',
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
  rules: {
    'import/order': 'error'
  }
}
