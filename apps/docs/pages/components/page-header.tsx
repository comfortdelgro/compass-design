import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/components/page-header/page-header.md?@comfortdelgro/compass-design'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
