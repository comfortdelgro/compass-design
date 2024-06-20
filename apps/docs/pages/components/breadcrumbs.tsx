import MarkdownDocs from 'components/MarkdownDocs'
import * as pageProps from 'docs/data/components/breadcrumbs/breadcrumbs.md?@comfortdelgro/compass-design'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
