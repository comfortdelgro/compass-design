/// <reference types="react" />
import { GutterSide } from '../gutter';
interface IconProps {
    side?: `${GutterSide}`;
    isExpand: boolean;
}
declare const Icon: ({ side, isExpand }: IconProps) => JSX.Element;
export default Icon;
