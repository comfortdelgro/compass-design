import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DescendantsManager, UseDescendantsReturn } from '../descendant';
export interface SelectType {
    selected: number;
    setSelected: (selected: number) => void;
}
export interface UseKeyboardNavigationReturn extends SelectType {
    provider: {
        descendants: DescendantsManager<HTMLElement>;
        selected: number;
        setSelected: React.Dispatch<React.SetStateAction<number>>;
    };
    DescendantsProvider: React.Provider<DescendantsManager<HTMLElement>>;
    useDescendantsContext: () => DescendantsManager<HTMLElement>;
    useDescendants: () => DescendantsManager<HTMLElement>;
    useDescendant: (options?: {
        disabled?: boolean;
        id?: string;
    } | undefined) => {
        descendants: UseDescendantsReturn;
        index: number;
        enabledIndex: number;
        register: ((node: HTMLElement | null) => void) | null;
    };
}
export declare const useKeyboardNavigationState: () => UseKeyboardNavigationReturn;
