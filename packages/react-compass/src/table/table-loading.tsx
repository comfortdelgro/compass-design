import React, {HTMLAttributes} from 'react'
import Spinner from '../spinner'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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
  (props, ref) => {
    const {
      css = {},
      loadingIndicator = <Spinner />,
      colSpan,
      className,
      ...htmlProps
    } = props
    const tableLoadingRef = useDOMRef(ref)

    const rootClasses = classNames(
      styles.cdgTableLoading,
      className,
      'cdg-table-loading',
    )

    return (
      <CssInjection css={css}>
        <tr {...htmlProps} ref={tableLoadingRef} className={rootClasses}>
          <td colSpan={colSpan}>{loadingIndicator}</td>
        </tr>
      </CssInjection>
    )
  },
)

export default TableLoading
