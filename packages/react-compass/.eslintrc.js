module.exports = {
  root: true,
  extends: ['@comfortdelgro/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  rules: {
    '@typescript-eslint/restrict-template-expressions': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: ['**/*.js', '**/*.cjs', '**/*.mjs', 'scripts/*'],
}
