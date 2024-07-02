import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props {
    isDisabled?: boolean;
    isError: boolean;
    icon: React.ReactNode;
    value: string;
    id: string | number;
    wrapperRef: React.RefObject<HTMLDivElement>;
    addInputRef: React.RefObject<HTMLInputElement>;
    calculateRemainingItems: () => void;
    onRemove: ((index: string | number) => void) | undefined;
    onEdit: ((index: string | number, value: string) => void) | undefined;
}
export type BannerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const TagBoxItem: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default TagBoxItem;
