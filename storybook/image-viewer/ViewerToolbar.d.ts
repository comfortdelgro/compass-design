import { ToolbarConfig } from './utils/types';
export interface ViewerToolbarProps {
    onAction: (config: ToolbarConfig) => void;
    zoomable: boolean;
    rotatable: boolean;
    scalable: boolean;
    changeable: boolean;
    toolbars: ToolbarConfig[];
}
export declare const defaultToolbars: ToolbarConfig[];
export default function ViewerToolbar(props: ViewerToolbarProps): import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element;
