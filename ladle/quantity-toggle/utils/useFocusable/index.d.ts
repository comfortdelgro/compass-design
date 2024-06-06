/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import React, { ReactNode, RefObject } from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DOMAttributes, FocusableDOMProps, FocusableElement, FocusableProps } from '../types';
export interface FocusableOptions extends FocusableProps, FocusableDOMProps {
    isDisabled?: boolean;
}
export interface FocusableProviderProps extends DOMAttributes {
    children?: ReactNode;
}
declare const _FocusableProvider: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export { _FocusableProvider as FocusableProvider };
export interface FocusableAria {
    focusableProps: DOMAttributes;
}
export default function useFocusable(props: FocusableOptions, domRef: RefObject<FocusableElement>): FocusableAria;
