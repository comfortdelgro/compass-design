/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DateValue } from '../../internationalized/date';
import { AriaDateFieldOptions, DateFieldAria, DateFieldState } from '../types';
export declare function useDateField<T extends DateValue>(props: AriaDateFieldOptions<T>, state: DateFieldState, ref: RefObject<Element>): DateFieldAria;
