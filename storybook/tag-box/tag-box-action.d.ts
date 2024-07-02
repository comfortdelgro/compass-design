import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
}
export type TagBoxActionProps = Props;
declare const TagBoxAction: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default TagBoxAction;
