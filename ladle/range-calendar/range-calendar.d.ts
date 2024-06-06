import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DateRangePickerState, DateValue, RangeValue } from '../calendar/types';
import { CSS } from '../utils/objectToCss';
import { CustomShortcutsProps } from './range-calendar-shortcuts';
interface Props {
    css?: CSS;
    value?: RangeValue<DateValue | null>;
    children?: React.ReactNode;
    state?: DateRangePickerState;
    hasFooter?: boolean;
    minValue?: DateValue | null | undefined;
    maxValue?: DateValue | null | undefined;
    onChange?: (e: unknown) => void;
    allowsNonContiguousRanges?: boolean;
    isDateUnavailable?: (date: DateValue) => boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    hasShortcuts?: boolean;
    ctaButtonRender?: React.ReactNode;
    visibleMonths?: 1 | 2;
    shouldOnChangeTriggerOnSameDate?: boolean;
    onSearchButtonClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => void) | undefined;
    customShortcuts?: CustomShortcutsProps;
}
export type RangeCalendarProps = Props;
declare const RangeCalendar: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default RangeCalendar;
