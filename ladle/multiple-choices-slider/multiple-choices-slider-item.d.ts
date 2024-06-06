import { HTMLAttributes, ReactNode } from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
interface Props {
    isSelected?: boolean;
    icon: ReactNode;
    label: string;
    index: number;
    onChange?: (index: number, isAdded: boolean) => void;
}
export type MultipleChoicesSliderItemProps = Props & Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>;
declare const MultipleChoicesSliderItem: import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ForwardRefExoticComponent<Props & Omit<HTMLAttributes<HTMLButtonElement>, keyof Props> & import('../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').RefAttributes<HTMLButtonElement>>;
export default MultipleChoicesSliderItem;
