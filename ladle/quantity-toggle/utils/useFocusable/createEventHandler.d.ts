/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { SyntheticEvent } from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { BaseEvent } from '../types';
export declare function createEventHandler<T extends SyntheticEvent>(handler: ((e: BaseEvent<T>) => void) | undefined): (e: T) => void;
