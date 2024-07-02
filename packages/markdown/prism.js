const prism = require('prismjs');
require('prismjs/components/prism-css');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');

function highlight(code) {
  return prism.highlight(code, prism.languages.tsx);
}

module.exports = highlight;
