import VueEslintParser from 'vue-eslint-parser'
import pluginVue from 'eslint-plugin-vue'

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      parser: VueEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
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
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off'
    }
  }
]
