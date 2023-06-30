import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {
  DataGridProgressBarVariantProps,
  StyledDataGridProgress,
  StyledDataGridProgressBar,
  StyledDataGridProgressLabel,
} from './data-grid-progress.styles'

interface Props extends StyledComponentProps {
  progress: number
}

export type ProgressPercentageProps = Props &
  DataGridProgressBarVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ProgressPercentage: React.FC<ProgressPercentageProps> = ({
  progress,
}: ProgressPercentageProps) => {
  let status = ''
  if (progress >= 0 && progress <= 30) {
    status = 'low'
  } else if (progress >= 30 && progress <= 60) {
    status = 'average'
  } else {
    status = 'high'
  }

  return (
    <StyledDataGridProgressBar className='progress-bar'>
      <StyledDataGridProgress
        className={`progress ${status}`}
        style={{width: `${progress}%`}}
      ></StyledDataGridProgress>
      <StyledDataGridProgressLabel className='progress-label'>{`${progress}%`}</StyledDataGridProgressLabel>
    </StyledDataGridProgressBar>
  )
}

export default ProgressPercentage
