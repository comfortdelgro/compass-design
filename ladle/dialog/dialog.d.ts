import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import DialogActions from './dialog-actions';
import DialogDescription from './dialog-description';
import DialogIcon from './dialog-icon';
import DialogTitle from './dialog-title';
import DialogTrigger from './dialog-trigger';
interface Props {
    children?: React.ReactNode;
    variant?: 'confirmation' | 'alert';
    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    triggerId?: string;
    handleClose?: () => void;
    css?: CSS;
}
export type DialogProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Trigger: typeof DialogTrigger;
    Title: typeof DialogTitle;
    Description: typeof DialogDescription;
    Actions: typeof DialogActions;
    Icon: typeof DialogIcon;
};
export default _default;
