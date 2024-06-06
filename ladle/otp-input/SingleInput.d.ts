import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export interface SingleOTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    index: number;
    focus?: boolean;
    autoFocus?: boolean;
    css?: CSS;
    isNumberInput?: boolean;
    isMobile?: boolean;
    isErrored?: boolean;
}
declare const SingleOTPInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<SingleOTPInputProps & React.RefAttributes<HTMLInputElement>>>;
export default SingleOTPInput;
