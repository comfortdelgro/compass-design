import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DateValue } from '../internationalized/date';
import { CSS } from '../utils/objectToCss';
import { CalendarState, DateDuration, RangeCalendarState } from './types';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    state: CalendarState | RangeCalendarState;
    offset?: DateDuration;
    maxValue?: DateValue | null | undefined;
}
declare const CalendarGrid: (props: Props) => JSX.Element;
export default CalendarGrid;
