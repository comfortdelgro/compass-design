/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { DOMAttributes, HelpTextProps, LabelAria, LabelAriaProps, Validation } from '../types';
export interface AriaFieldProps extends LabelAriaProps, HelpTextProps, Omit<Validation, 'isRequired'> {
}
export interface FieldAria extends LabelAria {
    descriptionProps: DOMAttributes;
    errorMessageProps: DOMAttributes;
}
export declare function useField(props: AriaFieldProps): FieldAria;
