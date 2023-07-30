/* eslint-disable @typescript-eslint/no-empty-function */
import React, {useCallback, useEffect, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {RadioGroupVariantProps, StyledRadioGroup} from './radio-group.styles'
interface RadioGroupContextValue {
  value: string | null
  handleOnClickRadionButton: (value: string) => void
}

export const RadioContext = React.createContext<RadioGroupContextValue>({
  value: '',
  handleOnClickRadionButton: () => {},
})

interface Props extends StyledComponentProps {
  value?: string
  children?: React.ReactNode
  defaultValue?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  'aria-labelledby'?: string
}

export type RadioGroupProps = Props &
  RadioGroupVariantProps &
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
    }, [selectedValue])

    return (
      <StyledRadioGroup
        ref={groupRef}
        orientation={orientation}
        css={css}
        onBlur={handleBlur}
        {...delegated}
        aria-labelledby={ariaLabelledBy}
        role=''
      >
        <RadioContext.Provider
          value={{value: handleControl(), handleOnClickRadionButton}}
        >
          {children}
        </RadioContext.Provider>
      </StyledRadioGroup>
    )
  },
)

export default RadioGroup
