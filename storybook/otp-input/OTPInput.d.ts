import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export interface Props {
    otp?: string;
    css?: CSS;
    length?: number;
    disabled?: boolean;
    isMobile?: boolean;
    autoFocus?: boolean;
    isErrored?: boolean;
    isNumberInput?: boolean;
    onChangeOTP: (otp: string) => void;
}
export type OTPInputProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const OTPInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>>;
export default OTPInput;
