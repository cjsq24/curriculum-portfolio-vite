module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  //ignorePatterns: ["/*"],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    //'no-undef': 'error',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'warn',
    'no-constant-condition': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
