import { defineConfig } from 'eslint-define-config';

export = defineConfig({
  extends: [
    './base',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
});
