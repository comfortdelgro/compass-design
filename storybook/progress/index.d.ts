import CircularProgress from './progress.circular';
import LinearProgress from './progress.linear';
export type { CircularProgressProps } from './progress.circular';
export type { LinearProgressProps } from './progress.linear';
interface ComposableProgress {
    Circular: typeof CircularProgress;
    Linear: typeof LinearProgress;
}
declare const Progress: ComposableProgress;
export default Progress;
