import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import DragAndDropListItem from './item';
export interface Props {
    css?: CSS;
    children: React.ReactNode;
    onReorderByKeys?: (keys: React.Key[]) => void;
}
export type DragAndDropListProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof DragAndDropListItem;
};
export default _default;
