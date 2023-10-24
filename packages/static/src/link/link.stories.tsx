import {Meta} from '@storybook/react'
import React from 'react'
import Link from './index'

export const Default: React.FC = () => (
  <div>
    <section>
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
    </section>
    <h3>Example: </h3>
    <span>
      <Link href='/#page'>Go to another page</Link>
    </span>
    <span>
      <Link href='https://google.com' external>
        Go to Google
      </Link>
    </span>
  </div>
)

const meta = {
  title: 'Example/Link',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
