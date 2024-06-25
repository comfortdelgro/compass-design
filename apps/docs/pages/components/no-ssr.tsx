import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'data/components/no-ssr/no-ssr.md'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
