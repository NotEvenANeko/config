import { defineConfig } from 'eslint-define-config';

import '@rushstack/eslint-patch/modern-module-resolution';

export = defineConfig({
  plugins: ['jest'],

  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
});
