import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import { TabItemProps } from '../item';
import { Icon, Variant } from '../utils';
interface Props {
    textColor: string;
    isDisabled: boolean;
    key: React.Key | null;
    indicatorColor: string;
    icon: Icon | undefined;
    disabledKeys: React.Key[];
    variant: Variant | undefined;
    currentKey: React.Key | undefined;
    item: React.DetailedReactHTMLElement<TabItemProps, HTMLElement>;
    onSelect: (key: React.Key) => void;
    css?: CSS;
}
declare const Tab: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Tab;
