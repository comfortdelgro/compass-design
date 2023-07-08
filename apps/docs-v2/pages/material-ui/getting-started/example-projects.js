import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/material/getting-started/example-projects/example-projects.md?@mui/markdown'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
