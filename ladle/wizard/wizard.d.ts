import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import WizardItem from './item';
interface Props {
    css?: CSS;
    items?: string[];
    currentStep?: number;
    erroredSteps?: number[];
    children?: React.ReactNode;
    onStepClick?: (index: number) => void;
}
export type WizardProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof WizardItem;
};
export default _default;
