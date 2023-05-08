import React from 'react'
import {Column} from '../utils/components'
import Link from './index'

export const Default: React.FC = () => (
  <Column>
    <p>
      <h3>Link</h3>
      The Link component is a TypeScript React component that renders a link to
      an external or internal URL.
      <ol>
        <li>
          It takes in several props, including css, href, target, external, and
          children.
        </li>
        <li>
          It takes in several props, including css, href, target, external, and
          children.
        </li>
        <li>The href prop is a string representing the URL to link to.</li>
        <li>
          The target prop is a string representing the target window or frame in
          which to open the linked document (e.g., "_blank" opens the linked
          document in a new window or tab).
        </li>
        <li>
          The external prop is a boolean indicating whether the link should open
          in a new window or tab.
        </li>
      </ol>
    </p>
    <h3>Example: </h3>
    <Link href='/#page'>Go to another page</Link>
    <Link href='https://google.com' external>
      Go to Google
    </Link>
  </Column>
)
