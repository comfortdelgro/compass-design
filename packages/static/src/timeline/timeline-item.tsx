import React, {useMemo} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/timeline.module.css'

interface Props {
  children?: React.ReactNode
  label?: React.ReactNode | string
  icon?: React.ReactNode
  dot?: React.ReactNode
  identifier?: number
  css?: unknown
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
    const itemContainerClasses = () => {
      if (identifier % 2 === 0) {
        return styles.itemContainer + ' ' + styles['itemContainer-even']
      }
      return styles.itemContainer + ' ' + styles['itemContainer-odd']
    }

    const itemHeaderContainerClasses = () => {
      if (identifier % 2 === 0) {
        return styles.itemHeaderContainer + ' ' + styles['header-even']
      }
      return styles.itemHeaderContainer + ' ' + styles['header-odd']
    }

    const itemContentClasses = () => {
      if (identifier % 2 === 0) {
        return styles.content + ' ' + styles['content-even']
      }
      return styles.content
    }

    const itemDotClasses = useMemo(() => {
      return [styles.itemDot].filter(Boolean).join(' ')
    }, [])

    const itemLabelClasses = useMemo(() => {
      return [styles.itemLabel].filter(Boolean).join(' ')
    }, [])

    return (
      <CssInjection css={css}>
        <div
          ref={timelineItemRef}
          {...htmlProps}
          className={itemContainerClasses()}
        >
          <div className={itemHeaderContainerClasses()}>
            {!dot ? <div className={itemDotClasses}>{icon}</div> : dot}
            {typeof label === 'string' ? (
              <div className={itemLabelClasses}>{label}</div>
            ) : (
              label
            )}
          </div>
          <div className={itemContentClasses()}>{children}</div>
        </div>
      </CssInjection>
    )
  },
)

export default TimelineItem
