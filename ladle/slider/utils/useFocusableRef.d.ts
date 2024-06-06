import { RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DOMRefValue, FocusableElement, FocusableRef, FocusableRefValue } from './types';
export declare function createDOMRef<T extends HTMLElement = HTMLElement>(ref: RefObject<T>): DOMRefValue<T>;
export declare function createFocusableRef<T extends HTMLElement = HTMLElement>(domRef: RefObject<T>, focusableRef?: RefObject<FocusableElement>): FocusableRefValue<T>;
export declare function useFocusableRef<T extends HTMLElement = HTMLElement>(ref: FocusableRef<T>, focusableRef?: RefObject<FocusableElement>): RefObject<T>;
