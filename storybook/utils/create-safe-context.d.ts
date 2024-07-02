import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export declare function createSafeContext<ContextValue>(errorMessage: string): readonly [({ children, value, }: {
    value: ContextValue;
    children: React.ReactNode;
}) => import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime').JSX.Element, () => ContextValue];
