import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'data/components/menu-list/menu-list.md'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
