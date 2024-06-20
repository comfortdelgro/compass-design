import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'docs/data/components/table/table.md?@comfortdelgro/compass-design'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
