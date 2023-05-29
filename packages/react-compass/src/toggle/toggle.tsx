import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
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
}

export type ToggleProps = Props & ToggleVariantProps

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
  const {
    size = 'sm',
    name,
    isSelected = !!props.defaultSelected,
    isReadOnly = false,
    isRequired = false,
    css = {},
    className,
  } = props
  const [isSelectedState, setIsSelectedState] = React.useState(isSelected)
  const toggleRef = useDOMRef<HTMLInputElement>(ref)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelectedState(e.target.value === 'true')
  }

  const onClick = () => {
    if (!props.isDisabled) {
      setIsSelectedState((s) => !s)
    }
  }

  React.useEffect(() => {
    props.onChange?.(isSelectedState)
  }, [isSelectedState])

  return (
    <StyledToggle
      css={css}
      size={size}
      active={isSelectedState}
      disabled={!!props.isDisabled}
      onClick={onClick}
      className={className}
    >
      <input
        aria-controls={props['aria-controls']}
        aria-label={props['aria-label']}
        aria-labelledby={props['aria-labelledby']}
        aria-describedby={props['aria-describedby']}
        aria-details={props['aria-details']}
        aria-errormessage={props['aria-errormessage']}
        readOnly={!!isReadOnly}
        required={!!isRequired}
        name={name}
        value={isSelectedState.toString()}
        onChange={onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        ref={toggleRef}
        style={{display: 'none'}}
      />
      <div className='toggle-circle' />
    </StyledToggle>
  )
})

export default Toggle
