import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledTagBoxAction} from './tag-box.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type TagBoxActionProps = Props

const TagBoxAction = React.forwardRef<HTMLDivElement, TagBoxActionProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      children,
      ...delegated
    } = props

    const tagBoxActionRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledTagBoxAction css={css} ref={tagBoxActionRef} {...delegated}>
        {children}
      </StyledTagBoxAction>
    )
  },
)

export default TagBoxAction
