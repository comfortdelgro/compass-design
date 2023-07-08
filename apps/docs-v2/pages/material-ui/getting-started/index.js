import * as pageProps from 'docs/data/material/getting-started/overview/overview.md?@mui/markdown'
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs'

export default function Page() {
  console.log(pageProps)
  return <MarkdownDocs {...pageProps} />
}
