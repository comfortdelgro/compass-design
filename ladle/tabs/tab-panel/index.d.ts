import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { TabItemProps } from '../item';
interface Props {
    selectedItem: React.DetailedReactHTMLElement<TabItemProps, HTMLElement> | undefined;
}
declare const TabPanel: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, "selectedItem"> & React.RefAttributes<HTMLDivElement>>;
export default TabPanel;
