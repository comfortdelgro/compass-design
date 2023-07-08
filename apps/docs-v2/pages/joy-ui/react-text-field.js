import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/joy/components/text-field/text-field.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
