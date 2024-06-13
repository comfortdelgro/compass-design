import React from 'react'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {classNames} from '../../utils/string'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/action-bar.module.css'

export interface Props {
  children?: React.ReactNode
  css?: CSS
  className?: string
}

const ActionBarCenterGroup = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const {children, css, className, ...htmlProps} = props

    const actionBarGroupRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={actionBarGroupRef}>
        <div
          {...htmlProps}
          ref={actionBarGroupRef}
          className={classNames(
            styles.actionBarCenterGroup,
            className,
            'cdg-layout-action-bar-center-group',
          )}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default ActionBarCenterGroup
