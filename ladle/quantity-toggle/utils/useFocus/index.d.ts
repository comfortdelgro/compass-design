/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { DOMAttributes, FocusEvents, FocusableElement } from '../types';
export interface FocusProps<Target = FocusableElement> extends FocusEvents<Target> {
    isDisabled?: boolean;
}
export interface FocusResult<Target = FocusableElement> {
    focusProps: DOMAttributes<Target>;
}
export default function useFocus<Target extends FocusableElement = FocusableElement>(props: FocusProps<Target>): FocusResult<Target>;
