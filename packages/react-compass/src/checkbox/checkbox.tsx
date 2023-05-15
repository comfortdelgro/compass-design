import {faCheck, faMinus} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState} from 'react'
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
  StyledCheckboxWrapper,
} from './checkbox.styles'

interface Props extends StyledComponentProps {
  id?: string
  name?: string
  isIndeterminate?: boolean
  children?: React.ReactNode
  isDisabled?: boolean
  defaultSelected?: boolean
  isSelected?: boolean
  // Variants for children
  variant?: 'default' | 'rounded'
  onChange?: (isSelected: boolean) => void

  autoFocus?: boolean
  'aria-activedescendant'?: string
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  'aria-haspopup'?:
    | boolean
    | 'false'
    | 'true'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog'
  'aria-controls'?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
  'aria-errormessage'?: string
}

export type CheckboxProps = Props &
  CheckboxVariantProps &
  Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>

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
      defaultSelected = false,
      isSelected,
      onChange,
      variant = 'default',
      // AriaProps
      ...ariaSafeProps
    } = props

    const ariaProps = {
      isDisabled,
      ...ariaSafeProps,
    }

    const [checked, setChecked] = useState<boolean>(
      isSelected || defaultSelected,
    )

    useEffect(() => {
      setChecked((isSelected || defaultSelected) ?? false)
    }, [isSelected])

    const handleCheckboxChange = () => {
      if (onChange) {
        onChange(!checked)
      }
      if (isSelected !== undefined) return

      setChecked(!checked)
    }
    // const state = useToggleState(ariaProps)
    const checkboxRef = useDOMRef<HTMLInputElement>(ref)
    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    return (
      <StyledCheckboxWrapper css={css} {...htmlProps}>
        <StyledCheckboxLabel>
          <StyledCheckboxInput
            type='checkbox'
            ref={checkboxRef}
            {...ariaProps}
            checked={checked}
            disabled={isDisabled}
            onChange={handleCheckboxChange}
          />

          {/* Checkbox */}
          <StyledCheckboxBox
            disabled={!!isDisabled}
            rounded={variant === 'rounded'}
          >
            <StyledCheckboxCheckmark>
              <Icon
                icon={isIndeterminate ? faMinus : faCheck}
                className='icon'
              />
            </StyledCheckboxCheckmark>
          </StyledCheckboxBox>

          {/* Label */}
          <StyledCheckboxLabelContent>{children}</StyledCheckboxLabelContent>
        </StyledCheckboxLabel>
      </StyledCheckboxWrapper>
    )
  },
)

export default Checkbox
