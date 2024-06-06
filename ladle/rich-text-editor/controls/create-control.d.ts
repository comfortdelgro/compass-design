import { Editor } from '@tiptap/react';
import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { PremadeControlProps } from './Control';
interface CreateControlProps {
    icon: React.FC;
    label: string;
    isActive?: {
        name: string;
        attributes?: Record<string, unknown> | string;
    };
    onClick: (editor: Editor | null) => boolean;
}
export declare function createControl({ isActive, onClick, icon, label, }: CreateControlProps): React.ForwardRefExoticComponent<PremadeControlProps & React.RefAttributes<HTMLButtonElement>>;
export {};
