import { HTMLAttributes, PropsWithChildren } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export type DrawerHeaderProps = PropsWithChildren<{
    css?: CSS;
}> & HTMLAttributes<HTMLElement>;
declare const DrawerHeader: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<{
    css?: CSS;
} & {
    children?: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
} & HTMLAttributes<HTMLElement> & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLElement>>;
export default DrawerHeader;
