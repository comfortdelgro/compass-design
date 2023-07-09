import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/components/autocomplete/autocomplete.md?@mui/markdown'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
