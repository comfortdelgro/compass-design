import { MonthYearState } from './hooks/useMonthYearState';
import { CalendarState, DateValue, RangeCalendarState } from './types';
interface Props {
    state: CalendarState | RangeCalendarState;
    maxValue?: DateValue | null | undefined;
    monthYearState?: MonthYearState;
}
declare const CalendarYearGrid: (props: Props) => import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element;
export default CalendarYearGrid;
