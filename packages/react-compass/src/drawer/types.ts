import type {CSSProperties, DialogHTMLAttributes, ReactNode} from 'react'
import type {CSS} from '../utils/objectToCss'

export type DrawerStylingSelectors = 'root' | 'header' | 'content' | 'footer'

type DrawerSharedProps = {
  classNames?: Partial<Record<DrawerStylingSelectors, string>>
  /**
   * It is NOT recommended to use this prop, as the `classNames` prop is more flexible and has better performance.
   * ___
   * ***Note:** `styles[key]`'s value will be ignored if the related element's `style` property is provided.
   *
   * @example
   * ```tsx
   * <Drawer
   *    styles={{header: {backgroundColor: 'red'}}}
   * >
   *    <Drawer.Header style={{backgroundColor: 'blue'}}>Header</Drawer.Header>
   * </Drawer>
   * ```
   * In this case, `styles.header` will be ignored, the Drawer's header will have a blue background color.
   */
  styles?: Partial<Record<DrawerStylingSelectors, CSSProperties>>
  backdropProps?: {
    /** @default rgba(0,0,0,0.4) */
    background?: string
    /** @default 0 */
    blur?: string | number
    /** @default 1 */
    opacity?: number
  }
  /**
   * @default "modal"
   * @description
   * `modal`
   *
   * Act as a normal dialog.
   * It will be rendered on the top-layer with a backdrop.
   *
   * Everything other than the drawer and
   * its contents will be ignored by the browsers and can't be interact with.
   * ___
   * `non-modal`
   *
   * It has no backdrop and also doesn't render on the top-layer.
   * It can not be closed by pressing the `ESC` key.
   *
   * The content below the non-modal drawer can be interacted.
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility_considerations Read more}
   *
   */
  drawerMode?: 'non-modal' | 'modal'
  /**
   * If `true`, disable a default behavior of `<dialog>` element:
   *
   * Browser won't autofocus on the first nested focusable element anymore.
   * @default false
   */
  preventFocus?: boolean
  /**
   * If `true`, the drawer won't close when users press `Escape` key or click/tap on the backdrop.
   * @default false
   */
  preventClose?: boolean
}

type DefaultDrawerProps = {
  /** A normal drawer */
  variant?: 'default'
  position?: 'right' | 'bottom' | 'left'
  css?: CSS

  onExpandChange?: never
  onHeightChange?: never
  expandedPoint?: never
  expandableLine?: never
  disableResize?: never
  disableDragClose?: never
}

type MobileDrawerChildrenAsFunctionParams = {
  triggerCollapse: () => void
  isExpanded: boolean
  height: number
} & Omit<
  MobileDrawerSpecifiedProps,
  'variant' | 'position' | 'onExpandChange' | 'onHeightChange' | 'children'
>

export type MobileDrawerSpecifiedProps = {
  /**
   * A variant that utilizes modern web technologies to replicate the iOS drawer (sheets) experience on the web.
   *
   * https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS
   * ___
   * ⚠️ **Browser compatibility warning**: this variant experiments with the latest web technology concepts and CSS features
   * such as view transitions, transitioning discrete animations, the `inert` attribute, etc...
   *
   * Consider using the `Drawer`'s `h5` variant or the `Dialog` component for a more stable and widely browser supported experience.
   */
  variant: 'mobile'
  position?: never
  /** @deprecated The `mobile` variant does NOT support this prop. Please use the `className`, `classNames`, `styles` or `style` property for styling instead. */
  css?: never
  onExpandChange?: (isExpand: boolean) => void

  /**
   * How many **percentage** of the viewport height that the drawer will be fully expanded.
   * ___
   * Accepted value range: `0` - `100`
   *
   * Must be greater than `expandableLine` and drawer initialization height (percent).
   * ___
   * @default 100 // the top edge of available viewport
   */
  expandedPoint?: number

  /**
   * A boundary to tell the drawer to fully expand when its top crosses this line.
   * ___
   * Accepted value range: `0` - `100`
   *
   * Must be smaller than `expandedPoint` and greater than drawer initialization height (percent).
   * ___
   * @default 67 // 2/3 viewport from bottom of available viewport
   */
  expandableLine?: number

  /**
   * if `true`, the H5 drawer will NOT be able to expand/collapse and the expander line will be hidden.
   * @default false
   */
  disableResize?: boolean

  /**
   * Close the H5 drawer if the user drags and drops it below the default height.
   *
   * Note that if `disableResize` is true, users can't drag the the drawer.
   * ___
   * @default false
   */
  disableDragClose?: boolean

  onHeightChange?: (height: number) => void

  /**
   * Enable the drawer's background scale effect
   * ___
   * The scale background effect will be **disabled** if `drawerMode` is set to `non-modal`.
   * @default false
   */
  enableScaleBg?: boolean
  /** @default 16 (px) */
  scaleBgOffset?: number
  scaleBgClassName?: string

  children?:
    | ReactNode
    | ((params: MobileDrawerChildrenAsFunctionParams) => ReactNode)
}

export type DrawerMobileProps = DrawerSharedProps & MobileDrawerSpecifiedProps
export type DrawerDefaultProps = DrawerSharedProps & DefaultDrawerProps

type Props = DrawerSharedProps & (DefaultDrawerProps | MobileDrawerSpecifiedProps)

export type DrawerProps = Props &
  Omit<
    DialogHTMLAttributes<HTMLDialogElement>,
    keyof Props | 'tabIndex' | 'autoFocus'
  >

export type DrawerRef = HTMLDialogElement & {
  triggerCollapse: () => void
}
