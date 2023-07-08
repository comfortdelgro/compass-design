import * as React from 'react';
import TopLayoutBlog from 'docs/src/modules/components/TopLayoutBlog';
import { docs } from './2022-tenerife-retreat.md?@mui/markdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
