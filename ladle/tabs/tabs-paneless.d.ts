import React, { Key } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { TabsProps } from './tabs';
interface ItemProps {
    key: Key;
    title: string;
}
type TProps = Omit<TabsProps, 'children'>;
interface Props extends TProps {
    items: ItemProps[];
}
export type TabsPanelessProps = Props;
declare const TabsPaneless: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default TabsPaneless;
