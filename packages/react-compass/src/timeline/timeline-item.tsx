import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/timeline.module.css'

interface Props {
  children?: React.ReactNode
  label?: React.ReactNode | string
  icon?: React.ReactNode
  dot?: React.ReactNode
  identifier?: number
  css?: CSS
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
      icon,
      dot,
      ...htmlProps
    } = props
    const timelineItemRef = useDOMRef<HTMLDivElement>(ref)

    // classname for styling alternate
    const itemContainerClasses = classNames(
      identifier % 2 === 0
        ? styles.itemContainer + ' ' + styles['itemContainer-even']
        : styles.itemContainer + ' ' + styles['itemContainer-odd'],
      'cdg-timeline-item',
    )

    const itemHeaderContainerClasses = classNames(
      identifier % 2 === 0
        ? styles.itemHeaderContainer + ' ' + styles['header-even']
        : styles.itemHeaderContainer + ' ' + styles['header-odd'],
      'cdg-timeline-item-header',
    )

    const itemContentClasses = classNames(
      identifier % 2 === 0
        ? styles.content + ' ' + styles['content-even']
        : styles.content,
      'cdg-timeline-item-content',
    )

    const itemDotClasses = classNames(styles.itemDot, 'cdg-timeline-item-dot')

    const itemLabelClasses = classNames(
      styles.itemLabel,
      'cdg-timeline-item-dot',
    )

    return (
      <CssInjection css={css}>
        <div
          ref={timelineItemRef}
          {...htmlProps}
          className={itemContainerClasses}
        >
          <div className={itemHeaderContainerClasses}>
            {!dot ? <div className={itemDotClasses}>{icon}</div> : dot}
            {typeof label === 'string' ? (
              <div className={itemLabelClasses}>{label}</div>
            ) : (
              label
            )}
          </div>
          <div className={itemContentClasses}>{children}</div>
        </div>
      </CssInjection>
    )
  },
)

export default TimelineItem
