import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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

    const rootClasses = classNames(
      styles.cdgTableProgressBar,
      className,
      'cdg-table-progress',
    )

    const progressClasses = classNames(
      styles.cdgTableProgress,
      status === 'low' && styles.progressLow,
      status === 'average' && styles.progressAverage,
      status === 'high' && styles.progressHigh,
      'cdg-table-progress-current',
    )

    const labelClasses = classNames(
      styles.cdgTableProgressLabel,
      'cdg-table-progress-label',
    )

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
