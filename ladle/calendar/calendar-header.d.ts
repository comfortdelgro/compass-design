import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { ButtonProps } from '../button';
import { DateValue } from '../internationalized/date';
import { CSS } from '../utils/objectToCss';
import { MonthYearState } from './hooks/useMonthYearState';
import { AriaLabelingProps, DOMProps } from './types';
import { CalendarState, DOMAttributes, RangeCalendarState } from './types/calendar.types';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    variant?: 'default' | 'range';
    state: CalendarState | RangeCalendarState;
    calendarProps: DOMProps | AriaLabelingProps | DOMAttributes;
    prevButtonProps: ButtonProps;
    nextButtonProps: ButtonProps;
    middleButtonProps?: MonthYearState;
    maxValue?: DateValue;
}
declare const CalendarHeader: (props: Props) => JSX.Element;
export default CalendarHeader;
