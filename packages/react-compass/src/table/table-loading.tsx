import React, {HTMLAttributes} from 'react'
import Spinner from '../spinner'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/table-loading.module.css'

interface Props {
  css?: CSS
  colSpan: number
  loadingIndicator: React.ReactNode
}

export type TableLoadingProps = Props &
  Omit<HTMLAttributes<HTMLTableRowElement>, keyof Props>

const TableLoading = React.forwardRef<HTMLTableRowElement, TableLoadingProps>(
  ({css = {}, loadingIndicator = <Spinner />, colSpan, ...htmlProps}, ref) => {
    const tableLoadingRef = useDOMRef(ref)
    return (
      <CssInjection css={css}>
        <tr
          className={styles.cdgTableLoading}
          ref={tableLoadingRef}
          {...htmlProps}
        >
          <td colSpan={colSpan}>{loadingIndicator}</td>
        </tr>
      </CssInjection>
    )
  },
)

export default TableLoading
