import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
  columns?: 1 | 2 | 3
  breaksOnSmall?: boolean
  style?: React.CSSProperties
}

const FormLayoutRow = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    columns = 3,
    css = {},
    className = '',
    breaksOnSmall = false,
    style,
    ...htmlProps
  } = props

  const layoutRowRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={layoutRowRef}>
      <div
        ref={layoutRowRef}
        style={style}
        className={`${styles.formLayoutRow} ${className} ${
          breaksOnSmall ? styles.breaksOnSmall : ''
        } ${styles['column' + columns]}`}
        {...htmlProps}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default FormLayoutRow
