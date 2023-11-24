/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {useCallback, useMemo, useRef, useState} from 'react'
import {NumberFormatter, NumberParser} from '../../../internationalized/number'
import {clamp, snapValueToStep} from '../number'
import {NumberFieldProps} from '../types'
import {useControlledState} from './useControlledState'

export interface NumberFieldState {
  minValue: number
  maxValue: number
  inputValue: string
  numberValue: number
  canIncrement: boolean
  canDecrement: boolean
  commit(): void
  increment(): void
  decrement(): void
  decrementToMin(): void
  incrementToMax(): void
  setInputValue(val: string): void
  validate(value: string): boolean
}

export interface NumberFieldStateOptions extends NumberFieldProps {
  locale?: string
}

export default function useNumberFieldState(
  props: NumberFieldStateOptions,
): NumberFieldState {
  const {
    step,
    value,
    minValue,
    maxValue,
    isReadOnly,
    isDisabled,
    defaultValue,
    formatOptions,
    locale = 'en-US',
    onChange,
  } = props

  const [numberValue, setNumberValue] = useControlledState<number>(
    value,
    defaultValue && isNaN(defaultValue) ? NaN : defaultValue,
    onChange,
  )

  const [inputValue, setInputValue] = useState(() =>
    isNaN(numberValue)
      ? ''
      : new NumberFormatter(locale, formatOptions).format(numberValue),
  )

  const numberParser = useMemo(
    () => new NumberParser(locale, formatOptions),
    [locale, formatOptions],
  )

  const numberingSystem = useMemo(
    () => numberParser.getNumberingSystem(inputValue),
    [numberParser, inputValue],
  )

  const formatter = useMemo(
    () => new NumberFormatter(locale, {...formatOptions, numberingSystem}),
    [locale, formatOptions, numberingSystem],
  )

  const intlOptions = useMemo(() => formatter.resolvedOptions(), [formatter])

  const format = useCallback(
    (value: number) =>
      isNaN(value) || value === null ? '' : formatter.format(value),
    [formatter],
  )

  let clampStep = step ? step : 1
  if (intlOptions.style === 'percent' && !step) {
    clampStep = 0.01
  }

  const prevValue = useRef(numberValue)
  const prevLocale = useRef(locale)
  const prevFormatOptions = useRef(formatOptions)
  if (
    !Object.is(numberValue, prevValue.current) ||
    locale !== prevLocale.current ||
    formatOptions !== prevFormatOptions.current
  ) {
    setInputValue(format(numberValue))
    prevValue.current = numberValue
    prevLocale.current = locale
    prevFormatOptions.current = formatOptions
  }

  const parsedValue = useMemo(
    () => numberParser.parse(inputValue),
    [numberParser, inputValue],
  )
  const parsed = useRef(0)
  parsed.current = parsedValue

  const commit = () => {
    // Set to empty state if input value is empty
    if (!inputValue.length) {
      setNumberValue(NaN)
      setInputValue(value === undefined ? '' : format(numberValue))
      return
    }

    // if it failed to parse, then reset input to formatted version of current number
    if (isNaN(parsed.current)) {
      setInputValue(format(numberValue))
      return
    }

    // Clamp to min and max, round to the nearest step, and round to specified number of digits
    let clampedValue: number
    if (!step) {
      clampedValue = clamp(parsed.current, minValue, maxValue)
    } else {
      clampedValue = snapValueToStep(parsed.current, minValue, maxValue, step)
    }

    clampedValue = numberParser.parse(format(clampedValue))
    setNumberValue(clampedValue)

    // in a controlled state, the numberValue won't change, so we won't go back to our old input without help
    setInputValue(format(value === undefined ? clampedValue : numberValue))
  }

  const safeNextStep = (operation: '+' | '-', minMax: number | undefined) => {
    const prev = parsed.current

    if (isNaN(prev)) {
      // if the input is empty, start from the min/max value when incrementing/decrementing,
      // or zero if there is no min/max value defined.
      const newValue = !minMax ? 0 : minMax
      return snapValueToStep(newValue, minValue, maxValue, clampStep)
    } else {
      // otherwise, first snap the current value to the nearest step. if it moves in the direction
      // we're going, use that value, otherwise add the step and snap that value.
      const newValue = snapValueToStep(prev, minValue, maxValue, clampStep)
      if (
        (operation === '+' && newValue > prev) ||
        (operation === '-' && newValue < prev)
      ) {
        return newValue
      }

      return snapValueToStep(
        handleDecimalOperation(operation, prev, clampStep),
        minValue,
        maxValue,
        clampStep,
      )
    }
  }

  const increment = () => {
    const newValue = safeNextStep('+', minValue)
    if (newValue === numberValue) {
      setInputValue(format(newValue))
    }

    setNumberValue(newValue)
  }

  const decrement = () => {
    const newValue = safeNextStep('-', maxValue)
    if (newValue === numberValue) {
      setInputValue(format(newValue))
    }

    setNumberValue(newValue)
  }

  const incrementToMax = () => {
    if (maxValue != null) {
      setNumberValue(snapValueToStep(maxValue, minValue, maxValue, clampStep))
    }
  }

  const decrementToMin = () => {
    if (minValue != null) {
      setNumberValue(minValue)
    }
  }

  const canIncrement = useMemo(
    () =>
      !isDisabled &&
      !isReadOnly &&
      (isNaN(parsedValue) ||
        !maxValue ||
        snapValueToStep(parsedValue, minValue, maxValue, clampStep) >
          parsedValue ||
        handleDecimalOperation('+', parsedValue, clampStep) <= maxValue),
    [isDisabled, isReadOnly, minValue, maxValue, clampStep, parsedValue],
  )

  const canDecrement = useMemo(
    () =>
      !isDisabled &&
      !isReadOnly &&
      (isNaN(parsedValue) ||
        !minValue ||
        snapValueToStep(parsedValue, minValue, maxValue, clampStep) <
          parsedValue ||
        handleDecimalOperation('-', parsedValue, clampStep) >= minValue),
    [isDisabled, isReadOnly, minValue, maxValue, clampStep, parsedValue],
  )

  const validate = (value: string) =>
    numberParser.isValidPartialNumber(value, minValue, maxValue)

  return {
    inputValue,
    canIncrement,
    canDecrement,
    minValue: minValue ?? -Infinity,
    maxValue: maxValue ?? Infinity,
    numberValue: parsedValue,
    commit,
    validate,
    increment,
    decrement,
    setInputValue,
    incrementToMax,
    decrementToMin,
  }
}

function handleDecimalOperation(
  operator: '-' | '+',
  value1: number,
  value2: number,
): number {
  let result = operator === '+' ? value1 + value2 : value1 - value2

  // Check if we have decimals
  if (value1 % 1 !== 0 || value2 % 1 !== 0) {
    const value1Decimal = value1.toString().split('.')
    const value2Decimal = value2.toString().split('.')
    const value1DecimalLength =
      (value1Decimal[1] && value1Decimal[1].length) || 0
    const value2DecimalLength =
      (value2Decimal[1] && value2Decimal[1].length) || 0
    const multiplier = Math.pow(
      10,
      Math.max(value1DecimalLength, value2DecimalLength),
    )

    value1 = Math.round(value1 * multiplier)
    value2 = Math.round(value2 * multiplier)

    result = operator === '+' ? value1 + value2 : value1 - value2
    result /= multiplier
  }

  return result
}
