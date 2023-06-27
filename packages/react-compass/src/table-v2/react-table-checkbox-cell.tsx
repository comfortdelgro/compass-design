import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import ReactTableCheckbox from './react-table-checkbox'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate?: boolean
  className?: string
  disabled?: boolean
  checked?: boolean
}

export type ReactTableCheckboxCellProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ReactTableCheckboxCell = ({
  disabled,
  indeterminate,
  className = '',
  ...rest
}: ReactTableCheckboxCellProps) => {
  return (
    <ReactTableCheckbox
      disabled={disabled}
      indeterminate={indeterminate}
      className={className}
      {...rest}
    />
  )
}

export default ReactTableCheckboxCell
