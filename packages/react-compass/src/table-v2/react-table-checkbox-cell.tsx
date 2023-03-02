import React, {HTMLProps} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import ReactTableCheckbox from './react-table-checkbox'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate: boolean | undefined
  className: string
}

export type ReactTableCheckboxCellProps = Props

const ReactTableCheckboxCell = ({
  indeterminate,
  className = '',
  ...rest
}: {indeterminate?: boolean} & HTMLProps<HTMLInputElement>) => {
  return (
    <ReactTableCheckbox
      indeterminate={indeterminate}
      type='checkbox'
      className={className + ' cursor-pointer'}
      {...rest}
    />
  )
}

export default ReactTableCheckboxCell
