import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { ButtonProps } from '../../button';
interface Props {
    children?: React.ReactNode;
    buttonProps: ButtonProps;
    isInvalid?: boolean | undefined;
    label?: string | React.ReactNode | undefined;
    necessityIndicator?: 'icon' | 'label';
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isMobile?: boolean | undefined;
    helperText?: React.ReactNode;
    errorMessage?: React.ReactNode;
}
declare const DateField: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default DateField;
