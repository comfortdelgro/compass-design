import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import MultipleChoicesSliderItem from './multiple-choices-slider-item';
interface Props {
    css?: CSS;
    onChange?: (items: number[]) => void;
    children: React.ReactNode;
}
export type MultipleChoicesSliderProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof MultipleChoicesSliderItem;
};
export default _default;
