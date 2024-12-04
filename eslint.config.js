import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginSort from 'eslint-plugin-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginSort.configs['flat/recommended'],
  {
    rules: {
      'sort/imports': [
        'warn',
        {
          groups: [
            { order: 10, type: 'side-effect' },
            { order: 20, type: 'dependency' },
            { order: 30, regex: '^(.*?)screens(.*?)$' },
            { order: 40, regex: '^(.*?)widgets(.*?)$' },
            { order: 50, regex: '^(.*?)features(.*?)$' },
            { order: 60, regex: '^(.*?)entities(.*?)$' },
            { order: 70, regex: '^(.*?)shared(.*?)$' },
            { order: 80, type: 'other' },
          ],
          separator: '\n',
        },
      ],
    },
  },
  {
    files: ['index.ts'],
    rules: {
      'sort/exports': [
        'error',
        {
          caseSensitive: false,
          groups: [],
          natural: true,
          typeOrder: 'preserve',
        },
      ],
    },
  },
]
