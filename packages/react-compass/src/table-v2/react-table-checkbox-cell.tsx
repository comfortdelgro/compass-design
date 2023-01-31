import {HTMLProps} from 'react'
import ReactTableCheckbox from './react-table-checkbox'
import {StyledReactTableCheckboxCell} from './react-table-checkbox-cell.styles'

const ReactTableCheckboxCell = ({
  indeterminate,
  className = '',
  ...rest
}: {indeterminate?: boolean} & HTMLProps<HTMLInputElement>) => {
  return (
    <StyledReactTableCheckboxCell>
      <ReactTableCheckbox
        type='checkbox'
        className={className + ' cursor-pointer'}
        {...rest}
      />
    </StyledReactTableCheckboxCell>
  )
}

export default ReactTableCheckboxCell
