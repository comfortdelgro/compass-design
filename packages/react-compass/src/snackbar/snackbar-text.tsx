import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/snackbar.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
  className?: string
}

export type SnackbarTextProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const SnackbarText = React.forwardRef<HTMLHeadingElement, SnackbarTextProps>(
  (props, ref) => {
    const {children, css = {}, className = '', ...htmlProps} = props
    const SnackbarTextRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <CssInjection css={css} childrenRef={SnackbarTextRef}>
        <div
          className={classNames(
            styles.snackbarText,
            className,
            'cdg-snackbar-text',
          )}
          ref={SnackbarTextRef}
          {...htmlProps}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default SnackbarText
