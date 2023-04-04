import { faCheck,faMinus } from '@fortawesome/free-solid-svg-icons'
import React,{ useEffect,useState } from 'react'
import { Icon } from '../icon'
import type { StyledComponentProps } from '../utils/stitches.types'
import { useDOMRef } from '../utils/use-dom-ref'
import {
CheckboxVariantProps,
StyledCheckboxBox,
StyledCheckboxCheckmark,
StyledCheckboxInput,
StyledCheckboxLabel,
StyledCheckboxLabelContent,
StyledCheckboxWrapper
} from './checkbox.styles'




interface Props extends StyledComponentProps {
  isIndeterminate?: boolean
  children?: React.ReactNode
  onChange?: (isSelected: boolean) => void
  isDisabled?: boolean
  defaultSelected?: boolean
  isSelected?: boolean
  // Variants for children
  variant?: 'default' | 'rounded'
}

export type CheckboxProps = Props &
  CheckboxVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

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
    // const {inputProps} = useCheckbox(ariaProps, state, checkboxRef)

    // const {hoverProps} = useHover({isDisabled: inputProps.disabled!})
    // const {pressProps} = usePress({isDisabled: inputProps.disabled!})
    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    return (
      <StyledCheckboxWrapper css={css} {...htmlProps}>
        <StyledCheckboxLabel
        // {...mergeProps(hoverProps, pressProps)}
        >
          <StyledCheckboxInput
            type='checkbox'
            ref={checkboxRef}
            checked={checked}
            disabled={isDisabled}
            onChange={handleCheckboxChange}
            {...ariaProps}
            // {...inputProps}
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
