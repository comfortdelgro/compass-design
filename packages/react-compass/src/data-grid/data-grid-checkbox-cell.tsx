import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import DataGridCheckbox from './data-grid-checkbox'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate?: boolean
  className?: string
  disabled?: boolean
}

export type DataGridCheckboxCellProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DataGridCheckboxCell = ({
  indeterminate = false,
  className = '',
  disabled = false,
  ...rest
}: DataGridCheckboxCellProps) => {
  return (
    <DataGridCheckbox
      disabled={disabled}
      indeterminate={indeterminate}
      className={className}
      {...rest}
    />
  )
}

export default DataGridCheckboxCell
