import React, {HTMLAttributes} from 'react'
import {CSS} from '../../utils'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './loading-component.module.css'

interface Props {
  colSpan: number
  loadingIndicator: React.ReactNode
  css?: CSS
}

export type LoadingComponentProps = Props &
  Omit<HTMLAttributes<HTMLTableRowElement>, keyof Props>
const LoadingComponent = React.forwardRef<
  HTMLTableRowElement,
  LoadingComponentProps
>(({colSpan, loadingIndicator, css = {}, ...htmlProps}, ref) => {
  const loadingComponentRef = useDOMRef(ref)
  return (
    <CssInjection css={css}>
      <tr
        className={styles.cdgTableLoading}
        ref={loadingComponentRef}
        {...htmlProps}
      >
        <td colSpan={colSpan}>{loadingIndicator}</td>
      </tr>
    </CssInjection>
  )
})

export default LoadingComponent
