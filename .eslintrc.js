module.exports = {
  root: true,

  parserOptions: {
    sourceType: 'module',
    project: ['./eslint/tsconfig.json', './prettier/tsconfig.json'],
  },

  extends: [
    '@notevenaneko/eslint-config',
    '@notevenaneko/eslint-config/prettier',
  ],
};
