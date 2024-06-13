import { ToolbarConfig } from './utils/types';
export interface ViewerToolbarProps {
    onAction: (config: ToolbarConfig) => void;
    alt: string;
    width: number;
    height: number;
    activeIndex: number;
    count: number;
    totalName: string;
}
export default function ImageInformation(props: ViewerToolbarProps): import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element;
