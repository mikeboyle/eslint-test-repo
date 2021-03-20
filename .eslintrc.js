module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
