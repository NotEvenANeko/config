import { defineConfig } from 'eslint-define-config';

import '@rushstack/eslint-patch/modern-module-resolution';

export = defineConfig({
  extends: ['plugin:react/jsx-runtime', 'next/core-web-vitals'],
});
