import { defineConfig } from 'eslint-define-config';

import '@rushstack/eslint-patch/modern-module-resolution';

export = defineConfig({
  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
    project: true,
  },

  plugins: ['@typescript-eslint'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
  ],
});
