import React from 'react'
import {
  StyledCheckboxCheckmark,
  StyledCheckboxLabel,
  StyledTableCheckboxBox,
} from '../checkbox/checkbox.styles'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledReactCheckboxInput} from './react-table-checkbox.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  indeterminate: boolean | undefined
  className: string
}

export type ReactTableCheckboxProps = Props

const ReactTableCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: {indeterminate: boolean | undefined} & {className: string}) => {
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
        className={className + ' cursor-pointer'}
        {...rest}
      />
      <StyledTableCheckboxBox disabled={false} rounded={false}>
        <StyledCheckboxCheckmark>
          {indeterminate ? (
            <svg className='icon' viewBox='0 0 448 512'>
              <path
                fill='currentColor'
                d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z'
              />
            </svg>
          ) : (
            <svg className='icon' viewBox='0 0 448 512'>
              <path
                fill='currentColor'
                d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
              />
            </svg>
          )}
        </StyledCheckboxCheckmark>
      </StyledTableCheckboxBox>
    </StyledCheckboxLabel>
  )
}

export default ReactTableCheckbox
