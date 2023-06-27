import {faCheck, faMinus} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  StyledCheckboxCheckmark,
  StyledCheckboxLabel,
  StyledTableCheckboxBox,
} from '../checkbox/checkbox.styles'
import Icon from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledReactCheckboxInput} from './data-grid-checkbox.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate?: boolean
  className: string
  disabled?: boolean
}

export type DataGridCheckboxProps = Props

const DataGridCheckbox = ({
  indeterminate,
  className = '',
  disabled,
  ...rest
}: DataGridCheckboxProps) => {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate =
        !(rest as HTMLInputElement).checked && indeterminate
    }
  }, [ref, indeterminate])
  return (
    <StyledCheckboxLabel>
      <StyledReactCheckboxInput
        type='checkbox'
        ref={ref}
        disabled={disabled}
        className={className + ' cursor-pointer'}
        {...rest}
      />
      <StyledTableCheckboxBox disabled={false} rounded={false}>
        <StyledCheckboxCheckmark>
          <Icon icon={indeterminate ? faMinus : faCheck} className='icon' />
        </StyledCheckboxCheckmark>
      </StyledTableCheckboxBox>
    </StyledCheckboxLabel>
  )
}

export default DataGridCheckbox
