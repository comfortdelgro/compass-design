import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/components/calendar/calendar.md?@comfortdelgro/compass-design'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
