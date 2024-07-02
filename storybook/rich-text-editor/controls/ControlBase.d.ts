import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { ButtonProps } from './Control';
export interface RichTextEditorControlBaseProps extends ButtonProps {
    icon: React.FC;
}
export declare const ControlBase: React.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React.RefAttributes<HTMLButtonElement>>;
