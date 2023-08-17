import {CSS} from '@stitches/react'
import React, {useEffect, useState} from 'react'
import {useIsDarkTheme} from '../theme'
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
  value?: string
  isIndeterminate?: boolean
  isReadOnly?: boolean
  children?: React.ReactNode
  isDisabled?: boolean
  defaultSelected?: boolean
  isSelected?: boolean
  cssCheckBoxInput?: CSS
  // Variants for children
  variant?: 'default' | 'rounded' | 'h5'
  validationState?: 'valid' | 'invalid'
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
  'aria-invalid'?: boolean
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
      cssCheckBoxInput = {},
      variant = 'default',
      isReadOnly = false,
      validationState,
      // AriaProps
      ...ariaSafeProps
    } = props

    const isDarkTheme = useIsDarkTheme()

    const [checked, setChecked] = useState<boolean>(
      isSelected || defaultSelected,
    )
    // const state = useToggleState(ariaProps)
    const checkboxRef = useDOMRef<HTMLInputElement>(ref)
    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    const handleCheckboxChange = () => {
      if (isDisabled || isReadOnly) return
      if (onChange) {
        onChange(!checked)
      }
      if (isSelected !== undefined) return

      setChecked(!checked)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const key = event.key
      if (key === 'Enter' || key === ' ') {
        event.preventDefault()
        handleCheckboxChange()
      }
    }

    useEffect(() => {
      setChecked((isSelected || defaultSelected) ?? false)
    }, [isSelected])

    return (
      <StyledCheckboxWrapper css={css} {...htmlProps}>
        <StyledCheckboxLabel isDarkTheme={isDarkTheme} variant={variant}>
          <StyledCheckboxInput
            tabIndex={-1}
            type='checkbox'
            ref={checkboxRef}
            checked={checked}
            disabled={isDisabled}
            css={cssCheckBoxInput}
            readOnly={isReadOnly}
            aria-invalid={validationState === 'invalid' ? 'true' : undefined}
            aria-readonly={isReadOnly === true ? 'true' : undefined}
            onChange={handleCheckboxChange}
          />

          {/* Checkbox */}
          <StyledCheckboxBox
            disabled={!!isDisabled}
            rounded={variant === 'rounded'}
            isDarkTheme={isDarkTheme}
            tabIndex={0}
            role='checkbox'
            aria-checked={checked}
            onKeyDown={handleKeyDown}
          >
            <StyledCheckboxCheckmark>
              {isIndeterminate ? (
                <svg className='icon' viewBox='0 0 448 512'>
                  <path
                    fill='currentColor'
                    d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z'
                  ></path>
                </svg>
              ) : (
                <svg className='icon' viewBox='0 0 448 512'>
                  <path
                    fill='currentColor'
                    d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
                  ></path>
                </svg>
              )}
            </StyledCheckboxCheckmark>
          </StyledCheckboxBox>

          {/* Label */}
          {children && (
            <StyledCheckboxLabelContent>{children}</StyledCheckboxLabelContent>
          )}
        </StyledCheckboxLabel>
      </StyledCheckboxWrapper>
    )
  },
)

export default Checkbox
