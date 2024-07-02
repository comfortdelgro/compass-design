import { HTMLAttributes, type CSSProperties, type ElementType, type ReactElement, type ReactNode } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export declare function updateElementStyles(element: HTMLElement, styles: CSSProperties & {
    [key: string]: string | number | undefined;
}): void;
export declare const drawerPickChild: <P extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>>(children: ReactNode, targetType: ElementType, customProps?: P) => {
    child?: ReactElement<P, string | import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').JSXElementConstructor<any>>;
    rest: ReactNode;
};
