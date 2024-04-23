import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-progress.module.css'

interface Props {
  css?: CSS
  progress: number
}

export type TableProgressProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TableProgress = React.forwardRef<HTMLDivElement, TableProgressProps>(
  (props, ref) => {
    const {css = {}, progress, className} = props
    const tableProgressRef = useDOMRef<HTMLDivElement>(ref)

    const status = React.useMemo(() => {
      if (progress >= 0 && progress <= 30) {
        return 'low'
      } else if (progress >= 30 && progress <= 60) {
        return 'average'
      } else {
        return 'high'
      }
    }, [progress])

    const rootClasses = [
      styles.cdgTableProgressBar,
      className,
      'cdg-table-progress',
    ]
      .filter(Boolean)
      .join(' ')

    const progressClasses = [
      styles.cdgTableProgress,
      status === 'low' && styles.progressLow,
      status === 'average' && styles.progressAverage,
      status === 'high' && styles.progressHigh,
      'cdg-table-progress-current',
    ]
      .filter(Boolean)
      .join(' ')

    const labelClasses = [
      styles.cdgTableProgressLabel,
      'cdg-table-progress-label',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={tableProgressRef}>
        <div className={rootClasses} ref={tableProgressRef}>
          <div
            className={progressClasses}
            style={{width: `${progress}%`}}
          ></div>
          <span className={labelClasses}>{`${progress}%`}</span>
        </div>
      </CssInjection>
    )
  },
)

export default TableProgress
