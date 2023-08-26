import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import TimelineItem from './timeline-item'
import {
  StyledTimeline,
  StyledTimeLineContainer,
  TimelineVariantProps,
} from './timeline.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isDisabled?: boolean
}

export type TimelineProps = Props &
  TimelineVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      children,
      // StyledComponentProps
      css = {},
      // VariantProps
      mode = 'vertical',
      labelAlignment = 'right',
      itemAlignment = 'right',

      // HTMLDiv Props
      ...delegated
    } = props

    const timelineRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledTimeLineContainer
        className='cdg-timeline-container'
        mode={mode}
        labelAlignment={labelAlignment}
        itemAlignment={itemAlignment}
      >
        <StyledTimeline
          css={css}
          ref={timelineRef}
          {...delegated}
          mode={mode}
          labelAlignment={labelAlignment}
          itemAlignment={itemAlignment}
          className='cdg-timeline'
        >
          {children}
        </StyledTimeline>
      </StyledTimeLineContainer>
    )
  },
)

export default Timeline as typeof Timeline & {
  Item: typeof TimelineItem
}
