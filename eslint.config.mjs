import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      'prefer-const': [
        'warn',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
        },
      ],
      'react/hook-use-state': ['warn', { allowDestructuredState: true }],
      'react/react-in-jsx-scope': 'warn',
      'consistent-return': 'off',
      'no-useless-return': 'off',
      'no-plusplus': 'off',
      'no-var': 'error',
    },
  },
  {
    ignores: [
      '**/dev/**',
      '**/dist/**',
      '**/tests/**',
      'build/**',
      '.idea/**',
      'tsconfig.json',
      'eslint.config.mjs',
      'stylelint.config.js',
      '.prettierrc',
      'webpack.config.js',
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
];

