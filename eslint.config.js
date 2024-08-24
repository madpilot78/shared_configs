import madpilotEslintConfigBase from '@madpilot78/eslint-config-base'

export default [
  ...madpilotEslintConfigBase,
  {
    extends: ['@madpilot78/eslint-config-base'],
    globals: {
      module: 'readonly'
    }
  }
]
