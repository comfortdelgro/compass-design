import React, {useMemo} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/timeline.module.css'
import TimelineItem from './timeline-item'

interface Props {
  children?: React.ReactNode
  isDisabled?: boolean
  mode?: 'vertical' | 'horizontal'
  labelAlignment?: 'left' | 'right' | 'top' | 'bottom' | 'alternate'
  itemAlignment?: 'left' | 'right' | 'top' | 'bottom' | 'alternate'
  css?: unknown
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
    const timelineContainerClasses = useMemo(() => {
      return [
        styles.timelineContainer,
        styles[`timelineContainer-${mode}-${labelAlignment}-${itemAlignment}`],
        className,
        'cdg-timeline-container',
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, itemAlignment, labelAlignment, mode])

    const timelineClasses = useMemo(() => {
      return [
        styles.timeline,
        styles[`timeline-${mode}-${labelAlignment}-${itemAlignment}`],
        className,
        'cdg-timeline',
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, itemAlignment, labelAlignment, mode])

    return (
      <>
        <CssInjection css={css}>
          <div
            ref={timelineRef}
            {...htmlProps}
            className={timelineContainerClasses}
          >
            <div className={timelineClasses}>{children}</div>
          </div>
        </CssInjection>
      </>
    )
  },
)

export default Timeline as typeof Timeline & {
  Item: typeof TimelineItem
}
