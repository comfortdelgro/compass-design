import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import ModalActions from './modal-actions';
import ModalCloseIcon from './modal-closeIcon';
import ModalDescription from './modal-description';
import ModalTitle from './modal-title';
import ModalTrigger from './modal-trigger';
interface Props {
    h5?: boolean;
    children?: React.ReactNode;
    handleClose?: () => void;
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    triggerId?: string;
    css?: CSS;
}
export type ModalProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Trigger: typeof ModalTrigger;
    Title: typeof ModalTitle;
    Description: typeof ModalDescription;
    Actions: typeof ModalActions;
    CloseIcon: typeof ModalCloseIcon;
};
export default _default;
