import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import TableV2Checkbox from './table-v2-checkbox'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate?: boolean
  className?: string
  disabled?: boolean
  checked?: boolean
  css?: CSS
}

export type TableV2CheckboxCellProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const TableV2CheckboxCell = ({
  indeterminate = false,
  className = '',
  disabled = false,
  css = {},
  ...rest
}: TableV2CheckboxCellProps) => {
  return (
    <TableV2Checkbox
      disabled={disabled}
      indeterminate={indeterminate}
      className={className}
      css={css}
      {...rest}
    />
  )
}

export default TableV2CheckboxCell
