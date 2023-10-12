import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import ActionBarCenterGroup from './action-bar-center-group'
import ActionBarLeftGroup from './action-bar-left-group'
import ActionBarRightGroup from './action-bar-right-group'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

const ActionBar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {children, css, className, ...htmlProps} = props

  const actionBarRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={actionBarRef}>
      <div
        ref={actionBarRef}
        className={`cdg-action-bar ${className ? className : ''} ${
          styles.actionBar
        }`}
        {...htmlProps}
      >
        {children}
      </div>
    </CssInjection>
  )
})

export default ActionBar as typeof ActionBar & {
  LeftGroup: typeof ActionBarLeftGroup
  CenterGroup: typeof ActionBarCenterGroup
  RightGroup: typeof ActionBarRightGroup
}
