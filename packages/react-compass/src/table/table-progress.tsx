import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/table-progress.module.css'

interface Props {
  progress: number
  css?: unknown
  className?: string
}

export type ProgressPercentageProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ProgressPercentage: React.FC<ProgressPercentageProps> = ({
  progress,
  css = {},
  className,
}: ProgressPercentageProps) => {
  let status = ''
  if (progress >= 0 && progress <= 30) {
    status = 'low'
  } else if (progress >= 30 && progress <= 60) {
    status = 'average'
  } else {
    status = 'high'
  }
  const ref = React.useRef()
  const progressClass = [
    styles.cdgTableProgress,
    status === 'low' && styles.progressLow,
    status === 'average' && styles.progressAverage,
    status === 'high' && styles.progressHigh,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <CssInjection css={css} childrenRef={ref}>
      <div className={styles.cdgTableProgressBar}>
        <div className={progressClass} style={{width: `${progress}%`}}></div>
        <span className={styles.cdgTableProgressLabel}>{`${progress}%`}</span>
      </div>
    </CssInjection>
  )
}

export default ProgressPercentage
