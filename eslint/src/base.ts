import { defineConfig } from 'eslint-define-config';

export = defineConfig({
  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],

  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
});
