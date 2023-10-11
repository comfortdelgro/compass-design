import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

const ActionBarCenterGroup = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {children, css, className, ...htmlProps} = props

    const actionBarGroupRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={actionBarGroupRef}>
        <div
          ref={actionBarGroupRef}
          className={`${className} ${styles.actionBarCenterGroup}`}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ActionBarCenterGroup
