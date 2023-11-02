import {
  TimePickerDropdownSelectedDisplayList,
  TimePickerFormat,
  ViewType,
} from './types'

export const EMPTY_TIME_PICKER_FORMAT: TimePickerFormat = {
  start: 0,
  end: 0,
  format: '',
  max: 0,
  min: 0,
}

export const EMPTY_DISPLAY_TIME_DROPDOWN_LIST: TimePickerDropdownSelectedDisplayList =
  {
    hour: null,
    minute: null,
    second: null,
    session: null,
  }

export const DEFAULT_VIEWS: ViewType[] = ['hours24', 'minutes', 'sessions']

export const TIME_PICKER_MARGIN_TOP = 4

export const HALF_TIME_AM = 'AM'
export const HALF_TIME_PM = 'PM'
export const HALF_TIME_LIST = [HALF_TIME_AM, HALF_TIME_PM]
