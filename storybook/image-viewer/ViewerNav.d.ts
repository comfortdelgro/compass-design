import { ImageDecorator } from './utils/types';
export interface ViewerNavProps {
    images: ImageDecorator[];
    activeIndex: number;
    onChangeImg: (index: number) => void;
}
export default function ViewerNav(props: ViewerNavProps): import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element;
