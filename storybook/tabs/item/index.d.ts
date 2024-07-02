import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export interface Props {
    key: React.Key;
    title: string;
    textValue?: string;
    children: React.ReactNode;
    'aria-label'?: string;
}
export type TabItemProps = Props;
declare const TabItem: React.FC<TabItemProps>;
export default TabItem;
