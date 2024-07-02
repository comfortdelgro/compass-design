/// <reference types="react" />
import { CalendarProps } from '../calendar';
import { RangeValue } from '../calendar/types';
import { RangeCalendarShorcutItem, RangeCalendarShortcutsProps } from './range-calendar-shortcuts';
export declare const useRangeCalendarShortcuts: (props: RangeCalendarShortcutsProps) => {
    shorcuts: RangeCalendarShorcutItem[];
    selectedItem: string;
    setSelectedItem: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').Dispatch<import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').SetStateAction<string>>;
    setCurrentRangeDate: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').Dispatch<import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').SetStateAction<RangeValue<CalendarProps>>>;
};
