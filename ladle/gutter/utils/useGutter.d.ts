import { CSSProperties } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { GutterProps } from '../gutter';
export interface UseGutterReturnType {
    expand: () => void;
    collapse: () => void;
    toggleExpand: () => void;
    isExpand: boolean | undefined;
    width: CSSProperties['width'] | undefined;
    setWidth: (width: CSSProperties['width']) => void;
    handlePointerDown: (e: React.PointerEvent) => void;
}
declare const useGutter: (props: GutterProps, ref: React.RefObject<HTMLDivElement> | null) => UseGutterReturnType;
export default useGutter;
