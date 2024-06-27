import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'data/components/calendar/calendar.md'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
