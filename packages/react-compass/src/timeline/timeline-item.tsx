import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledItemContainer,
  StyledItemContentWrapper,
  StyledItemDot,
  StyledItemHeaderContainer,
  StyledItemLabel,
} from './timeline.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  label?: string
  dot?: unknown | Element
  identifier?: number
}

export type TimelineItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      label = '',
      identifier = 0,
      dot,
      ...delegated
    } = props
    const timelineItemRef = useDOMRef<HTMLDivElement>(ref)
    const items = React.Children.toArray(children)

    // classname for styling alternate
    const className = (prefix: string) => {
      if (identifier % 2 === 0) {
        return `${prefix}-even`
      }
      return `${prefix}-odd`
    }
    return (
      <>
        <StyledItemContainer
          css={css}
          ref={timelineItemRef}
          {...delegated}
          className={className('itemContainer')}
        >
          <StyledItemHeaderContainer className={className('header')}>
            <StyledItemDot>{dot}</StyledItemDot>
            <StyledItemLabel className={className('label')}>
              {label}
            </StyledItemLabel>
          </StyledItemHeaderContainer>
          <StyledItemContentWrapper className={className('content')}>
            {children}
          </StyledItemContentWrapper>
        </StyledItemContainer>
      </>
    )
  },
)

export default TimelineItem
