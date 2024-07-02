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
declare function TimePickerDropdown(props: TimePickerDropdownProps): import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element;
export default TimePickerDropdown;
