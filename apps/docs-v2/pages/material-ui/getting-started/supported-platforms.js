import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/material/getting-started/supported-platforms/supported-platforms.md?@mui/markdown'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
