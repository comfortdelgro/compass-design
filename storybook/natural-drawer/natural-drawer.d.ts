/// <reference types="react" />
import { NaturalDrawerContent } from './natural-drawer-content';
import { NaturalDrawerHeader } from './natural-drawer-header';
export type DrawerType = 'drawer' | 'bottomSheet';
interface Props {
    type?: DrawerType;
    children?: React.ReactNode;
    header?: React.ReactChild;
    fixedContent?: React.ReactChild;
    className?: string;
    fullscreen?: boolean;
    expanded?: boolean;
    pullDownToClose?: boolean;
    visibleHeight?: number;
    drawerScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
    onCollapsed: () => void;
    onExpanded: () => void;
    onReachBottom?: () => void;
}
export type NaturalDrawerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props | 'tabIndex' | 'autoFocus'>;
declare const _default: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<Props & Omit<import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').HTMLAttributes<HTMLDivElement>, "autoFocus" | "tabIndex" | keyof Props> & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>> & {
    Header: typeof NaturalDrawerHeader;
    Content: typeof NaturalDrawerContent;
};
export default _default;
