import { HTMLAttributes, PropsWithChildren } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export type DrawerContentProps = PropsWithChildren<{
    css?: CSS;
    header?: React.ReactChild;
    setOffsetTop: (offset: number) => void;
}> & HTMLAttributes<HTMLDivElement>;
export declare const NaturalDrawerContent: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<{
    css?: CSS;
    header?: React.ReactChild;
    setOffsetTop: (offset: number) => void;
} & {
    children?: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
} & HTMLAttributes<HTMLDivElement> & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLDivElement>>;
