import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/material/getting-started/faq/faq.md?@mui/markdown'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
