module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },

  plugins: ["prettier"],

  extends: ["eslint:recommended", "prettier"],
};
