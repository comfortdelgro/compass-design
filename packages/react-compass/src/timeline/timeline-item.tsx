import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledItemContainer,
  StyledItemDot,
  StyledItemHeaderContainer,
  StyledItemLabel,
} from './timeline.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  label?: string
  dot?: unknown | Element
}

export type TimelineItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (props, ref) => {
    const {children, css = {}, label = '', dot, ...delegated} = props
    const timelineItemRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledItemContainer css={css} ref={timelineItemRef} {...delegated}>
        <StyledItemHeaderContainer>
          <StyledItemDot>{dot}</StyledItemDot>
          <StyledItemLabel>{label}</StyledItemLabel>
        </StyledItemHeaderContainer>
        {children}
      </StyledItemContainer>
    )
  },
)

export default TimelineItem
