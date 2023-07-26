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
      const radioButtons: HTMLDivElement[] = Array.from(
        groupRef.current?.querySelectorAll('[role="radio"]') || [],
      ).filter((el): el is HTMLDivElement => {
        return (
          el instanceof HTMLDivElement &&
          el.getAttribute('aria-disabled') !== 'true'
        )
      })
      if (radioButtons.length > 0 && radioButtons[0] !== undefined) {
        radioButtons[0].tabIndex = 0
      }
      if (onMountRef.current) {
        if (!selectedValue) return
        onChange && onChange(selectedValue)
      } else {
        onMountRef.current = true
      }
    }, [selectedValue])

    const focusNextRadio = () => {
      const activeElement = document.activeElement as HTMLDivElement | null
      if (!activeElement || !groupRef.current) {
        return
      }

      const radioButtons: HTMLDivElement[] = Array.from(
        groupRef.current?.querySelectorAll('[role="radio"]') || [],
      ).filter((el): el is HTMLDivElement => {
        return (
          el instanceof HTMLDivElement &&
          el.getAttribute('aria-disabled') !== 'true'
        )
      })
      const currentIndex = radioButtons.findIndex(
        (radio) => radio === activeElement,
      )
      const nextIndex = (currentIndex + 1) % radioButtons.length
      radioButtons[nextIndex]?.focus()
      const value =
        radioButtons[nextIndex]?.getAttribute('aria-valuetext') || selectedValue
      setSelectedValue(value)
    }

    const focusPreviousRadio = () => {
      const activeElement = document.activeElement as HTMLDivElement | null
      if (!activeElement || !groupRef.current) {
        return
      }

      const radioButtons: HTMLDivElement[] = Array.from(
        groupRef.current?.querySelectorAll('[role="radio"]') || [],
      ).filter((el): el is HTMLDivElement => {
        return (
          el instanceof HTMLDivElement &&
          el.getAttribute('aria-disabled') !== 'true'
        )
      })
      const currentIndex = radioButtons.findIndex(
        (radio) => radio === activeElement,
      )
      const previousIndex =
        (currentIndex - 1 + radioButtons.length) % radioButtons.length
      radioButtons[previousIndex]?.focus()
      const value =
        radioButtons[previousIndex]?.getAttribute('aria-valuetext') ||
        selectedValue
      setSelectedValue(value)
    }

    const handleKeydown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        const activeElement = document.activeElement as HTMLDivElement | null
        if (!activeElement) {
          return
        }
        const role = activeElement.getAttribute('role')
        if (role !== 'radio') {
          return
        }

        let flag = false

        switch (event.key.toLowerCase()) {
          case 'up':
          case 'arrowup':
          case 'left':
          case 'arrowleft':
            focusPreviousRadio()
            flag = true
            break

          case 'down':
          case 'arrowdown':
          case 'right':
          case 'arrowright':
            focusNextRadio()
            flag = true
            break

          default:
            break
        }

        if (flag) {
          event.stopPropagation()
          event.preventDefault()
        }
      },
      [],
    )

    return (
      <StyledRadioGroup
        ref={groupRef}
        orientation={orientation}
        css={css}
        onBlur={handleBlur}
        {...delegated}
        onKeyDown={handleKeydown}
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
