import { defineConfig } from 'eslint-define-config';

export = defineConfig({
  plugins: ['prettier'],

  extends: ['prettier'],
});
