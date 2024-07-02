import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CalendarDate, DateValue } from '../internationalized/date';
import { CSS } from '../utils/objectToCss';
import { CalendarState, RangeCalendarState } from './types';
interface Props {
    css?: CSS;
    state: CalendarState | RangeCalendarState;
    date: CalendarDate;
    currentMonth: CalendarDate;
    maxValue?: DateValue | null | undefined;
}
declare const CalendarCell: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLTableCellElement>>;
export default CalendarCell;
