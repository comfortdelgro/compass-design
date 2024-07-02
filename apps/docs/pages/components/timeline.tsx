import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'data/components/timeline/timeline.md'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
