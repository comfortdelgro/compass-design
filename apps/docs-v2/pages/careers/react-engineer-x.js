import * as React from 'react';
import TopLayoutCareers from 'docs/src/modules/components/TopLayoutCareers';
import * as pageProps from 'docs/src/pages/careers/react-engineer-x.md?@mui/markdown';

export default function Page() {
  return <TopLayoutCareers {...pageProps} />;
}
