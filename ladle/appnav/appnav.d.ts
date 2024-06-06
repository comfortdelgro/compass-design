import React, { HTMLAttributes } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import { AppNavSection } from './appnav-section';
interface Props {
    css?: CSS;
    children: React.ReactNode;
    position?: 'top' | 'bottom';
    index: number;
    onChange: (value: number) => void;
}
export type AppNavProps = Props & Omit<HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Section: typeof AppNavSection;
};
export default _default;
