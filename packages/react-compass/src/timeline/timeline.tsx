import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/timeline.module.css'
import TimelineItem from './timeline-item'

interface Props {
  children?: React.ReactNode
  isDisabled?: boolean
  mode?: 'vertical' | 'horizontal'
  labelAlignment?: 'left' | 'right' | 'top' | 'bottom' | 'alternate'
  itemAlignment?: 'left' | 'right' | 'top' | 'bottom' | 'alternate'
  css?: CSS
}

export type TimelineProps = Props &
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
      className,

      // HTMLDiv Props
      ...htmlProps
    } = props

    const timelineRef = useDOMRef<HTMLDivElement>(ref)

    //  classes
    const timelineContainerClasses = classNames(
      styles.timelineContainer,
      styles[`timelineContainer-${mode}-${labelAlignment}-${itemAlignment}`],
      className,
      'cdg-timeline-container',
    )

    const timelineClasses = classNames(
      styles.timeline,
      styles[`timeline-${mode}-${labelAlignment}-${itemAlignment}`],
      className,
      'cdg-timeline',
    )

    return (
      <>
        <CssInjection css={css}>
          <div
            {...htmlProps}
            ref={timelineRef}
            className={timelineContainerClasses}
          >
            <div className={timelineClasses}>{children}</div>
          </div>
        </CssInjection>
      </>
    )
  },
) as typeof Timeline & {
  Item: typeof TimelineItem
}

export default Timeline
