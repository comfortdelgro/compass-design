import { MouseEvent } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { Calendar, CalendarDate, DateValue } from '../../internationalized/date';
import { CalendarState, DateDuration, FieldOptions, FocusableElement, TimeValue } from '../types';
import { EventPoint, FormatterOptions } from '../types/common.types';
export declare const alignCenter: (focusedDate: CalendarDate, visibleDuration: DateDuration, locale: string, minValue?: DateValue | null | undefined, maxValue?: DateValue | undefined | null) => CalendarDate;
export declare function alignStart(focusedDate: CalendarDate, visibleDuration: DateDuration, locale: string, minValue?: DateValue, maxValue?: DateValue): CalendarDate;
export declare function constrainStart(focusedDate: CalendarDate, aligned: CalendarDate, visibleDuration: DateDuration, locale: string, minValue?: DateValue | null | undefined, maxValue?: DateValue | null | undefined): CalendarDate;
export declare function alignEnd(focusedDate: CalendarDate, duration: DateDuration, locale: string, minValue?: DateValue | null | undefined, maxValue?: DateValue | null | undefined): CalendarDate;
export declare function constrainValue(date: CalendarDate, minValue?: DateValue | null | undefined, maxValue?: DateValue | null | undefined): CalendarDate;
export declare function previousAvailableDate(date: CalendarDate, minValue: DateValue | null | undefined, isDateUnavailable?: (date: CalendarDate) => boolean): CalendarDate;
export declare function isOverTarget(point: EventPoint | MouseEvent<FocusableElement>, target: Element | null): boolean;
export declare function getPlaceholderTime(placeholderValue?: DateValue): TimeValue;
export declare function getFormatOptions(fieldOptions: FieldOptions, options: FormatterOptions): Intl.DateTimeFormatOptions;
export declare function nextUnavailableDate(anchorDate: CalendarDate, state: CalendarState, dir: number): CalendarDate;
export declare function createPlaceholderDate(placeholderValue: DateValue | undefined, granularity: string, calendar: Calendar, timeZone: string): import("../types").DateValue;
export declare function getPlaceholder(field: string, value: string): string;
export declare function getSegmentLimits(date: DateValue, type: string, options: Intl.ResolvedDateTimeFormatOptions): {
    value: number;
    minValue: number;
    maxValue: number;
} | {
    value?: undefined;
    minValue?: undefined;
    maxValue?: undefined;
};
export declare function addSegment(value: DateValue, part: string, amount: number, options: Intl.ResolvedDateTimeFormatOptions): CalendarDate | import("../../internationalized/date").CalendarDateTime | import("../../internationalized/date").ZonedDateTime;
