import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
type Props = {
    rightLabel?: string;
    /** @default "lg" */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Color visualization of the current value.
     * @default "blue" // $info - #009EDA
     */
    color?: string;
    /**
     * Color of the progress bar.
     * @default "$gray30" // #EDEBE9
     */
    barColor?: string;
    /** @default "normal" */
    variant?: 'normal' | 'rounded';
    label?: string;
    /** @default 0 */
    value?: number;
    /** @default 0 */
    minValue?: number;
    /** @default 100 */
    maxValue?: number;
    onComplete?: () => void;
    loading?: 'stripes' | boolean;
    css?: CSS;
    className?: string;
};
export type ProgressBarProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const ProgressBar: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default ProgressBar;
