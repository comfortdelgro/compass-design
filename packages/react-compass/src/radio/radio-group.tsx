import {CSSProperties} from '@stitches/react'
import React, {useState} from 'react'
import {RadioProps} from '.'
import {StyledRadioGroup} from './radio-group.styles'

export type RadioGroupProps = {
  children: Array<React.ReactElement<RadioProps>>
  orientation?: 'vertical' | 'horizontal'
  name: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  isDisabled?: boolean
  isReadOnly?: boolean
  css?: CSSProperties
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  name,
  defaultValue,
  onChange,
  isDisabled = false,
  isReadOnly = false,
  css,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setSelectedValue(value)

    if (onChange) {
      onChange(value)
    }
  }

  return (
    <StyledRadioGroup style={css} role='radiogroup'>
      {React.Children.map(children, (child) => {
        if (typeof child === 'string' || typeof child === 'number') {
          return child
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const childElement = child as React.ReactElement<any>
        if (!childElement.props) {
          return child
        }

        return React.cloneElement(childElement, {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          checked: childElement.props.value === selectedValue,
          onChange: handleChange,
          name,
          isDisabled,
          isReadOnly,
        })
      })}
    </StyledRadioGroup>
  )
}

export default RadioGroup
