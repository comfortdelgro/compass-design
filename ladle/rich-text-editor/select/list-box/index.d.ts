import React from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DropdownItemProps } from '../item';
interface Props {
    disabledKeys: React.Key[];
    focusKey: React.Key | undefined;
    currentKey: React.Key | undefined;
    type: 'heading' | 'color' | 'alignment';
    listBoxRef: React.RefObject<HTMLUListElement>;
    collection: Array<React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>>;
    onSelect: (key: React.Key) => void;
}
declare function ListBox(props: Props): JSX.Element;
export default ListBox;
