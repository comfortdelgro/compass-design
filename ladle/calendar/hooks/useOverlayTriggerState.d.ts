/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { OverlayTriggerProps } from '../types';
export interface OverlayTriggerState {
    readonly isOpen: boolean;
    setOpen(isOpen: boolean): void;
    open(): void;
    close(): void;
    toggle(): void;
}
export declare function useOverlayTriggerState(props: OverlayTriggerProps): OverlayTriggerState;
