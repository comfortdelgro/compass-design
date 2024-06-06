import React from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { IItemProps } from '../utils/types';
export interface DragAndDropListItemProps {
    children: React.ReactNode;
    props: IItemProps;
    index?: number;
    isDragged: boolean;
    isSelected: boolean;
    isOutOfBounds: boolean;
}
declare const DragAndDropListOutletItem: ({ children, props, isDragged, }: DragAndDropListItemProps) => JSX.Element;
export default DragAndDropListOutletItem;
