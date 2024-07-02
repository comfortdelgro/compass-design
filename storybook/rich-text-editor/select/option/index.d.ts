import React, { HTMLAttributes, Key } from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../../utils/objectToCss';
import { DropdownItemProps } from '../item';
interface Props {
    key: Key | null;
    disabledKeys?: React.Key[];
    focusKey?: React.Key;
    currentKey?: React.Key;
    type: 'heading' | 'color' | 'alignment';
    item: React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>;
    onSelect: (key: React.Key) => void;
    className?: string;
    css?: CSS;
}
export type OptionProps = Props & Omit<HTMLAttributes<HTMLLIElement>, keyof Props>;
declare const Option: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props> & React.RefAttributes<HTMLLIElement>>;
export default Option;
