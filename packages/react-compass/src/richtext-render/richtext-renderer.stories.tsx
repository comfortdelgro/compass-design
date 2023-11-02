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
