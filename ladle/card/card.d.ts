import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import CardAction from './card-actions';
import CardBody from './card-body';
import CardImage from './card-image';
import CardTitle from './card-title';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
    isDisabled?: boolean;
    isShadowless?: boolean;
    isClickable?: boolean;
    size?: 'lg' | 'full' | 'sm';
}
export type CardProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Body: typeof CardBody;
    Image: typeof CardImage;
    Title: typeof CardTitle;
    Action: typeof CardAction;
};
export default _default;
