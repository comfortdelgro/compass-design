import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'data/components/accordions/accordions.md'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
