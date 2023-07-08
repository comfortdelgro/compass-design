import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/customization/breakpoints/breakpoints.md?@mui/markdown'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
