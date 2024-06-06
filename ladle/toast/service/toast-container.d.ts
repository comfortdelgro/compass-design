import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import { Anchor } from './toast-context';
import { ToastItemType } from './types';
interface Props {
    toasts: ToastItemType[];
    toastItemClassName?: string;
    anchorOrigin: Anchor;
    css?: CSS;
}
export type ToastsContainerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const ToastsContainer: (props: ToastsContainerProps) => JSX.Element;
export default ToastsContainer;
