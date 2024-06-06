import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { AriaNumberFieldProps } from './utils/types';
interface Props extends AriaNumberFieldProps {
    css?: CSS;
    helperText?: string;
    isErrored?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    placeholder?: string;
    errorMessage?: string;
    disableScroll?: boolean;
    className?: string;
    onUpdate?: (value: string | number | readonly string[] | undefined, number: number) => void;
}
export type QuantityToggleProps = Props & Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>;
declare const QuantityToggle: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props> & React.RefAttributes<HTMLInputElement>>;
export default QuantityToggle;
