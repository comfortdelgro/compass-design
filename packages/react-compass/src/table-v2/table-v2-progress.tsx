import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {
  StyledTableV2Progress,
  StyledTableV2ProgressBar,
  StyledTableV2ProgressLabel,
  TableV2ProgressBarVariantProps,
} from './table-v2-progress.styles'

interface Props extends StyledComponentProps {
  progress: number
}

export type ProgressPercentageProps = Props &
  TableV2ProgressBarVariantProps &
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
    <StyledTableV2ProgressBar className='progress-bar'>
      <StyledTableV2Progress
        className={`progress ${status}`}
        css={{width: `${progress}%`}}
      ></StyledTableV2Progress>
      <StyledTableV2ProgressLabel className='progress-label'>{`${progress}%`}</StyledTableV2ProgressLabel>
    </StyledTableV2ProgressBar>
  )
}

export default ProgressPercentage
