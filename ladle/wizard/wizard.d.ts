import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    items?: string[];
    currentStep?: number;
    erroredSteps?: number[];
    children?: React.ReactNode;
    onStepClick?: (index: number) => void;
}
export type WizardProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Wizard: any;
export default Wizard;
