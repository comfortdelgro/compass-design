import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props {
  css?: CSS
  children?: React.ReactNode
}

export type TagBoxActionProps = Props

const TagBoxAction = React.forwardRef<HTMLDivElement, TagBoxActionProps>(
  (props, ref) => {
    const {css = {}, children, ...htmlProps} = props

    const tagBoxActionRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css}>
        <div ref={tagBoxActionRef} {...htmlProps}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default TagBoxAction
