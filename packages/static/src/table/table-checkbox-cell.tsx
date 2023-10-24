import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/table-checkbox-cell.module.css'
import TableCheckbox from './table-checkbox'

interface Props {
  children?: React.ReactNode
  indeterminate?: boolean
  className?: string
  disabled?: boolean
  checked?: boolean
  css?: unknown
}

export type TableCheckboxCellProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TableCheckboxCell = ({
  indeterminate = false,
  className,
  disabled = false,
  css = {},
  ...rest
}: TableCheckboxCellProps) => {
  const checkboxCellClasses = [
    styles.cdgTableCheckboxCell,
    className,
    'cdg-table-checkbox-cell',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css}>
      <span className={checkboxCellClasses}>
        <TableCheckbox
          disabled={disabled}
          indeterminate={indeterminate}
          className={className}
          {...rest}
        />
      </span>
    </CssInjection>
  )
}

export default TableCheckboxCell
