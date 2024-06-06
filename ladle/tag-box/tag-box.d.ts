import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
import TagBoxAction from './tag-box-action';
type Item = {
    id: string | number;
    value: string;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
};
interface Props {
    id?: string;
    items: Item[];
    css?: CSS;
    typeable?: boolean;
    helperText?: string;
    isErrored?: boolean;
    isRequired?: boolean;
    errorMessage?: string;
    collaspable?: boolean;
    icon?: React.ReactNode;
    label?: React.ReactNode;
    children?: React.ReactNode;
    labelPosition?: 'top' | 'left';
    onAdd?: (value: string) => void;
    onRemove?: (index: string | number) => void;
    onEdit?: (index: string | number, value: string) => void;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string;
}
export type TagBoxProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const _default: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>> & {
    Action: typeof TagBoxAction;
};
export default _default;
