import { ButtonProps } from '../../button';
import { CalendarState, DateValue, RangeCalendarState } from '../types';
import { Picker } from '../../date-picker/date-picker';
export declare enum MONTH_YEAR_STATE {
    DATE = 0,
    YEAR = 1,
    MONTH = 2
}
interface Props {
    state: CalendarState | RangeCalendarState;
    maxValue?: DateValue | null | undefined;
    picker?: Picker;
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
    picker?: Picker;
}
export declare const useMonthYearCalendar: (props: Props) => MonthYearState;
export {};
