import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/material/components/avatars/avatars.md?@mui/markdown'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
