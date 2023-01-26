import React, {HTMLProps} from 'react'
import {StyledCheckboxLabel} from '../checkbox/checkbox.styles'

const ReactTableCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: {indeterminate?: boolean} & HTMLProps<HTMLInputElement>) => {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <StyledCheckboxLabel>
      <input
        type='checkbox'
        ref={ref}
        className={className + ' cursor-pointer'}
        {...rest}
      />
    </StyledCheckboxLabel>
  )
}

export default ReactTableCheckbox
