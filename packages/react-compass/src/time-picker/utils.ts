import {cloneDeep} from 'lodash'
import {EMPTY_TIME_PICKER_FORMAT} from './constant'

/**
 * Slit format string for object with position, min, max, format value
 * @param format string
 */
export function splitTimeFormat(format: string) {
  const splitFormat = {
    hour: cloneDeep(EMPTY_TIME_PICKER_FORMAT),
    minute: cloneDeep(EMPTY_TIME_PICKER_FORMAT),
    second: cloneDeep(EMPTY_TIME_PICKER_FORMAT),
    session: cloneDeep(EMPTY_TIME_PICKER_FORMAT),
  }

  if (format.includes('HH')) {
    splitFormat.hour = {
      start: format.indexOf('HH'),
      end: format.indexOf('HH') + 2,
      format: 'HH',
      min: 0,
      max: 23,
    }
  } else if (format.includes('hh')) {
    splitFormat.hour = {
      start: format.indexOf('hh'),
      end: format.indexOf('hh') + 2,
      format: 'hh',
      min: 1,
      max: 12,
    }
  }

  if (format.includes('mm')) {
    splitFormat.minute = {
      start: format.indexOf('mm'),
      end: format.indexOf('mm') + 2,
      format: 'mm',
      min: 0,
      max: 59,
    }
  }

  if (format.includes('ss')) {
    splitFormat.second = {
      start: format.indexOf('ss'),
      end: format.indexOf('ss') + 2,
      format: 'ss',
      min: 0,
      max: 59,
    }
  }

  format.includes('AA')
  if (format.includes('AA')) {
    splitFormat.session = {
      ...cloneDeep(EMPTY_TIME_PICKER_FORMAT),
      start: format.indexOf('AA'),
      end: format.indexOf('AA') + 2,
      format: 'AA',
    }
  }

  return splitFormat
}

/**
 * Get Range of current selection position
 * @param format format of display time
 * @param focusIndex current selection position
 * @returns TimePickerFormat
 */
export function getSelectionOnFocus(format: string, focusIndex: number) {
  const splitFormat = splitTimeFormat(format)
  const selection = cloneDeep(EMPTY_TIME_PICKER_FORMAT)
  for (const component in splitFormat) {
    const {start, end, format, max, min} =
      splitFormat[component as keyof typeof splitFormat]

    if (focusIndex >= start && focusIndex <= end) {
      selection.start = start
      selection.end = end
      selection.format = format
      selection.min = min
      selection.max = max
      break
    }
  }

  return selection
}

/**
 * Replace in the position want to replace
 * @param str root string
 * @param what text what want to replace
 * @param start start position
 * @param end end position
 * @returns string
 */
export function replaceBetween(
  str: string,
  what: string,
  start: number,
  end: number,
) {
  return str.substring(0, start) + what + str.substring(end)
}

export const createDropdownList = (min: number, max: number, step = 1) => {
  const arr = []
  while (min <= max) {
    arr.push(min)
    min = min + step
  }
  return arr
}
