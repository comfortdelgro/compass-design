import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'data/components/sidebar/sidebar.md'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
