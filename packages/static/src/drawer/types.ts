import {DialogHTMLAttributes} from 'react'

type DrawerSharedProps = {
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
  variant?: 'default'
  position?: 'right' | 'bottom' | 'left' | undefined

  expanderCSS?: never
  onExpandChange?: never
  expandedPoint?: never
  expandableLine?: never
  disableResize?: never
  disableAddBodyAttr?: never
  disableDragClose?: never
}

type H5DrawerProps = {
  variant: 'h5'
  position?: never
  expanderCSS?: unknown
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
   * @deprecated This property now becomes useless, does nothing and will be removed in the next major release.
   *
   * Now respect the `<dialog />`'s default behaviors, let the browsers control if the content page below the Drawer should be rendered inert or not.
   * ___
   * @description
   * if `true`, when open a drawer, it will NOT
   *  add {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert inert} attribute and `overflow: hidden` to the `<body>` tag.
   * @default false
   */
  disableAddBodyAttr?: boolean

  /**
   * Close the H5 drawer if the user drags and drops it below the default height.
   *
   * Note that if `disableResize` is true, users can't drag the the drawer.
   * ___
   * @default false
   */
  disableDragClose?: boolean
}

export type DrawerH5Props = DrawerSharedProps & H5DrawerProps
export type DrawerDefaultProps = DrawerSharedProps & DefaultDrawerProps

type Props = DrawerSharedProps &
  (DefaultDrawerProps | H5DrawerProps) & {css?: unknown}

export type DrawerProps = Props &
  Omit<
    DialogHTMLAttributes<HTMLDialogElement>,
    keyof Props | 'tabIndex' | 'autoFocus'
  >
