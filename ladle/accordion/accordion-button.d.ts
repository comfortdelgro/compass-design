import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css: CSS;
    children?: React.ReactNode;
    className?: string;
    expand?: boolean;
    onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}
export type AccordionButtonProps = Props & Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>;
declare const AccordionButton: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props> & React.RefAttributes<HTMLButtonElement>>;
export default AccordionButton;
