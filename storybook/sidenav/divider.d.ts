import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props {
    children?: React.ReactNode;
    className?: string;
}
export type DividerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Divider: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Divider;
