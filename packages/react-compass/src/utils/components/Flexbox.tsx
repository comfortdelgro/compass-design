import React from 'react'
import {CSS, CssInjection} from '../objectToCss'
import {classNames} from '../string'
import {useDOMRef} from '../use-dom-ref'
import styles from './components.module.css'

interface FlexboxProps {
  children?: React.ReactNode
  css?: CSS
  className?: string
}

export type FlexboxComponentProps = FlexboxProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof FlexboxProps>

const Flexbox = React.forwardRef<HTMLDivElement, FlexboxComponentProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...htmlProps} = props
    const flexboxRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <CssInjection css={css} childrenRef={flexboxRef}>
        <div
          {...htmlProps}
          ref={flexboxRef}
          className={classNames(styles.flexbox, className, 'cdg-flexbox')}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default Flexbox
