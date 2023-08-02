import { defineConfig } from 'eslint-define-config';

import '@rushstack/eslint-patch/modern-module-resolution';

export = defineConfig({
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },

  extends: ['plugin:vue/vue3-recommended'],
});
