import React from 'react'
import {Column, Row} from '../utils/components'
import RichTextRender, {Document} from './index'

const richTextDoc = {
  nodeType: 'document',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
      content: [
        {
          nodeType: 'text',
          value: 'First ',
          marks: [],
          data: {},
        },
        {
          nodeType: 'text',
          value: 'paragraph',
          marks: [
            {
              type: 'bold',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value: ' with\na line break.',
          marks: [],
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
          value: 'Second',
          marks: [
            {
              type: 'italic',
            },
          ],
          data: {},
        },
        {
          nodeType: 'text',
          value: ' paragraph and\na line break and another\nline break.',
          marks: [],
          data: {},
        },
      ],
      data: {},
    },
  ],
}

export const Default: React.FC = () => (
  <Column>
    <Row>
      <RichTextRender document={richTextDoc as Document} />
    </Row>
  </Column>
)
