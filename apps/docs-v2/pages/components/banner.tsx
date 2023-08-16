import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/components/banner/banner.md?@comfortdelgro/compass-design'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
