import babelEslintParser from '@babel/eslint-parser'
import babelPluginSyntaxImportAttributes from '@babel/plugin-syntax-import-assertions'
import madpilotEslintConfigBase from '@madpilot78/eslint-config-base'

export default [
  ...madpilotEslintConfigBase,
  {
    languageOptions: {
      parser: babelEslintParser,
      parserOptions: {
        babelOptions: {
          plugins: [babelPluginSyntaxImportAttributes]
        },
        requireConfigFile: false
      },
      globals: {
        module: 'readonly'
      }
    }
  }
]
