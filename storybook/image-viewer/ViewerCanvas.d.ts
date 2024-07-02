/// <reference types="react" />
export interface ViewerCanvasProps {
    imgSrc: string;
    visible: boolean;
    width: number;
    height: number;
    top: number;
    left: number;
    rotate: number;
    onChangeImgState: (width: number, height: number, top: number, left: number) => void;
    onResize: () => void;
    zIndex: number;
    scaleX: number;
    scaleY: number;
    loading: boolean;
    drag: boolean;
    container: HTMLElement;
    onCanvasMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface ViewerCanvasState {
    isMouseDown?: boolean;
    mouseX?: number;
    mouseY?: number;
}
export default function ViewerCanvas(props: ViewerCanvasProps): import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element;
