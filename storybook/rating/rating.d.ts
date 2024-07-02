import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    useIcons?: boolean;
    onChange?: (point: number | null) => void;
    className?: string;
    id?: string;
    value?: number;
    readOnly?: boolean;
    disabled?: boolean;
    css?: CSS;
}
export type RatingProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Rating: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Rating;
