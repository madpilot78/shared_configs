module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 25
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off'
  }
}
