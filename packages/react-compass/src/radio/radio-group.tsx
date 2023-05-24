/* eslint-disable @typescript-eslint/no-empty-function */
import React, {useEffect, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {RadioGroupVariantProps, StyledRadioGroup} from './radio-group.styles'
interface RadioGroupContextValue {
  value: string | null
  handleOnClickRadionButton: (value: string) => void
}

export const RadioContext = React.createContext<RadioGroupContextValue>({
  value: '',
  handleOnClickRadionButton: (clickedValue: string) => {},
})

interface Props extends StyledComponentProps {
  value?: string
  children?: React.ReactNode
  defaultValue?: string
  onChange?: (value: string) => void
  onBlur?: () => void
}

export type RadioGroupProps = Props & RadioGroupVariantProps

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const {
      children,
      orientation = 'vertical',
      value = null,
      onChange,
      onBlur,
      css = {},
      ...delegated
    } = props

    const groupRef = useDOMRef<HTMLDivElement>(ref)
    const [selectedValue, setSelectedValue] = useState<string | null>(value) // Sẽ được load từ onClick vào nếu new value

    // const handleBlur = useCallback(() => {
    //   onBlur && onBlur()
    // }, [onBlur])

    const handleOnClickRadionButton = (clickedValue: string) => {
      //console.log('radio button clicked', clickedValue)
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
      if (!selectedValue) return
      onChange && onChange(selectedValue)
    }, [selectedValue])

    return (
      <StyledRadioGroup
        ref={groupRef}
        orientation={orientation}
        css={css}
        {...delegated}
        tabIndex={0}
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
