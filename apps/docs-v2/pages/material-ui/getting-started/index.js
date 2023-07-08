import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/material/getting-started/overview/overview.md?@mui/markdown'

export default function Page() {
  console.log(pageProps)
  return <MarkdownDocs {...pageProps} />
}
