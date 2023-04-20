export interface HookData {
  ariaLabel: string
  ariaLabelledBy: string
  errorMessageId: string
  selectedDateDescription: string
}

export interface EventPoint {
  clientX: number
  clientY: number
  width: number
  height: number
  radiusX?: number
  radiusY?: number
}

export interface Rect {
  top: number
  right: number
  bottom: number
  left: number
}
