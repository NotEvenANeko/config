import { defineConfig } from 'eslint-define-config';

import '@rushstack/eslint-patch/modern-module-resolution';

export = defineConfig({
  plugins: ['prettier'],

  extends: ['prettier'],
});
