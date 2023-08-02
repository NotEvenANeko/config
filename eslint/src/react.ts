import { defineConfig } from 'eslint-define-config';

import '@rushstack/eslint-patch/modern-module-resolution';

export = defineConfig({
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
});
