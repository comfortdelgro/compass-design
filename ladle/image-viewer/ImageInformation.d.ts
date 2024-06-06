/// <reference types="react" />
import { ToolbarConfig } from './types';
export interface ViewerToolbarProps {
    onAction: (config: ToolbarConfig) => void;
    alt: string;
    width: number;
    height: number;
    activeIndex: number;
    count: number;
    totalName: string;
}
export default function ImageInformation(props: ViewerToolbarProps): JSX.Element;
