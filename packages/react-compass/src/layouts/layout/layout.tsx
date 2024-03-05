import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {classNames} from '../../utils/string'
import {useDOMRef} from '../../utils/use-dom-ref'
import {LAYOUT_ALIGNMENT_MAP, LAYOUT_DIRECTION_MAP} from './layout.const'
import styles from './styles/layout.module.css'

export type LayoutAlignment =
  | 'start-start'
  | 'center-start'
  | 'end-start'
  | 'start-center'
  | 'center-center'
  | 'end-center'
  | 'start-end'
  | 'center-end'
  | 'end-end'

export interface Props {
  children?: React.ReactNode
  css?: unknown
  direction?: 'row' | 'column'
  flex?: number
  align?: LayoutAlignment
  className?: string
  style?: React.CSSProperties
}

const Layout = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    css,
    className,
    direction = 'column',
    align,
    flex,
    style,
    ...htmlProps
  } = props

  const actionBarRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={actionBarRef}>
      <div
        ref={actionBarRef}
        className={classNames(
          className,
          `cdg-layout`,
          direction,
          align ? align : '',
          styles.layout,
          LAYOUT_DIRECTION_MAP[direction],
          align ? LAYOUT_ALIGNMENT_MAP[align] : '',
        )}
        style={{...style, flex}}
        {...htmlProps}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default Layout
