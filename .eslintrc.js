module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    "keyword-spacing": ['error'],
  },
};
