import { Calendar } from '../../internationalized/date';
import { CalendarState, DateFieldState, DateValue, HookData, RangeCalendarState } from '../types';
export declare const hookData: WeakMap<CalendarState | RangeCalendarState | DateFieldState, HookData>;
export declare function isInvalid(date: DateValue | null | undefined, minValue: DateValue | null | undefined, maxValue: DateValue | null | undefined): boolean;
export declare function convertValue(value: DateValue, calendar: Calendar): DateValue | undefined | null;
export declare function commonPrefixLength(strings: string[]): number;
