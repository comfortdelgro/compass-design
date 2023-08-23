import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {useId} from '../utils/useId'
import {StyledToggle, ToggleVariantProps} from './toggle.styles'

interface Props extends StyledComponentProps {
  size?: 'sm' | 'lg'
  children?: React.ReactNode
  defaultSelected?: boolean
  isSelected?: boolean
  onChange?: (isSelected: boolean) => void
  value?: string
  name?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  validationState?: 'valid' | 'invalid'
  isRequired?: boolean
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
  onFocusChange?: (isFocused: boolean) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  onKeyUp?: (e: React.KeyboardEvent) => void
  excludeFromTabOrder?: boolean

  autoFocus?: boolean
  'aria-controls'?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
  'aria-errormessage'?: string
  className?: string
  variant?: ToggleVariantProps['variant']
}

export type ToggleProps = Props &
  ToggleVariantProps &
  Omit<React.HTMLAttributes<HTMLInputElement>, keyof Props>

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
  const {
    id,
    size = 'sm',
    name,
    isSelected,
    defaultSelected,
    isReadOnly = false,
    isRequired = false,
    isDisabled = false,
    variant,
    css = {},
    className,
  } = props
  const [isActive, setIsActive] = React.useState(
    !!isSelected || !!defaultSelected,
  )
  const toggleId = useId(id)
  const toggleRef = useDOMRef<HTMLInputElement>(ref)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked
    // Prevent set active status when controlled without onChange
    if (!(isSelected !== undefined && !props.onChange)) setIsActive(value)
    props.onChange?.(value)
  }

  const onClick = () => {
    if (!isReadOnly && !isDisabled) {
      toggleRef.current?.click()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key
    if (key === 'Enter' || key === ' ') {
      onClick()
    }
  }

  React.useEffect(() => {
    setIsActive(!!isSelected || !!defaultSelected)
  }, [isSelected, defaultSelected])

  return (
    <StyledToggle
      css={css}
      size={size}
      tabIndex={isDisabled ? -1 : 0}
      className={className}
      active={isActive}
      disabled={!!props.isDisabled}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...(variant ? {variant} : {})}
    >
      <input
        name={name}
        id={toggleId}
        type='checkbox'
        ref={toggleRef}
        checked={isSelected}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        defaultChecked={defaultSelected}
        onChange={onChange}
        onBlur={props.onBlur}
        onKeyUp={props.onKeyUp}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        aria-label={props['aria-label']}
        aria-controls={props['aria-controls']}
        aria-details={props['aria-details']}
        aria-labelledby={props['aria-labelledby']}
        aria-describedby={props['aria-describedby']}
        aria-errormessage={props['aria-errormessage']}
      />
      <div className='toggle-circle' />
    </StyledToggle>
  )
})

export default Toggle
