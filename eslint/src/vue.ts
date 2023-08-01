import { defineConfig } from 'eslint-define-config';

export = defineConfig({
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },

  extends: ['plugin:vue/vue3-recommended'],
});
