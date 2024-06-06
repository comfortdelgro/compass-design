/// <reference types="react" />
import { ImageDecorator } from './types';
export interface ViewerNavProps {
    images: ImageDecorator[];
    activeIndex: number;
    onChangeImg: (index: number) => void;
}
export default function ViewerNav(props: ViewerNavProps): JSX.Element;
