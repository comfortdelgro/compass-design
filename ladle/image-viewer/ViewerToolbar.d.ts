/// <reference types="react" />
import { ToolbarConfig } from './types';
export interface ViewerToolbarProps {
    onAction: (config: ToolbarConfig) => void;
    zoomable: boolean;
    rotatable: boolean;
    scalable: boolean;
    changeable: boolean;
    toolbars: ToolbarConfig[];
}
export declare const defaultToolbars: ToolbarConfig[];
export default function ViewerToolbar(props: ViewerToolbarProps): JSX.Element;
