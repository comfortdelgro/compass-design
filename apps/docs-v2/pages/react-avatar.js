import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/components/avatars/avatars.md?@mui/markdown'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
