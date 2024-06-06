/// <reference types="react" />
import { useMonthYearCalendar } from './hooks/useMonthYearState';
import { CalendarState, DateValue, RangeCalendarState } from './types';
interface Props {
    state: CalendarState | RangeCalendarState;
    maxValue?: DateValue | null | undefined;
    monthYearState?: ReturnType<typeof useMonthYearCalendar>;
}
declare const CalendarMonthGrid: (props: Props) => JSX.Element;
export default CalendarMonthGrid;
