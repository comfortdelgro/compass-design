import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import TabItem from './item';
import TabsPaneless from './tabs-paneless';
import { Icon, Variant } from './utils';
interface Props {
    id?: string;
    icon?: Icon;
    variant?: Variant;
    textColor?: string;
    hidePanel?: boolean;
    isDisabled?: boolean;
    indicatorColor?: string;
    selectedKey?: React.Key;
    disabledKeys?: React.Key[];
    children: React.ReactNode[];
    defaultSelectedKey?: React.Key;
    orientation?: 'horizontal' | 'vertical';
    keyboardActivation?: 'automatic' | 'manual';
    onSelectionChange?: (key: React.Key) => void;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string;
    css?: CSS;
    className?: string;
}
export type TabsProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
export declare const TabsContextWrapper: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof TabItem;
    Paneless: typeof TabsPaneless;
};
export default _default;
