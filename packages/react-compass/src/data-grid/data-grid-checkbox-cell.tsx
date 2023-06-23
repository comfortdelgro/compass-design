import React, {HTMLProps} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import DataGridCheckbox from './data-grid-checkbox'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate: boolean | undefined
  className: string
}

export type DataGridCheckboxCellProps = Props

const DataGridCheckboxCell = ({
  indeterminate,
  className = '',
  ...rest
}: {indeterminate?: boolean} & HTMLProps<HTMLInputElement>) => {
  return (
    <DataGridCheckbox
      indeterminate={indeterminate}
      type='checkbox'
      className={className + ' cursor-pointer'}
      {...rest}
    />
  )
}

export default DataGridCheckboxCell
