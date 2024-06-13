/// <reference types="react" />
import { Editor } from '@tiptap/react';
interface RichTextEditorContext {
    editor: Editor | null;
}
export declare const RichTextEditorProvider: ({ children, value, }: {
    value: RichTextEditorContext;
    children: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
}) => import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element, useRichTextEditorContext: () => RichTextEditorContext;
export {};
