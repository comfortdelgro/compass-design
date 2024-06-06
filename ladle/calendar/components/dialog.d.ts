import { AriaDialogProps } from '@react-aria/dialog';
import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props extends AriaDialogProps {
    children?: React.ReactNode;
    title?: string;
}
declare const Dialog: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Dialog;
