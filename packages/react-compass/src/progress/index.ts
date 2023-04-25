import CircularProgress from './circular'
import LinearProgress from './linear'

export type {CircularProgressProps} from './circular'
export type {LinearProgressProps} from './linear'

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
