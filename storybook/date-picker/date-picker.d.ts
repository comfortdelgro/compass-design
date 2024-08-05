import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { SpectrumDatePickerProps } from '../calendar/types';
import { DateValue } from '../internationalized/date';
import { CSS } from '../utils/objectToCss';
interface Props extends SpectrumDatePickerProps<DateValue> {
    css?: CSS;
    children?: React.ReactNode;
    label?: string | React.ReactNode;
    isInvalid?: boolean;
    isMobile?: boolean;
    shouldCloseOnSelect?: boolean;
    maxValue?: DateValue | null | undefined;
    calendarCSS?: CSS;
    helperText?: React.ReactNode;
    ctaButtonRender?: React.ReactNode;
    picker?: Picker;
}
export type Picker = 'month' | 'year';
export type DatePickerProps = Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props>;
declare const DatePicker: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default DatePicker;
