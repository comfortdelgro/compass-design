import React from 'react'
import {StyledCheckboxLabel} from '../checkbox/checkbox.styles'
import {StyledReactCheckboxInput} from './react-table-checkbox.styles'

const ReactTableCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: {indeterminate?: boolean} & any) => {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <StyledCheckboxLabel>
      <StyledReactCheckboxInput
        type='checkbox'
        ref={ref}
        className={className + ' cursor-pointer'}
        {...rest}
      />
    </StyledCheckboxLabel>
  )
}

export default ReactTableCheckbox
