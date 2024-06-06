/// <reference types="react" />
import { ActionTypeEnum } from './Icon';
export type ImageViewerCoreState = {
    index: number;
    visible: boolean;
    activeIndex: number;
    width: number;
    height: number;
    top: number;
    left: number;
    rotate: number;
    imageWidth: number;
    imageHeight: number;
    scaleX: number;
    scaleY: number;
    loading: boolean;
    loadFailed: boolean;
    startLoading: boolean;
};
export declare enum ActionEnum {
    setVisible = "setVisible",
    setActiveIndex = "setActiveIndex",
    update = "update",
    clear = "clear"
}
export type ActionType = {
    type: ActionEnum;
    payload: Partial<ImageViewerCoreState>;
};
export type ViewerImageSize = {
    width: number;
    height: number;
};
export type ImageDecorator = {
    src: string;
    alt?: string;
    defaultSize?: ViewerImageSize;
    srcPreview?: string;
};
export type ToolbarConfig = {
    key: string;
    actionType: ActionTypeEnum;
    icon?: React.ReactNode;
    render?: React.ReactNode;
    onClick?: (activeImage: ImageDecorator) => void;
};
export type ViewerDefaultImg = {
    src: string;
    width?: number;
    height?: number;
};
export type ImageViewerProps = {
    index?: number;
    visible?: boolean;
    onClose?: () => void;
    images?: ImageDecorator[];
    activeIndex?: number;
    container?: HTMLElement;
    drag?: boolean;
    zoomable?: boolean;
    rotatable?: boolean;
    scalable?: boolean;
    onMaskClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    loop?: boolean;
    noClose?: boolean;
    isShowImageInformation?: boolean;
    isShowPreview?: boolean;
    isShowToolbar?: boolean;
    changeable?: boolean;
    customToolbar?: (toolbars: ToolbarConfig[]) => ToolbarConfig[];
    zoomSpeed?: number;
    defaultSize?: ViewerImageSize;
    defaultImg?: ViewerDefaultImg;
    disableKeyboardSupport?: boolean;
    noResetZoomAfterChange?: boolean;
    noLimitInitializationSize?: boolean;
    defaultScale?: number;
    onChange?: (activeImage: ImageDecorator, index: number) => void;
    disableMouseZoom?: boolean;
    totalName?: string;
    maxScale?: number;
    minScale?: number;
};
