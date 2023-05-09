/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeEvent,
  DOMFactory,
  HTMLAttributes,
  ReactDOM,
  RefObject,
} from 'react'
import mergeProps from '../../mergeProps'
import {AriaTextFieldProps} from '../../types'
import useFocusable from '../../useFocusable'

type IntrinsicHTMLElements = {
  [K in keyof IntrinsicHTMLAttributes]: IntrinsicHTMLAttributes[K] extends HTMLAttributes<
    infer T
  >
    ? T
    : never
}

type IntrinsicHTMLAttributes = {
  [K in keyof ReactDOM]: ReactDOM[K] extends DOMFactory<infer T, any>
    ? T
    : never
}

type DefaultElementType = 'input'

type TextFieldIntrinsicElements = keyof Pick<
  IntrinsicHTMLElements,
  'input' | 'textarea'
>

type TextFieldHTMLElementType = Pick<
  IntrinsicHTMLElements,
  TextFieldIntrinsicElements
>

type TextFieldHTMLAttributesType = Pick<
  IntrinsicHTMLAttributes,
  TextFieldIntrinsicElements
>

type TextFieldInputProps<T extends TextFieldIntrinsicElements> =
  TextFieldHTMLAttributesType[T]

export interface AriaTextFieldOptions<T extends TextFieldIntrinsicElements>
  extends AriaTextFieldProps {
  inputElementType?: T
}

type TextFieldRefObject<T extends TextFieldIntrinsicElements> = RefObject<
  TextFieldHTMLElementType[T]
>

export interface TextFieldAria<
  T extends TextFieldIntrinsicElements = DefaultElementType,
> {
  inputProps: TextFieldInputProps<T>
}

export function useTextField<
  T extends TextFieldIntrinsicElements = DefaultElementType,
>(
  props: AriaTextFieldOptions<T>,
  ref: TextFieldRefObject<T>,
): TextFieldAria<T> {
  const {
    isDisabled = false,
    isRequired = false,
    isReadOnly = false,
    validationState,
    type = 'text',
    onChange = () => {
      //
    },
  }: AriaTextFieldOptions<TextFieldIntrinsicElements> = props
  const {focusableProps} = useFocusable(props, ref)

  return {
    inputProps: mergeProps(props, {
      type: type,
      pattern: props.pattern,
      disabled: isDisabled,
      readOnly: isReadOnly,
      'aria-required': isRequired || undefined,
      'aria-invalid': validationState === 'invalid' || undefined,
      'aria-errormessage': props['aria-errormessage'],
      'aria-activedescendant': props['aria-activedescendant'],
      'aria-autocomplete': props['aria-autocomplete'],
      'aria-haspopup': props['aria-haspopup'],
      value: props.value,
      defaultValue: props.value ? undefined : props.defaultValue,
      onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
      autoComplete: props.autoComplete,
      maxLength: props.maxLength,
      minLength: props.minLength,
      name: props.name,
      placeholder: props.placeholder,
      inputMode: props.inputMode,

      // Clipboard events
      onCopy: props.onCopy,
      onCut: props.onCut,
      onPaste: props.onPaste,

      // Composition events
      onCompositionEnd: props.onCompositionEnd,
      onCompositionStart: props.onCompositionStart,
      onCompositionUpdate: props.onCompositionUpdate,

      // Selection events
      onSelect: props.onSelect,

      // Input events
      onBeforeInput: props.onBeforeInput,
      onInput: props.onInput,
      ...focusableProps,
    }),
  }
}
