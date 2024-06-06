import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils';
interface Props {
    css?: CSS;
}
export type CardBodyProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const CardBody: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, "css"> & React.RefAttributes<HTMLDivElement>>;
export default CardBody;
