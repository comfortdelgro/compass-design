/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */

import {InputHTMLAttributes, RefObject, useCallback, useMemo} from 'react'
import mergeProps from '../mergeProps'
import {AriaNumberFieldProps, DOMAttributes, NumberFieldState} from '../types'
import useFocus from '../useFocus'
import useFormattedTextField from './useFormattedTextField'
import {useKeysPress} from './useKeysPress'
import {useNumberFormatter} from './useNumberFormatter'
import useScrollWheel, {ScrollEvent} from './useScrollWheel'

export interface NumberField {
  inputProps: InputHTMLAttributes<HTMLInputElement>
  incrementButtonProps: DOMAttributes
  decrementButtonProps: DOMAttributes
}

export default function useNumberField(
  props: AriaNumberFieldProps,
  state: NumberFieldState,
  inputRef: RefObject<HTMLInputElement>,
): NumberField {
  const {
    label,
    description,
    errorMessage,
    formatOptions,
    autoFocus = false,
    isRequired = false,
    isReadOnly = false,
    isDisabled = false,
    maxValue = Infinity,
    minValue = -Infinity,
    disableScroll = true,
    validationState = 'valid',
    onBlur = () => {},
    onKeyUp = () => {},
    onFocus = () => {},
    onKeyDown = () => {},
    onFocusChange = () => {},
    ...otherProps
  } = props

  const {
    inputValue,
    numberValue,
    commit,
    increment,
    decrement,
    incrementToMax,
    decrementToMin,
  } = state

  const {focusProps} = useFocus({
    onBlur: () => commit(),
  })

  const textValueFormatter = useNumberFormatter({
    ...formatOptions,
    currencySign: undefined,
  })

  const textValue = useMemo(
    () => (isNaN(numberValue) ? '' : textValueFormatter.format(numberValue)),
    [textValueFormatter, numberValue],
  )

  const keysPressProps = useKeysPress({
    maxValue,
    minValue,
    textValue,
    isRequired,
    isReadOnly,
    isDisabled,
    value: numberValue,
    onIncrement: increment,
    onDecrement: decrement,
    onIncrementToMax: incrementToMax,
    onDecrementToMin: decrementToMin,
  })

  const onWheel = useCallback(
    (e: ScrollEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) {
        return
      }
      if (e.deltaY > 0) {
        increment()
      } else if (e.deltaY < 0) {
        decrement()
      }
    },
    [decrement, increment],
  )

  const scrollingDisabled = isDisabled || isReadOnly || disableScroll
  useScrollWheel({onScroll: onWheel, isDisabled: scrollingDisabled}, inputRef)

  const onChange = (value: string) => {
    state.setInputValue(value)
  }

  const textFieldProps = useFormattedTextField(
    {
      ...otherProps,
      label,
      autoFocus,
      isReadOnly,
      isRequired,
      isDisabled,
      description,
      errorMessage,
      type: 'text',
      validationState,
      defaultValue: '',
      value: inputValue,
      autoComplete: 'off',
      inputMode: 'numeric',
      onBlur,
      onFocus,
      onKeyUp,
      onChange,
      onKeyDown,
      onFocusChange,
    },
    state,
    inputRef,
  )

  const inputProps = mergeProps(keysPressProps, focusProps, textFieldProps, {
    autoCorrect: 'off',
  })

  const onButtonPressStart = () => {
    if (document.activeElement === inputRef.current) {
      return
    }
    inputRef.current?.focus()
  }

  const incrementButtonProps = {
    'aria-label': 'increase',
    type: 'button',
    disabled: !state.canIncrement,
    onClick: () => {
      onButtonPressStart()
      increment()
    },
    onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault(),
  }

  const decrementButtonProps = {
    'aria-label': 'decrease',
    type: 'button',
    disabled: !state.canDecrement,
    onClick: () => {
      onButtonPressStart()
      decrement()
    },
    onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault(),
  }

  return {
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
  }
}
