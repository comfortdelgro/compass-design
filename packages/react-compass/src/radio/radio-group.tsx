/* eslint-disable @typescript-eslint/no-empty-function */
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {RadioGroupVariantProps, StyledRadioGroup} from './radio-group.styles'
interface RadioGroupContextValue {
  selectedValue: string
  setSelectedValue: (value: string) => void
}

export const RadioContext = React.createContext<RadioGroupContextValue>({
  selectedValue: '',
  setSelectedValue: () => {},
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
      defaultValue = '',
      value,
      onChange,
      onBlur,
      css = {},
      ...delegated
    } = props

    const groupRef = useDOMRef<HTMLDivElement>(ref)
    const [selectedValue, setSelectedValue] = useState(value || defaultValue)
    const initialMount = useRef(true)

    useEffect(() => {
      if (initialMount.current) {
        initialMount.current = false
        return
      }

      handleChange(selectedValue)
    }, [selectedValue, onChange])

    const handleChange = useCallback(
      (value: string) => {
        if (value !== selectedValue) {
          setSelectedValue(value)
          onChange && onChange(value)
        }
      },
      [selectedValue, onChange],
    )

    const handleBlur = useCallback(() => {
      onBlur && onBlur()
    }, [onBlur])

    return (
      <StyledRadioGroup
        ref={groupRef}
        orientation={orientation}
        css={css}
        onBlur={handleBlur}
        {...delegated}
        tabIndex={0}
      >
        <RadioContext.Provider value={{selectedValue, setSelectedValue}}>
          {children}
        </RadioContext.Provider>
      </StyledRadioGroup>
    )
  },
)

export default RadioGroup
