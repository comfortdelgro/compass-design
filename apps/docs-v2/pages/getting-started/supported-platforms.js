import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/getting-started/supported-platforms/supported-platforms.md?@mui/markdown'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}