import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'
import eslintSimpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    extends: compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      '@rocketseat/eslint-config/react',
    ),
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': eslintSimpleImportSort,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'no-warning-comments': 'error',
      'no-console': [
        'error',
        {
          allow: ['debug', 'error'],
        },
      ],

      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/newline-after-import': 'warn',
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: { 'no-undef': 'off' },
  },
  globalIgnores(["*", "!assets/"]),
])
