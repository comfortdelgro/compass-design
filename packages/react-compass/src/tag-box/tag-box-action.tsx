import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props {
  css?: unknown
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
