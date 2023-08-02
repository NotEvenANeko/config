import { defineConfig } from 'eslint-define-config';

export = defineConfig({
  extends: [require.resolve('./react'), 'next/core-web-vitals'],
});
