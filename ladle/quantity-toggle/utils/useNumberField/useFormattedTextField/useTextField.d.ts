/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { RefObject } from '../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { AriaTextFieldProps } from '../../types';
export interface TextFieldAria {
    inputProps: AriaTextFieldProps;
}
export declare function useTextField(props: AriaTextFieldProps, ref: RefObject<HTMLElement>): TextFieldAria;
