import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import * as InternationalizedDate from '../internationalized/date';
import { DateValue } from '../internationalized/date';
import * as i18n from '../internationalized/i18n';
import { CSS } from '../utils/objectToCss';
import { DatePickerState, ValueBase } from './types';
interface Props extends ValueBase<DateValue> {
    css?: CSS;
    children?: React.ReactNode;
    state?: DatePickerState;
    hasFooter?: boolean;
    maxValue?: DateValue | null | undefined;
    minValue?: DateValue | null | undefined;
    isDisabled?: boolean;
    ctaButtonRender?: React.ReactNode;
    isDateUnavailable?: (date: DateValue) => boolean;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
}
export type CalendarProps = Props & DateValue;
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>> & {
    InternationalizedDate: typeof InternationalizedDate;
    I18N: typeof i18n;
};
export default _default;
