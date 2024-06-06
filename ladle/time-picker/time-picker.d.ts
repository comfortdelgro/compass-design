import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { TextFieldProps } from '../textfield';
import { CSS } from '../utils/objectToCss';
import { ViewType } from './types';
interface Props {
    css?: CSS;
    className?: string;
    isErrored?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    formatTime?: string;
    hourStep?: number;
    minuteStep?: number;
    value?: string;
    hasFooter?: boolean;
    views?: ViewType[];
    defaultValue?: string;
    minTime?: string;
    isFloatingPortal?: boolean;
    onTimeChange?: (time: string) => void;
    onOpenChange?: (open: boolean) => void;
}
export type TimePickerProps = Props & TextFieldProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>;
declare const TimePicker: React.ForwardRefExoticComponent<Props & import("../textfield/textfield").Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof import("../textfield/textfield").Props> & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props> & React.RefAttributes<HTMLInputElement>>;
export default TimePicker;
