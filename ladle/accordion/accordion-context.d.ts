import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export type AccordionContextType = {
    expand: boolean;
    setExpand: () => void;
    onExpandChange?: ((e?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>) => void) | undefined;
};
declare const AccordionContext: React.Context<AccordionContextType | Record<string, unknown>>;
export default AccordionContext;
