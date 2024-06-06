import React, { CSSProperties } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export declare enum GutterSide {
    RIGHT = "right",
    LEFT = "left"
}
export interface Props {
    css?: CSS;
    isExpand?: boolean;
    side?: `${GutterSide}`;
    hasExpandButton?: boolean;
    maxExpand?: CSSProperties['width'];
    minCollapse?: CSSProperties['width'];
    parentRef?: React.RefObject<HTMLDivElement> | null;
    onChange?: (width: CSSProperties['width']) => void;
}
export type GutterProps = Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props>;
declare const Gutter: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Gutter;
