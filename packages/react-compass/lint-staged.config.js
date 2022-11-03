module.exports = {
  '!(src/*.{ts,tsx})': 'prettier --cache --write --ignore-unknown',
  'src/*.{ts,tsx}': [
    'prettier --cache --write --ignore-unknown',
    'eslint --cache --fix',
  ],
}
