import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import ErrorAction from './error-action';
import ErrorDescription from './error-description';
import ErrorIcon from './error-icon';
import ErrorImage from './error-image';
import ErrorTitle from './error-title';
interface Props {
    children?: React.ReactNode;
    css?: CSS;
    variant?: 'primary' | 'secondary';
    className?: string;
}
export type ErrorProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Title: typeof ErrorTitle;
    Description: typeof ErrorDescription;
    Action: typeof ErrorAction;
    Icon: typeof ErrorIcon;
    Image: typeof ErrorImage;
};
export default _default;
