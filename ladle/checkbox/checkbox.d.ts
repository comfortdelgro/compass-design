import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    id?: string;
    css?: CSS;
    name?: string;
    value?: string;
    autoFocus?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isSelected?: boolean;
    defaultSelected?: boolean;
    isIndeterminate?: boolean;
    cssCheckBoxInput?: CSS;
    children?: React.ReactNode;
    validationState?: 'valid' | 'invalid';
    variant?: 'default' | 'rounded' | 'h5';
    onChange?: (isSelected: boolean) => void;
    onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export type CheckboxProps = Props & Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>;
declare const Checkbox: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props> & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
