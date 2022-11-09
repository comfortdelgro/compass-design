import {faCheck, faMinus} from '@fortawesome/free-solid-svg-icons'
import {useCheckbox} from '@react-aria/checkbox'
import {useToggleState} from '@react-stately/toggle'
import type {AriaCheckboxProps} from '@react-types/checkbox'
import React from 'react'
import {Icon} from '../icon'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  CheckboxVariantProps,
  StyledCheckboxBox,
  StyledCheckboxCheckmark,
  StyledCheckboxInput,
  StyledCheckboxLabel,
  StyledCheckboxLabelContent,
} from './checkbox.styles'

interface Props extends AriaCheckboxProps, StyledComponentProps {
  isIndeterminate?: boolean
  children?: React.ReactNode

  // Variants for children
  variant?: 'default' | 'rounded'
}

export type CheckboxProps = Props & CheckboxVariantProps

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      isDisabled = false,
      children,
      // VariantProps
      isIndeterminate = false,
      variant = 'default',
      // AriaProps
      ...ariaSafeProps
    } = props

    const ariaProps = {
      isDisabled,
      ...ariaSafeProps,
    }

    const state = useToggleState(ariaSafeProps)
    const checkboxRef = useDOMRef<HTMLInputElement>(ref)
    const {inputProps} = useCheckbox(ariaProps, state, checkboxRef)

    return (
      <StyledCheckboxLabel css={css}>
        <StyledCheckboxInput
          type='checkbox'
          ref={checkboxRef}
          {...inputProps}
        />

        {/* Checkbox */}
        <StyledCheckboxBox
          disabled={!!isDisabled}
          rounded={variant === 'rounded'}
        >
          <StyledCheckboxCheckmark>
            <Icon icon={isIndeterminate ? faMinus : faCheck} className='icon' />
          </StyledCheckboxCheckmark>
        </StyledCheckboxBox>

        {/* Label */}
        <StyledCheckboxLabelContent>{children}</StyledCheckboxLabelContent>
      </StyledCheckboxLabel>
    )
  },
)

export default Checkbox
