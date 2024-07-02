import { HTMLAttributes, PropsWithChildren } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export type DrawerHeaderProps = PropsWithChildren<{
    useDrag: boolean;
    css?: CSS;
}> & HTMLAttributes<HTMLElement>;
export declare const NaturalDrawerHeader: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<{
    useDrag: boolean;
    css?: CSS;
} & {
    children?: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
} & HTMLAttributes<HTMLElement> & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLElement>>;
