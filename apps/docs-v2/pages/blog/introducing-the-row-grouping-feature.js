import * as React from 'react';
import TopLayoutBlog from 'docs/src/modules/components/TopLayoutBlog';
import { docs } from './introducing-the-row-grouping-feature.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
