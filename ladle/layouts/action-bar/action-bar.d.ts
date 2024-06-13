import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils/objectToCss';
import ActionBarCenterGroup from './action-bar-center-group';
import ActionBarLeftGroup from './action-bar-left-group';
import ActionBarRightGroup from './action-bar-right-group';
export interface Props {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>> & {
    LeftGroup: typeof ActionBarLeftGroup;
    CenterGroup: typeof ActionBarCenterGroup;
    RightGroup: typeof ActionBarRightGroup;
};
export default _default;
