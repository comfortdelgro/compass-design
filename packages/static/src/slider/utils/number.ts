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

  const string = step.toString()
  const index = string.indexOf('.')
  const precision = index >= 0 ? string.length - index : 0

  if (precision > 0) {
    const pow = Math.pow(10, precision)
    snappedValue = Math.round(snappedValue * pow) / pow
  }

  return snappedValue
}

export function toFixedNumber(
  value: number,
  digits: number,
  base = 10,
): number {
  const pow = Math.pow(base, digits)

  return Math.round(value * pow) / pow
}
