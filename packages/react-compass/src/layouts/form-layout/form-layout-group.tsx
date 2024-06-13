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
  style?: React.CSSProperties
}

const FormLayoutGroup = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {children, css = {}, className = '', style, ...htmlProps} = props

    const layoutGroupRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={layoutGroupRef}>
        <div
          {...htmlProps}
          style={style}
          ref={layoutGroupRef}
          className={classNames(
            styles.formLayoutGroup,
            className,
            'cdg-layout-form-group',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default FormLayoutGroup
