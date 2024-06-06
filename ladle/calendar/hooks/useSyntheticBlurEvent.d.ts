/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { FocusEvent as ReactFocusEvent } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export declare function useSyntheticBlurEvent<Target = Element>(onBlur: (e: ReactFocusEvent<Target>) => void): (e: ReactFocusEvent<Target>) => void;
