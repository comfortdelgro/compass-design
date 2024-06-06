import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import FooterInfoDownload from './footer-info-download';
import FooterInfoSocial from './footer-info-social';
interface Props {
    css?: CSS;
    children?: React.ReactNode;
}
export type FooterInfoProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Social: typeof FooterInfoSocial;
    Download: typeof FooterInfoDownload;
};
export default _default;
