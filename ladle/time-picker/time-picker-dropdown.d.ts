import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { TimePickerDropdownSelectedDisplayList, ViewType } from './types';
interface TimePickerDropdownProps {
    isOpen?: boolean;
    value?: TimePickerDropdownSelectedDisplayList;
    hourStep?: number;
    minuteStep?: number;
    hasFooter?: boolean;
    isReadOnly?: boolean;
    views?: ViewType[];
    isUncontrolledComponent: boolean;
    minTimeDropdownValue?: TimePickerDropdownSelectedDisplayList;
    onItemClick: (value: TimePickerDropdownSelectedDisplayList) => void;
    onOkClick?: () => void;
    onEscapeKeyDown?: () => void;
}
declare function TimePickerDropdown(props: TimePickerDropdownProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof TimePickerDropdown>;
export default _default;
