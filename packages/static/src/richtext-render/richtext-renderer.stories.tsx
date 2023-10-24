import {Meta} from '@storybook/react'
import React from 'react'
import RichTextRender, {Document} from './index'

export const Default: React.FC = () => {
  const richTextDocument = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            marks: [],
            value: 'I am an odd paragraph.',
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            marks: [],
            value: 'I am even.',
            data: {},
          },
        ],
        data: {},
      },
    ],
  }

  return <RichTextRender document={richTextDocument as Document} />
}

const meta = {
  title: 'Example/RichText Render',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
