import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/customization/dark-mode/dark-mode.md?@mui/markdown'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}