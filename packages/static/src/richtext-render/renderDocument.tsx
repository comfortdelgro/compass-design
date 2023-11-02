import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, Document} from '@contentful/rich-text-types'
import React from 'react'
interface childrenProps {
  children?: React.ReactNode
}

const RenderDocument = (
  document: Document,
  platform: 'react' | 'html' = 'react',
  options: unknown = undefined,
) => {
  const Text = ({children}: childrenProps) => <p>{children}</p>
  const documentOptions = options ?? {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
        <Text>{children}</Text>
      ),
    },
    renderText: (text: string) =>
      text
        .split('\n')
        .flatMap((text: string, i: number) => [i > 0 && <br />, text]),
  }
  return platform === 'react'
    ? documentToReactComponents(document, documentOptions)
    : documentToHtmlString(document)
}

export default RenderDocument
