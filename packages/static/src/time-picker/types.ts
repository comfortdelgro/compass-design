export type ViewType =
  | 'hours12'
  | 'hours24'
  | 'minutes'
  | 'seconds'
  | 'sessions'

export type SelectedKey = 'hour' | 'minute' | 'second' | 'session'

export interface TimePickerFormat {
  start: number
  end: number
  format: string
  min: number
  max: number
}
export type TimePickerDropdownDisplayList = Array<{
  items: Array<string | number>
  type: SelectedKey
  default: string
}>

export type TimePickerDropdownSelectedDisplayList = Record<
  SelectedKey,
  string | number | null
>
