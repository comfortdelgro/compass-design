import React, {useRef} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter, classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {useId} from '../utils/useId'
import styles from './styles/toggle.module.css'

interface Props {
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
  css?: CSS
}

export type ToggleProps = Props &
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
    css = {},
    className = '',
  } = props
  const [isActive, setIsActive] = React.useState(
    !!isSelected || !!defaultSelected,
  )
  const toggleId = useId(id)
  const toggleRef = useDOMRef<HTMLInputElement>(ref)
  const toggleWrapperRef = useRef<HTMLDivElement>(null)

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

  const toggleClasses = classNames(
    styles.toggle,
    size && styles[`toggleSize${capitalizeFirstLetter(size)}`],
    isActive && styles.toggleActive,
    !!props.isDisabled && styles.toggleDisabled,
    isActive && !!props.isDisabled && styles.toggleActiveDisabled,
    className,
    'cdg-toggle',
  )

  const toggleCicleClasses = classNames(
    styles.toggleCircle,
    size === 'lg' && styles.toggleCircleLg,
    'cdg-toggle-circle',
  )

  React.useEffect(() => {
    setIsActive(!!isSelected || !!defaultSelected)
  }, [isSelected, defaultSelected])

  return (
    <CssInjection css={css} childrenRef={toggleWrapperRef}>
      <div
        ref={toggleWrapperRef}
        tabIndex={isDisabled ? -1 : 0}
        className={toggleClasses}
        onClick={onClick}
        onKeyDown={handleKeyDown}
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
          className={classNames(styles.toggleInput, 'cdg-toggle-input')}
        />
        <div className={toggleCicleClasses} />
      </div>
    </CssInjection>
  )
})

export default Toggle
