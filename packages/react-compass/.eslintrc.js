module.exports = {
  root: true,
  extends: ['@comfortdelgro/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/restrict-template-expressions': 'off',
  },
  ignorePatterns: ['**/*.js', '**/*.cjs', '**/*.mjs', 'scripts/*'],
}
