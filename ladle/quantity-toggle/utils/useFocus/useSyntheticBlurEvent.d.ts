/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { FocusEvent as ReactFocusEvent } from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export declare class SyntheticFocusEvent<Target = Element> implements ReactFocusEvent<Target> {
    nativeEvent: FocusEvent;
    target: EventTarget & Target;
    currentTarget: EventTarget & Target;
    relatedTarget: Element;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    timeStamp: number;
    type: string;
    constructor(type: string, nativeEvent: FocusEvent);
    isDefaultPrevented(): boolean;
    preventDefault(): void;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
}
export declare function useSyntheticBlurEvent<Target = Element>(onBlur: (e: ReactFocusEvent<Target>) => void): (e: ReactFocusEvent<Target>) => void;
