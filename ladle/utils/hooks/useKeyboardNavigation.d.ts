import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DescendantsManager } from '../descendant';
import { EKeyboardKey } from '../keyboard.enum';
import { SelectType } from './useKeyboardNavigationState';
export declare const KeyboardNavigationContext: React.Context<Partial<SelectType> & {
    descendants?: DescendantsManager<HTMLElement, object>;
    nextFocus?: () => void;
    prevFocus?: () => void;
    resetFocus?: () => void;
    getNode?: (index: number) => HTMLElement | undefined;
    onKeyDown?: <T extends HTMLElement = HTMLElement>(callbacks?: OnKeyDownCallback<T>) => (e: React.KeyboardEvent<T>) => void;
    onMouseMove?: (index: number) => () => void;
    onFocus?: (index: number) => () => void;
}>;
export type OnKeyDownCallback<T extends HTMLElement = HTMLElement> = {
    [key in EKeyboardKey]?: (e: React.KeyboardEvent<T>) => void;
};
export interface KeyboardNavigationProviderProps extends SelectType {
    children: React.ReactNode;
    descendants: DescendantsManager<HTMLElement, object>;
}
export declare const KeyboardNavigationProvider: (props: KeyboardNavigationProviderProps) => JSX.Element;
export declare const useKeyboardNavigation: () => Partial<SelectType> & {
    descendants?: DescendantsManager<HTMLElement, object>;
    nextFocus?: () => void;
    prevFocus?: () => void;
    resetFocus?: () => void;
    getNode?: (index: number) => HTMLElement | undefined;
    onKeyDown?: <T extends HTMLElement = HTMLElement>(callbacks?: OnKeyDownCallback<T>) => (e: React.KeyboardEvent<T>) => void;
    onMouseMove?: (index: number) => () => void;
    onFocus?: (index: number) => () => void;
};
