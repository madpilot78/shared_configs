module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@getify/proper-arrows', 'promise'],
  rules: {
    '@getify/proper-arrows/params': [
      'error',
      {
        unused: 'trailing',
        count: 2,
        length: 0
      }
    ],
    '@getify/proper-arrows/this': ['warn', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['warn'],
    'comma-dangle': ['error', 'never'],
    curly: ['error', 'all'],
    'default-case-last': ['error'],
    'dot-notation': ['error'],
    eqeqeq: ['error', 'always'],
    'no-array-constructor': ['error'],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
        onlyOneSimpleParam: true
      }
    ],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true
      }
    ],
    'no-eval': ['error'],
    'no-lone-blocks': ['error'],
    'no-nested-ternary': ['error'],
    'no-return-assign': ['error', 'always'],
    'no-script-url': ['error'],
    'no-self-compare': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-use-before-define': ['error'],
    'no-useless-call': ['error'],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'consistent-as-needed'],
    'prefer-arrow-callback': ['warn'],
    'prefer-const': ['error'],
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      }
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false
      }
    ],
    yoda: ['error', 'never']
  }
}
