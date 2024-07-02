import { Document } from '@contentful/rich-text-types';
import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    document?: Document;
    platform?: 'react' | 'html';
    css?: CSS;
}
export type RichTextRenderProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const RichTextRender: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLInputElement>>;
export default RichTextRender;
