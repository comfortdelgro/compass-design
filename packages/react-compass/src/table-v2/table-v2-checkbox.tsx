import {faCheck, faMinus} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  StyledCheckboxCheckmark,
  StyledCheckboxLabel,
  StyledTableCheckboxBox,
} from '../checkbox/checkbox.styles'
import Icon from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledReactCheckboxInput} from './table-v2-checkbox.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate?: boolean
  className: string
  disabled?: boolean
}

export type TableV2CheckboxProps = Props

const TableV2Checkbox = ({
  indeterminate,
  className = '',
  disabled = false,
  ...rest
}: TableV2CheckboxProps) => {
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
      <StyledTableCheckboxBox disabled={disabled} rounded={false}>
        <StyledCheckboxCheckmark>
          <Icon icon={indeterminate ? faMinus : faCheck} className='icon' />
        </StyledCheckboxCheckmark>
      </StyledTableCheckboxBox>
    </StyledCheckboxLabel>
  )
}

export default TableV2Checkbox
