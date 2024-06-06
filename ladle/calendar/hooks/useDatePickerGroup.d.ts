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
import { DateFieldState, DatePickerState, DateRangePickerState, FocusableElement } from '../types';
export declare function useDatePickerGroup(state: DatePickerState | DateRangePickerState | DateFieldState, ref: RefObject<Element>, disableArrowNavigation?: boolean): {
    onKeyDown: (e: KeyboardEvent) => void;
    id?: string;
    role?: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').AriaRole;
    tabIndex?: number;
    style?: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').CSSProperties;
    className?: string;
    onKeyUp: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').KeyboardEvent<FocusableElement>) => void;
    onClick: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEvent<FocusableElement, MouseEvent>) => void;
    onPointerDown?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEvent<FocusableElement>) => void;
    onMouseDown?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEvent<FocusableElement, MouseEvent>) => void;
    onPointerUp?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEvent<FocusableElement>) => void;
    onDragStart?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEvent<FocusableElement>) => void;
    onMouseEnter?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEvent<FocusableElement, MouseEvent>) => void;
    onMouseLeave?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEvent<FocusableElement, MouseEvent>) => void;
    onMouseUp?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEvent<FocusableElement, MouseEvent>) => void;
    onTouchStart?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEvent<FocusableElement>) => void;
    onTouchMove?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEvent<FocusableElement>) => void;
    onTouchEnd?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEvent<FocusableElement>) => void;
    onTouchCancel?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEvent<FocusableElement>) => void;
    onFocus?: () => void;
    onPointerEnter?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEvent<FocusableElement>) => void;
    onContextMenu?: (e: import('../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEvent<FocusableElement, MouseEvent>) => void;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-details'?: string;
    'aria-disabled'?: boolean;
    'aria-invalid'?: boolean;
    'aria-selected'?: boolean;
    'aria-describedby'?: string;
};
