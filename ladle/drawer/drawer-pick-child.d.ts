import { ElementType, ReactElement, ReactNode } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export declare const drawerPickChild: <T = ReactNode>(children: ReactNode, targetType: ElementType) => {
    child: T;
    rest: ReactElement;
};
