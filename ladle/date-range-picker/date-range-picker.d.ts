import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { SpectrumDateRangePickerProps } from '../calendar/types';
import { DateValue } from '../internationalized/date';
import { CustomShortcutsProps } from '../range-calendar/range-calendar-shortcuts';
import { CSS } from '../utils/objectToCss';
interface Props extends SpectrumDateRangePickerProps<DateValue> {
    css?: CSS;
    children?: React.ReactNode;
    label?: string | React.ReactNode;
    isInvalid?: boolean;
    startDateLabel?: string | React.ReactNode;
    endDateLabel?: string | React.ReactNode;
    shouldCloseOnSelect?: boolean;
    isMobile?: boolean;
    calendarCSS?: CSS;
    helperText?: React.ReactNode;
    maxValue?: DateValue | null | undefined;
    hasShortcuts?: boolean;
    ctaButtonRender?: React.ReactNode;
    visibleMonths?: 1 | 2;
    shouldOnChangeTriggerOnSameDate?: boolean;
    onSearchButtonClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => void;
    customShortcuts?: CustomShortcutsProps;
}
export type DateRangePickerProps = Props;
declare const DateRangePicker: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default DateRangePicker;
