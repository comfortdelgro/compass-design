import ClockOutlined from '@comfortdelgro/compass-icons/react/outlined/clock-outlined'
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import Popover from '../popover'
import TextField, {TextFieldProps} from '../textfield'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import TimePickerDropdown, {
  FULL_TIME_REGEX,
  HALF_TIME_REGEX,
} from './time-picker-dropdown'
import {TimePickerContainer} from './time-picker.styles'

export const HALF_FORMAT = 'HALF_FORMAT'
export const FULL_FORMAT = 'FULL_FORMAT'

export type FormatTimePicker = typeof HALF_FORMAT | typeof FULL_FORMAT

interface Props extends StyledComponentProps {
  className?: string
  isErrored?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isDisabled?: boolean
  format: FormatTimePicker
  hourStep?: number
  minuteStep?: number
  value?: string
  hasFooter?: boolean
  onTimeChange?: (time: string) => void
}

export type TimePickerProps = Props &
  TextFieldProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>

const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      className,
      id = `cdg-element-${Math.random().toString(36).substring(2)}`,
      name,
      value,
      format,
      hourStep = 1,
      minuteStep = 1,
      hasFooter = true,
      onTimeChange,
      ...options
    } = props

    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(value || '')

    const timePickerInputRef = useRef<HTMLInputElement>(null)
    const containerRef = useDOMRef<HTMLElement>(ref)

    // isFull = true if format = 'FULL_FORMAT'
    const isFull = useMemo(() => format === FULL_FORMAT, [format])
    // Regex for each format
    const regexTime: RegExp = useMemo(
      () => (isFull ? FULL_TIME_REGEX : HALF_TIME_REGEX),
      [isFull],
    )

    useEffect(() => {
      setSelectedValue(value || '')
      if (timePickerInputRef.current) {
        timePickerInputRef.current.value = value || ''
      }
    }, [value])

    const handleItemClick = useCallback(
      (value: string) => {
        // hasFooter = true then needs to click Ok button to save value
        if (!hasFooter) {
          setSelectedValue(value)
          onTimeChange && onTimeChange(value)
        }
        if (timePickerInputRef.current) {
          // Set display text for input
          timePickerInputRef.current.value = value
        }
      },
      [hasFooter],
    )

    /**
     * Emits when clicking button Ok at the bottom and uses for only hasFooter = true
     * @param newValue string
     */
    const handleOkClick = (newValue: string) => {
      if (newValue !== selectedValue) {
        setSelectedValue(newValue)
        onTimeChange && onTimeChange(newValue)
      }
      setIsOpen(false)
    }

    const handlePopoverClose =
      (isClosePopover = false) =>
      () => {
        if (timePickerInputRef.current?.value) {
          // Blur without clicking button OK (hasFooter = true) then reverts value
          if (
            !selectedValue ||
            (selectedValue &&
              selectedValue !== timePickerInputRef.current.value)
          ) {
            timePickerInputRef.current.value = selectedValue
            return
          }
          const isValidTime = regexTime.test(timePickerInputRef.current.value)
          if (!isValidTime) {
            // Inputed value is not valid then reverts value
            timePickerInputRef.current.value = selectedValue
          } else {
            timePickerInputRef.current.value =
              timePickerInputRef.current.value.toUpperCase()
            setSelectedValue(timePickerInputRef.current.value)
          }
        } else {
          setSelectedValue('')
        }
        isClosePopover && setIsOpen(false)
      }

    const handleInputChange = () => {
      if (!timePickerInputRef.current) return
      if (!timePickerInputRef.current.value) {
        setSelectedValue('')
        onTimeChange && onTimeChange('')
      } else {
        const isValidTime = regexTime.test(
          timePickerInputRef.current.value || '',
        )
        if (isValidTime) {
          setSelectedValue(timePickerInputRef.current.value.toUpperCase() || '')
          onTimeChange &&
            onTimeChange(timePickerInputRef.current.value.toUpperCase() || '')
        }
      }
    }

    const handleFocusInput = useCallback(() => {
      if (options.isReadOnly || options.isDisabled) return
      setIsOpen(true)
    }, [options.isReadOnly, options.isDisabled])

    return (
      <TimePickerContainer
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={className}
        id={id}
        css={css}
      >
        <Popover
          anchor={
            <TextField
              rightIcon={<ClockOutlined />}
              ref={timePickerInputRef}
              name={name}
              onFocus={handleFocusInput}
              onBlur={handlePopoverClose()}
              onChange={handleInputChange}
              {...options}
            />
          }
          attachToElement={
            containerRef.current && containerRef.current.parentElement
          }
          offset={8}
          isOpen={isOpen}
          onClose={handlePopoverClose(true)}
        >
          <TimePickerDropdown
            isOpen={isOpen}
            isFull={isFull}
            value={selectedValue}
            onItemClick={handleItemClick}
            onOkClick={handleOkClick}
            hourStep={hourStep}
            minuteStep={minuteStep}
            hasFooter={hasFooter}
          />
        </Popover>
      </TimePickerContainer>
    )
  },
)

export default React.memo(TimePicker)
