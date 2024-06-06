import { FocusableElement } from '../types';
export declare function runAfterTransition(fn: () => void): void;
export declare function restoreTextSelection(target: FocusableElement | null): void;
export declare function disableTextSelection(target?: Element): void;
