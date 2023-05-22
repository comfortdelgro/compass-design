/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

export function clamp(value: number, min = -Infinity, max = Infinity): number {
  const newValue = Math.min(Math.max(value, min), max)
  return newValue
}

export function snapValueToStep(
  value: number,
  min: number | undefined,
  max: number | undefined,
  step: number,
): number {
  const remainder = (value - (!min ? 0 : min)) % step
  let snappedValue =
    Math.abs(remainder) * 2 >= step
      ? value + Math.sign(remainder) * (step - Math.abs(remainder))
      : value - remainder

  if (min) {
    if (snappedValue < min) {
      snappedValue = min
    } else if (max && snappedValue > max) {
      snappedValue = min + Math.floor((max - min) / step) * step
    }
  } else if (max && snappedValue > max) {
    snappedValue = Math.floor(max / step) * step
  }

  // correct floating point behavior by rounding to step precision
  const string = step.toString()
  const index = string.indexOf('.')
  const precision = index >= 0 ? string.length - index : 0

  if (precision > 0) {
    const pow = Math.pow(10, precision)
    snappedValue = Math.round(snappedValue * pow) / pow
  }

  return snappedValue
}

/* Takes a value and rounds off to the number of digits. */
export function toFixedNumber(
  value: number,
  digits: number,
  base = 10,
): number {
  const pow = Math.pow(base, digits)

  return Math.round(value * pow) / pow
}
