import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DateValue } from '../internationalized/date';
import { CSS } from '../utils/objectToCss';
import { DatePickerState, ValueBase } from './types';
interface Props extends ValueBase<DateValue> {
    css?: CSS;
    children?: React.ReactNode;
    state?: DatePickerState;
    hasFooter?: boolean;
    maxValue?: DateValue | null | undefined;
    minValue?: DateValue | null | undefined;
    isDisabled?: boolean;
    ctaButtonRender?: React.ReactNode;
    isDateUnavailable?: (date: DateValue) => boolean;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
}
export type CalendarProps = Props & DateValue;
declare const Calendar: any;
export default Calendar;
