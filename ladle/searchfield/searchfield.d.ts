import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    id?: string;
    isErrored?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    validationState?: 'valid' | 'invalid';
    isRequired?: boolean;
    description?: React.ReactNode;
    errorMessage?: React.ReactNode;
    autoFocus?: boolean;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    label?: React.ReactNode;
    onSubmit?: (value: string) => void;
    onClear?: () => void;
    onChange?: (value: string) => void;
    onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCopy?: React.ClipboardEventHandler<HTMLInputElement>;
    onCut?: React.ClipboardEventHandler<HTMLInputElement>;
    onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
    onCompositionStart?: React.CompositionEventHandler<HTMLInputElement>;
    onCompositionEnd?: React.CompositionEventHandler<HTMLInputElement>;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLInputElement>;
    onSelect?: React.ReactEventHandler<HTMLInputElement>;
    onBeforeInput?: React.FormEventHandler<HTMLInputElement>;
    onInput?: React.FormEventHandler<HTMLInputElement>;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onKeyUp?: (e: React.KeyboardEvent) => void;
    maxLength?: number;
    minLength?: number;
    'aria-activedescendant'?: string;
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    'aria-controls'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-errormessage'?: string;
    css?: CSS;
    className?: string;
}
export type SearchFieldProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const SearchField: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default SearchField;
