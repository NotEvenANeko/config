import { defineConfig } from 'eslint-define-config';

export = defineConfig({
  plugins: ['jest'],

  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
});
