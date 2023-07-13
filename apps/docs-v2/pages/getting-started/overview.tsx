import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/getting-started/overview/overview.md?@comfortdelgro/compass-design'

export default function Page() {
  console.log(pageProps)
  return <MarkdownDocs {...pageProps} />
}
