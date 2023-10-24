import {Document} from '@contentful/rich-text-types'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import RenderDocument from './renderDocument'
import styles from './styles/richtextRender.module.css'

interface Props {
  document?: Document
  platform?: 'react' | 'html'
  css?: unknown
}

export type RichTextRenderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const RichTextRender = React.forwardRef<HTMLInputElement, RichTextRenderProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // Component
      document,
      platform = 'react',
      // element
      ...htmlProps
    } = props

    const richTextRenderRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <>
        <CssInjection css={css}>
          <div
            className={styles.richTextRender}
            ref={richTextRenderRef}
            {...htmlProps}
          >
            {document ? RenderDocument(document, platform) : null}
          </div>
        </CssInjection>
      </>
    )
  },
)
export default RichTextRender
