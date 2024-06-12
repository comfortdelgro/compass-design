import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: CSS
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
        {...htmlProps}
        style={style}
        ref={layoutRowRef}
        className={classNames(
          styles.formLayoutRow,
          breaksOnSmall && styles.breaksOnSmall,
          styles['column' + columns],
          className,
          'cdg-layout-form-row',
        )}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default FormLayoutRow
