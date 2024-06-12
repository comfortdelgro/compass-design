import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import {useDOMRef} from '../../utils/use-dom-ref'
import ActionBarCenterGroup from './action-bar-center-group'
import ActionBarLeftGroup from './action-bar-left-group'
import ActionBarRightGroup from './action-bar-right-group'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: CSS
  className?: string
}

const ActionBar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {children, css, className, ...htmlProps} = props

  const actionBarRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={actionBarRef}>
      <div
        {...htmlProps}
        ref={actionBarRef}
        className={classNames(
          styles.actionBar,
          className,
          'cdg-layout-action-bar',
        )}
      >
        {children}
      </div>
    </CssInjection>
  )
}) as typeof ActionBar & {
  LeftGroup: typeof ActionBarLeftGroup
  CenterGroup: typeof ActionBarCenterGroup
  RightGroup: typeof ActionBarRightGroup
}

export default ActionBar
