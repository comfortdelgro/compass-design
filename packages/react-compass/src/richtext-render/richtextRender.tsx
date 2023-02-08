
import {Document} from '@contentful/rich-text-types'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import RenderDocument from './renderDocument'
import {
  StyledRichTextRenderContainer,
  StyledRichTextRenderContainerProps,
} from './richtextRender.styles'

interface Props extends StyledComponentProps {
  document?: Document
}

export type RichTextRenderProps = Props &
  StyledRichTextRenderContainerProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const RichTextRender = React.forwardRef<HTMLInputElement, RichTextRenderProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // Component
      document,
      // element
      ...delegates
    } = props

    const richTextRenderRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledRichTextRenderContainer
        css={css}
        ref={richTextRenderRef}
        {...delegates}
      >
        {document ? RenderDocument(document) : null}
      </StyledRichTextRenderContainer>
    )
  },
)
export default RichTextRender
