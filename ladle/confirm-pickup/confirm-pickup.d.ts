import { HTMLAttributes } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export type ConfirmPUPointProps = {
    css?: CSS;
    h5?: boolean;
    onConfirmPickup: (specificPUPoint?: string) => void;
    onChangePUPoint?: () => void;
    placeholder?: string;
    puPointTitle: string;
    puPointDescription: string;
    specificPUPoint: string;
} & HTMLAttributes<HTMLDivElement>;
declare const ConfirmPUPoint: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MemoExoticComponent<import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<{
    css?: CSS;
    h5?: boolean;
    onConfirmPickup: (specificPUPoint?: string) => void;
    onChangePUPoint?: () => void;
    placeholder?: string;
    puPointTitle: string;
    puPointDescription: string;
    specificPUPoint: string;
} & HTMLAttributes<HTMLDivElement> & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>>;
export default ConfirmPUPoint;
