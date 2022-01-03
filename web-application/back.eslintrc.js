module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  plugins: ['prettier'],
};