import {Document} from '@contentful/rich-text-types'
import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import RenderDocument from './renderDocument'
import styles from './styles/richtextRender.module.css'

interface Props {
  document?: Document
  platform?: 'react' | 'html'
  css?: CSS
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
            {...htmlProps}
            ref={richTextRenderRef}
            className={classNames(styles.richTextRender, 'cdg-richtext-render')}
          >
            {document ? RenderDocument(document, platform) : null}
          </div>
        </CssInjection>
      </>
    )
  },
)
export default RichTextRender
