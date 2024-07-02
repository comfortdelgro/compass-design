import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface RadioGroupContextValue {
    value: string | null;
    handleOnClickRadionButton: (value: string) => void;
    radioName: string;
}
export declare const RadioContext: React.Context<RadioGroupContextValue>;
interface Props {
    value?: string;
    children?: React.ReactNode;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    'aria-labelledby'?: string;
    groupName?: string;
    orientation?: 'vertical' | 'horizontal';
    css?: CSS;
}
export type RadioGroupProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const RadioGroup: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default RadioGroup;
