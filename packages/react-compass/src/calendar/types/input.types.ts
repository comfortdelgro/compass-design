export interface InputBase {
  isDisabled?: boolean
  isReadOnly?: boolean
}

export interface RangeInputBase<T> {
  minValue?: T
  maxValue?: T
  step?: T // ??
}
