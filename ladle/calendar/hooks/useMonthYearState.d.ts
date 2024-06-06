import { ButtonProps } from '../../button';
import { CalendarState, DateValue, RangeCalendarState } from '../types';
export declare enum MONTH_YEAR_STATE {
    DATE = 0,
    YEAR = 1,
    MONTH = 2
}
interface Props {
    state: CalendarState | RangeCalendarState;
    maxValue?: DateValue | null | undefined;
}
export type StateType = 0 | 1 | 2 | MONTH_YEAR_STATE;
export interface MonthYearState {
    months: string[];
    currentState: StateType;
    renderedYears: number[];
    endStartYears: {
        start: number | undefined;
        end: number | undefined;
    };
    setMonthYearState: (state: StateType) => void;
    nextState: () => void;
    prevState: () => void;
    nextButtonProps: ButtonProps;
    prevButtonProps: ButtonProps;
}
export declare const useMonthYearCalendar: (props: Props) => MonthYearState;
export {};
