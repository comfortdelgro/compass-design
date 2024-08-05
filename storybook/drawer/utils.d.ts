import { type ComponentPropsWithoutRef, type ElementType, type HTMLAttributes, type ReactElement, type ReactNode } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
type CustomStyles = {
    [key: string]: string | number | undefined | null;
};
type UpdateStyleOptions = {
    /** @default false */
    ignoreNilValue?: boolean;
    /**
     * Cache the original styles.
     * Only cache value of provided properties that have been updated (depending on `ignoreNilValue` option).
     * ___
     * If set to `once`, it won't override existing cached styles.
     * @default false
     */
    cache?: boolean | 'once';
};
export declare function updateElementStyles(element: Element | HTMLElement | null, 
/** CSS property name should be a kebab-case string (eg: `border-radius`) */
styles: CustomStyles, options?: UpdateStyleOptions): void;
/**
 * Reset the element's styles.
 *
 * Depending on provided `properties`, if the original styles have been cached,
 * it will restore the original styles, otherwise, it will remove the current styles.
 */
export declare function resetElementStyles(element: Element | HTMLElement | null, 
/**
 * Property name should be a kebab-case string.
 * ___
 * If not provided, it will reset only properties that have been updated and cached by `updateElementStyles` before.
 */
properties?: string[]): void;
export declare const drawerPickChild: <T extends ElementType = ElementType, P extends HTMLAttributes<HTMLElement> = ComponentPropsWithoutRef<T>>(children: ReactNode, targetType: T, customProps?: ComponentPropsWithoutRef<T>) => {
    matchedNode?: ReactElement<P, string | import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').JSXElementConstructor<any>>;
    rest: ReactNode;
};
export declare const isIOS: () => boolean | undefined;
export declare const dragDeceleration: (velocity: number) => number;
export {};
