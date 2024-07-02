import React, { FC } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '.';
export interface Props {
    children?: React.ReactNode;
    css?: CSS;
    childrenRef?: React.Ref<HTMLElement>;
}
declare const CssInjection: FC<Props>;
export default CssInjection;
