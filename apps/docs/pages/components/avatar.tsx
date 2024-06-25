import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'data/components/avatars/avatars.md'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
