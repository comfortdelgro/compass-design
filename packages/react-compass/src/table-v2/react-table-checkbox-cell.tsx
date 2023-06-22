import React, {HTMLProps} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import ReactTableCheckbox from './react-table-checkbox'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate: boolean | undefined
  className: string
  isDisabled: boolean
}

export type ReactTableCheckboxCellProps = Props

const ReactTableCheckboxCell = ({
  isDisabled,
  indeterminate,
  className = '',
  ...rest
}: {
  indeterminate?: boolean
  isDisabled?: boolean
} & HTMLProps<HTMLInputElement>) => {
  return (
    <ReactTableCheckbox
      disabled={isDisabled}
      indeterminate={indeterminate}
      type='checkbox'
      className={className + ' cursor-pointer'}
      {...rest}
    />
  )
}

export default ReactTableCheckboxCell
