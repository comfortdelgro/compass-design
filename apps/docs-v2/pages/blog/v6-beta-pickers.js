import * as React from 'react';
import TopLayoutBlog from 'docs/src/modules/components/TopLayoutBlog';
import { docs } from './v6-beta-pickers.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
