/// <reference types="react" />
import { MonthYearState } from './hooks/useMonthYearState';
import { CalendarState, DateValue, RangeCalendarState } from './types';
interface Props {
    state: CalendarState | RangeCalendarState;
    maxValue?: DateValue | null | undefined;
    monthYearState?: MonthYearState;
}
declare const CalendarYearGrid: (props: Props) => JSX.Element;
export default CalendarYearGrid;
