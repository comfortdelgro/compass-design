import * as React from 'react';
import TopLayoutBlog from 'docs/src/modules/components/TopLayoutBlog';
import { docs } from './mui-x-v5.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
