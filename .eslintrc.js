module.exports = {
  globals: {
    module: true,
    require: true,
  },
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
};
