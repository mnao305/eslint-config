module.exports = {
  extends: ['../lib/base.js', '../lib/typescript.js', '../lib/vue.js'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
}
