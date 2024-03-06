import CircularProgress from './progress.circular'
import LinearProgress from './progress.linear'

export type {CircularProgressProps} from './progress.circular'
export type {LinearProgressProps} from './progress.linear'

interface ComposableProgress {
  Circular: typeof CircularProgress
  Linear: typeof LinearProgress
}

const Progress: ComposableProgress = {
  Circular: CircularProgress,
  Linear: LinearProgress,
}

Progress.Circular.displayName = 'Progress.Circular'
Progress.Linear.displayName = 'Progress.Linear'

export default Progress
