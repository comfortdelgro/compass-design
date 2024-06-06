/// <reference types="react" />
import { CalendarProps } from '../calendar';
import { DateRangePickerState, DateValue, RangeCalendarState, RangeValue } from '../calendar/types';
export interface RangeCalendarShorcutItem {
    label: string;
    isDisable?: boolean;
    getValue: () => RangeValue<CalendarProps | null>;
}
export type CustomShortcutsProps = ((shortcuts: RangeCalendarShorcutItem[], isInvalid: (date: DateValue | null | undefined) => boolean) => RangeCalendarShorcutItem[]) | undefined;
export interface RangeCalendarShortcutsProps {
    state: RangeCalendarState;
    pickerState?: DateRangePickerState | undefined;
    customShortcuts?: CustomShortcutsProps;
}
declare const RangeCalendarShorcuts: (props: RangeCalendarShortcutsProps) => JSX.Element;
export default RangeCalendarShorcuts;
