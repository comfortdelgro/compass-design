import React, {useCallback, useEffect, useState} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter, classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/radio-group.module.css'

interface RadioGroupContextValue {
  value: string | null
  handleOnClickRadionButton: (value: string) => void
  radioName: string
}

export const RadioContext = React.createContext<RadioGroupContextValue>({
  value: '',
  handleOnClickRadionButton: () => {},
  radioName: '',
})

interface Props {
  value?: string
  children?: React.ReactNode
  defaultValue?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  'aria-labelledby'?: string
  groupName?: string
  orientation?: 'vertical' | 'horizontal'
  css?: CSS
}

export type RadioGroupProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const {
      children,
      orientation = 'vertical',
      value = null,
      onChange,
      onBlur,
      css = {},
      groupName = `cdg-group-name-${Math.random().toString(36).substring(2)}`,
      'aria-labelledby': ariaLabelledBy = '',
      ...delegated
    } = props

    const groupRef = useDOMRef<HTMLDivElement>(ref)
    const onMountRef = React.useRef(false)
    const [selectedValue, setSelectedValue] = useState<string | null>(value)

    const handleBlur = useCallback(() => {
      onBlur && onBlur()
    }, [onBlur])

    const handleOnClickRadionButton = (clickedValue: string) => {
      if (clickedValue !== selectedValue) {
        setSelectedValue(clickedValue)
      }
      return
    }

    const handleControl = () => {
      if (value == null) {
        return selectedValue
      }
      return value
    }

    useEffect(() => {
      if (onMountRef.current) {
        if (!selectedValue) return
        onChange && onChange(selectedValue)
      } else {
        onMountRef.current = true
      }
    }, [onChange, selectedValue])

    return (
      <CssInjection css={css} childrenRef={groupRef}>
        <div
          {...delegated}
          role=''
          ref={groupRef}
          onBlur={handleBlur}
          className={classNames(
            styles.radioGroup,
            orientation &&
              styles[`radioGroup${capitalizeFirstLetter(orientation)}`],
            'cdg-radio-group',
          )}
          aria-labelledby={ariaLabelledBy}
        >
          <RadioContext.Provider
            value={{
              value: handleControl(),
              handleOnClickRadionButton,
              radioName: groupName,
            }}
          >
            {children}
          </RadioContext.Provider>
        </div>
      </CssInjection>
    )
  },
)

export default RadioGroup
