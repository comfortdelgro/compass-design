import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import DataGridCheckbox from './data-grid-checkbox'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate?: boolean
  className?: string
  disabled?: boolean
  css?: CSS
}

export type DataGridCheckboxCellProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DataGridCheckboxCell = ({
  indeterminate = false,
  className = '',
  disabled = false,
  css = {},
  ...rest
}: DataGridCheckboxCellProps) => {
  return (
    <DataGridCheckbox
      disabled={disabled}
      indeterminate={indeterminate}
      className={className}
      css={css}
      {...rest}
    />
  )
}

export default DataGridCheckboxCell
