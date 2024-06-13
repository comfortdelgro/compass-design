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
interface FormattedTextFieldState {
    validate: (val: string) => boolean;
    setInputValue: (val: string) => void;
}
export default function useFormattedTextField(props: AriaTextFieldProps, state: FormattedTextFieldState, inputRef: RefObject<HTMLInputElement> | any): {
    'aria-activedescendant'?: string;
    'aria-autocomplete'?: "both" | "none" | "inline" | "list";
    'aria-haspopup'?: boolean | "listbox" | "grid" | "menu" | "false" | "true" | "dialog" | "tree";
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    validationState?: import("../../types").ValidationState;
    description?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
    errorMessage?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
    autoFocus?: boolean;
    onFocusChange?: (isFocused: boolean) => void;
    onBlur?: (e: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FocusEvent<Element, Element>) => void;
    onFocus?: (e: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FocusEvent<Element, Element>) => void;
    onKeyUp?: (e: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').KeyboardEvent<Element>) => void;
    onKeyDown?: (e: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').KeyboardEvent<Element>) => void;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
    'aria-label'?: string;
    'aria-details'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    excludeFromTabOrder?: boolean;
    id?: string;
    name?: string;
    pattern?: string;
    maxLength?: number;
    minLength?: number;
    autoComplete?: string;
    type?: "text" | "search" | "tel" | "url" | "email" | "password";
    inputMode?: "none" | "text" | "search" | "tel" | "url" | "email" | "numeric" | "decimal";
    onInput?: (event: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEvent<HTMLInputElement>) => void;
    onSelect?: (event: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').SyntheticEvent<HTMLInputElement, Event>) => void;
    onCopy?: (event: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ClipboardEvent<HTMLInputElement>) => void;
    onCut?: (event: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ClipboardEvent<HTMLInputElement>) => void;
    onPaste?: (event: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ClipboardEvent<HTMLInputElement>) => void;
    onBeforeInput: ((event: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEvent<HTMLInputElement>) => void) & ((e: any) => void);
    onCompositionEnd: ((event: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').CompositionEvent<HTMLInputElement>) => void) & (() => void);
    onCompositionStart: ((event: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').CompositionEvent<HTMLInputElement>) => void) & (() => void);
    onCompositionUpdate?: (event: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').CompositionEvent<HTMLInputElement>) => void;
    'aria-errormessage'?: string;
    children?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactNode;
    defaultChecked?: boolean;
    suppressContentEditableWarning?: boolean;
    suppressHydrationWarning?: boolean;
    accessKey?: string;
    className?: string;
    contentEditable?: "inherit" | (boolean | "false" | "true") | "plaintext-only";
    contextMenu?: string;
    dir?: string;
    draggable?: boolean | "false" | "true";
    hidden?: boolean;
    lang?: string;
    nonce?: string;
    slot?: string;
    spellCheck?: boolean | "false" | "true";
    style?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').CSSProperties;
    tabIndex?: number;
    title?: string;
    translate?: "yes" | "no";
    radioGroup?: string;
    role?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').AriaRole;
    about?: string;
    content?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    rel?: string;
    resource?: string;
    rev?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: "on" | "off";
    is?: string;
    "aria-atomic"?: boolean | "false" | "true";
    "aria-braillelabel"?: string;
    "aria-brailleroledescription"?: string;
    "aria-busy"?: boolean | "false" | "true";
    "aria-checked"?: boolean | "mixed" | "false" | "true";
    "aria-colcount"?: number;
    "aria-colindex"?: number;
    "aria-colindextext"?: string;
    "aria-colspan"?: number;
    "aria-controls"?: string;
    "aria-current"?: boolean | "page" | "false" | "true" | "step" | "location" | "date" | "time";
    "aria-description"?: string;
    "aria-disabled"?: boolean | "false" | "true";
    "aria-dropeffect"?: "none" | "copy" | "move" | "link" | "execute" | "popup";
    "aria-expanded"?: boolean | "false" | "true";
    "aria-flowto"?: string;
    "aria-grabbed"?: boolean | "false" | "true";
    "aria-hidden"?: boolean | "false" | "true";
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
    "aria-keyshortcuts"?: string;
    "aria-level"?: number;
    "aria-live"?: "off" | "assertive" | "polite";
    "aria-modal"?: boolean | "false" | "true";
    "aria-multiline"?: boolean | "false" | "true";
    "aria-multiselectable"?: boolean | "false" | "true";
    "aria-orientation"?: "horizontal" | "vertical";
    "aria-owns"?: string;
    "aria-placeholder"?: string;
    "aria-posinset"?: number;
    "aria-pressed"?: boolean | "mixed" | "false" | "true";
    "aria-readonly"?: boolean | "false" | "true";
    "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals";
    "aria-required"?: boolean | "false" | "true";
    "aria-roledescription"?: string;
    "aria-rowcount"?: number;
    "aria-rowindex"?: number;
    "aria-rowindextext"?: string;
    "aria-rowspan"?: number;
    "aria-selected"?: boolean | "false" | "true";
    "aria-setsize"?: number;
    "aria-sort"?: "none" | "ascending" | "descending" | "other";
    "aria-valuemax"?: number;
    "aria-valuemin"?: number;
    "aria-valuenow"?: number;
    "aria-valuetext"?: string;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    };
    onCopyCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ClipboardEventHandler<HTMLInputElement>;
    onCutCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ClipboardEventHandler<HTMLInputElement>;
    onPasteCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ClipboardEventHandler<HTMLInputElement>;
    onCompositionEndCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').CompositionEventHandler<HTMLInputElement>;
    onCompositionStartCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').CompositionEventHandler<HTMLInputElement>;
    onCompositionUpdateCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').CompositionEventHandler<HTMLInputElement>;
    onFocusCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FocusEventHandler<HTMLInputElement>;
    onBlurCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FocusEventHandler<HTMLInputElement>;
    onChangeCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEventHandler<HTMLInputElement>;
    onBeforeInputCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEventHandler<HTMLInputElement>;
    onInputCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEventHandler<HTMLInputElement>;
    onReset?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEventHandler<HTMLInputElement>;
    onResetCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEventHandler<HTMLInputElement>;
    onSubmit?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEventHandler<HTMLInputElement>;
    onSubmitCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEventHandler<HTMLInputElement>;
    onInvalid?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEventHandler<HTMLInputElement>;
    onInvalidCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').FormEventHandler<HTMLInputElement>;
    onLoad?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onLoadCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onError?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onErrorCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onKeyDownCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').KeyboardEventHandler<HTMLInputElement>;
    onKeyPress?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').KeyboardEventHandler<HTMLInputElement>;
    onKeyPressCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').KeyboardEventHandler<HTMLInputElement>;
    onKeyUpCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').KeyboardEventHandler<HTMLInputElement>;
    onAbort?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onAbortCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onCanPlay?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onCanPlayCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onCanPlayThrough?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onCanPlayThroughCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onDurationChange?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onDurationChangeCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onEmptied?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onEmptiedCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onEncrypted?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onEncryptedCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onEnded?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onEndedCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onLoadedData?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onLoadedDataCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onLoadedMetadata?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onLoadedMetadataCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onLoadStart?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onLoadStartCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onPause?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onPauseCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onPlay?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onPlayCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onPlaying?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onPlayingCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onProgress?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onProgressCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onRateChange?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onRateChangeCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onResize?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onResizeCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onSeeked?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onSeekedCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onSeeking?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onSeekingCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onStalled?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onStalledCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onSuspend?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onSuspendCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onTimeUpdate?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onTimeUpdateCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onVolumeChange?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onVolumeChangeCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onWaiting?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onWaitingCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onAuxClick?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onAuxClickCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onClick?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onClickCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onContextMenu?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onContextMenuCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onDoubleClick?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onDoubleClickCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onDrag?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragEnd?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragEndCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragEnter?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragEnterCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragExit?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragExitCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragLeave?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragLeaveCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragOver?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragOverCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragStart?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDragStartCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDrop?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onDropCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').DragEventHandler<HTMLInputElement>;
    onMouseDown?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseDownCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseEnter?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseLeave?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseMove?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseMoveCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseOut?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseOutCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseOver?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseOverCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseUp?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onMouseUpCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').MouseEventHandler<HTMLInputElement>;
    onSelectCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').ReactEventHandler<HTMLInputElement>;
    onTouchCancel?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEventHandler<HTMLInputElement>;
    onTouchCancelCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEventHandler<HTMLInputElement>;
    onTouchEnd?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEventHandler<HTMLInputElement>;
    onTouchEndCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEventHandler<HTMLInputElement>;
    onTouchMove?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEventHandler<HTMLInputElement>;
    onTouchMoveCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEventHandler<HTMLInputElement>;
    onTouchStart?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEventHandler<HTMLInputElement>;
    onTouchStartCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TouchEventHandler<HTMLInputElement>;
    onPointerDown?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerDownCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerMove?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerMoveCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerUp?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerUpCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerCancel?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerCancelCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerEnter?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerLeave?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerOver?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerOverCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerOut?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onPointerOutCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onGotPointerCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onGotPointerCaptureCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onLostPointerCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onLostPointerCaptureCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').PointerEventHandler<HTMLInputElement>;
    onScroll?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').UIEventHandler<HTMLInputElement>;
    onScrollCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').UIEventHandler<HTMLInputElement>;
    onWheel?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').WheelEventHandler<HTMLInputElement>;
    onWheelCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').WheelEventHandler<HTMLInputElement>;
    onAnimationStart?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').AnimationEventHandler<HTMLInputElement>;
    onAnimationStartCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').AnimationEventHandler<HTMLInputElement>;
    onAnimationEnd?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').AnimationEventHandler<HTMLInputElement>;
    onAnimationEndCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').AnimationEventHandler<HTMLInputElement>;
    onAnimationIteration?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').AnimationEventHandler<HTMLInputElement>;
    onAnimationIterationCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').AnimationEventHandler<HTMLInputElement>;
    onTransitionEnd?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TransitionEventHandler<HTMLInputElement>;
    onTransitionEndCapture?: import('../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react').TransitionEventHandler<HTMLInputElement>;
};
export {};
