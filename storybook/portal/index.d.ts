import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface PortalProps {
    open: boolean;
    children: React.ReactNode;
}
declare const Portal: ({ children, open }: PortalProps) => React.ReactPortal;
export default Portal;
