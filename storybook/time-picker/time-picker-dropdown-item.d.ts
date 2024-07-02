import { SelectedKey, TimePickerDropdownSelectedDisplayList } from './types';
interface TimePickerDropdownItemProps {
    itemId: string;
    focusingItemId: string;
    selectedDisplayList: TimePickerDropdownSelectedDisplayList;
    selectedTime: string | number | null;
    minTime: string | number | null;
    time: string;
    isOpen?: boolean;
    displayDataType: SelectedKey;
    onClickItem: (time: string, type: SelectedKey) => () => void;
}
declare function TimePickerDropdownItem(props: TimePickerDropdownItemProps): import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element;
export default TimePickerDropdownItem;
