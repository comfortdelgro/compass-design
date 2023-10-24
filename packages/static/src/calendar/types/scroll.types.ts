export interface ScrollableElement {
  element: HTMLElement
  scrollTop: number
  scrollLeft: number
}
export interface FocusableElement extends Element, HTMLOrSVGElement {}
