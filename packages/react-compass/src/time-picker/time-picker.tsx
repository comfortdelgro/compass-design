import {faClock} from '@fortawesome/free-regular-svg-icons'
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import Icon from '../icon'
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

export type ViewType =
  | 'hours12'
  | 'hours24'
  | 'minutes'
  | 'seconds'
  | 'sessions'

interface Props extends StyledComponentProps {
  className?: string
  isErrored?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isDisabled?: boolean
  format: FormatTimePicker
  formatTime?: string
  hourStep?: number
  minuteStep?: number
  value?: string
  hasFooter?: boolean
  views?: ViewType[]
  onTimeChange?: (time: string) => void
}

interface EmptyFormat {
  start: number
  end: number
  format: string
  min: number
  max: number
}

const emptyFormat: EmptyFormat = {start: 0, end: 0, format: '', max: 0, min: 0}

function splitTimeFormat(format: string) {
  const splitFormat = {
    hour: emptyFormat,
    minute: emptyFormat,
    second: emptyFormat,
  }

  if (format.includes('HH')) {
    splitFormat.hour = {
      start: format.indexOf('HH'),
      end: format.indexOf('HH') + 2,
      format: 'HH',
      min: 0,
      max: 23,
    }
  } else if (format.includes('hh')) {
    splitFormat.hour = {
      start: format.indexOf('hh'),
      end: format.indexOf('hh') + 2,
      format: 'hh',
      min: 1,
      max: 12,
    }
  }

  if (format.includes('mm')) {
    splitFormat.minute = {
      start: format.indexOf('mm'),
      end: format.indexOf('mm') + 2,
      format: 'mm',
      min: 0,
      max: 59,
    }
  }

  if (format.includes('ss')) {
    splitFormat.second = {
      start: format.indexOf('ss'),
      end: format.indexOf('ss') + 2,
      format: 'ss',
      min: 0,
      max: 59,
    }
  }

  if (format.includes('AA')) {
    splitFormat.second = {
      ...emptyFormat,
      start: format.indexOf('AA'),
      end: format.indexOf('AA') + 2,
      format: 'AA',
    }
  }

  return splitFormat
}

function getSelectionOnFocus(format: string, focusIndex: number) {
  const splitFormat = splitTimeFormat(format)
  const selection = emptyFormat

  for (const component in splitFormat) {
    const {start, end, format, max, min} =
      splitFormat[component as keyof typeof splitFormat]

    if (focusIndex >= start && focusIndex <= end) {
      selection.start = start
      selection.end = end
      selection.format = format
      selection.min = min ?? 0
      selection.max = max ?? 0
      break
    }
  }

  return selection
}
function replaceBetween(str: string, what: string, start: number, end: number) {
  return str.substring(0, start) + what + str.substring(end)
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
      formatTime = 'HH:mm AA',
      views = ['hours24', 'minutes', 'sessions'],
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
        setSelectedValue(value)
        onTimeChange && onTimeChange(value)
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
    const handleOkClick = () => {
      setIsOpen(false)
    }

    const handlePopoverClose =
      (isClosePopover = false) =>
      () => {
        if (
          timePickerInputRef.current?.value &&
          timePickerInputRef.current?.value !== formatTime
        ) {
          // // Blur without clicking button OK (onChan = true) then reverts value
          // if (
          //   !selectedValue ||
          //   (selectedValue &&
          //     selectedValue !== timePickerInputRef.current.value)
          // ) {
          //   timePickerInputRef.current.value = selectedValue
          //   return
          // }
          // const isValidTime = regexTime.test(timePickerInputRef.current.value)
          // if (!isValidTime) {
          //   // Inputed value is not valid then reverts value
          //   timePickerInputRef.current.value = selectedValue
          // } else {
          //   timePickerInputRef.current.value =
          //     timePickerInputRef.current.value.toUpperCase()
          //   setSelectedValue(timePickerInputRef.current.value)
          // }
        } else {
          if (timePickerInputRef.current) {
            timePickerInputRef.current.value = ''
          }
          setSelectedValue('')
        }
        isClosePopover && setIsOpen(false)
        setSelectedSelectionInput(emptyFormat)
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

    const [selectedSelectionInput, setSelectedSelectionInput] =
      useState(emptyFormat)

    const handleFocusInput = (event: React.FocusEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSelectionInput()
    }

    const setSelectionInput = () => {
      if (options.isReadOnly || options.isDisabled) return
      setTimeout(() => {
        if (timePickerInputRef.current) {
          if (!timePickerInputRef.current.value) {
            timePickerInputRef.current.value = formatTime
          }
          const selectionIndex = timePickerInputRef.current.selectionStart ?? 0
          const selectTime = getSelectionOnFocus(formatTime, selectionIndex)
          setSelectedSelectionInput(selectTime)
          timePickerInputRef.current?.setSelectionRange(
            selectTime.start,
            selectTime.end,
          )
        }
      }, 0)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!timePickerInputRef.current || event.code === 'Tab') {
        return
      }
      event.preventDefault()
      event.stopPropagation()

      const selectedFormat = selectedSelectionInput.format
      let isNumber = false
      const currentValue = timePickerInputRef.current.value
      const currentValueArr = currentValue.split('')
      const currentNumber = Number(
        `${currentValueArr[selectedSelectionInput.start]}${
          currentValueArr[selectedSelectionInput.end - 1]
        }`,
      )

      const timeFormatValue = formatTime.substring(
        selectedSelectionInput.start,
        selectedSelectionInput.end,
      )

      const timeValue = currentValue.substring(
        selectedSelectionInput.start,
        selectedSelectionInput.end,
      )

      switch (event.code) {
        case 'Backspace':
          timePickerInputRef.current.value = replaceBetween(
            currentValue,
            timeFormatValue,
            selectedSelectionInput.start,
            selectedSelectionInput.end,
          )
          timePickerInputRef.current?.setSelectionRange(
            selectedSelectionInput.start,
            selectedSelectionInput.end,
          )
          break
        case 'Space':
          break
        case 'ArrowLeft':
          if (selectedSelectionInput.end - 3 <= 0) {
            return
          } else {
            const selectTime = getSelectionOnFocus(
              formatTime,
              selectedSelectionInput.end - 3,
            )
            setSelectedSelectionInput(selectTime)
            timePickerInputRef.current?.setSelectionRange(
              selectTime.start,
              selectTime.end,
            )
          }
          break
        case 'ArrowRight':
          if (selectedSelectionInput.end + 2 > formatTime.length) {
            return
          } else {
            const selectTime = getSelectionOnFocus(
              formatTime,
              selectedSelectionInput.end + 2,
            )
            setSelectedSelectionInput(selectTime)
            timePickerInputRef.current?.setSelectionRange(
              selectTime.start,
              selectTime.end,
            )
          }
          break
        case 'ArrowUp':
          handleKeyUpDownInput(
            'up',
            selectedFormat,
            currentNumber,
            currentValue,
            timeValue,
            'AM',
          )

          break
        case 'ArrowDown':
          handleKeyUpDownInput(
            'down',
            selectedFormat,
            currentNumber,
            currentValue,
            timeValue,
            'PM',
          )
          break

        default:
          if (selectedFormat === 'AA') {
            if (
              event.key.toLowerCase() === 'a' ||
              event.key.toLowerCase() === 'p'
            ) {
              currentValueArr[selectedSelectionInput.start] =
                event.key.toUpperCase()
              currentValueArr[selectedSelectionInput.end - 1] = 'M'
              timePickerInputRef.current.value = currentValueArr.join('')
              timePickerInputRef.current.setSelectionRange(
                selectedSelectionInput.start,
                selectedSelectionInput.end,
              )
            }
          } else {
            isNumber = /\d/.test(event.key)
            if (isNumber) {
              let replaceText = ''
              let selectTime = selectedSelectionInput
              if (
                Number(
                  `${currentValueArr[selectedSelectionInput.start]}${
                    currentValueArr[selectedSelectionInput.end - 1]
                  }${event.key}`,
                ) < selectedSelectionInput.max
              ) {
                // currentValueArr[selectedSelectionInput.start] =
                //   currentValueArr[selectedSelectionInput.end - 1] ?? '0'
                // currentValueArr[selectedSelectionInput.end - 1] = event.key
                replaceText = `${
                  currentValueArr[selectedSelectionInput.end - 1] ?? '0'
                }${event.key}`
                selectTime = getSelectionOnFocus(
                  formatTime,
                  selectedSelectionInput.end + 2,
                )
                setSelectedSelectionInput(selectTime)
                // timePickerInputRef.current.value = currentValueArr.join('')
                // timePickerInputRef.current?.setSelectionRange(
                //   selectTime.start,
                //   selectTime.end,
                // )
              } else {
                // currentValueArr[selectedSelectionInput.start] = '0'
                // currentValueArr[selectedSelectionInput.end - 1] = event.key
                // timePickerInputRef.current.value = currentValueArr.join('')
                replaceText = `0${event.key}`
                if (
                  Number(
                    `${currentValueArr[selectedSelectionInput.end - 1]}0`,
                  ) >= selectedSelectionInput.max
                ) {
                  selectTime = getSelectionOnFocus(
                    formatTime,
                    selectedSelectionInput.end + 2,
                  )
                }
                setSelectedSelectionInput(selectTime)
                // timePickerInputRef.current.setSelectionRange(
                //   selectTime.start,
                //   selectTime.end,
                // )
              }
              console.log(currentValue, replaceText)

              setNewValueForInput(currentValue, replaceText, selectTime)
            }
          }
          break
      }
    }

    const handleKeyUpDownInput = (
      direction: 'up' | 'down',
      selectedFormat: string,
      currentNumber: number,
      currentValue: string,
      timeValue: string,
      defaultText: string,
    ) => {
      if (!timePickerInputRef.current) return
      let replaceText = ''
      if (selectedFormat === 'AA') {
        if (['pm', 'am'].includes(timeValue.toLowerCase())) {
          replaceText = timeValue.toUpperCase() === 'PM' ? 'AM' : 'PM'
        } else {
          replaceText = defaultText.toUpperCase()
        }
      } else {
        const defaultValue =
          direction === 'up'
            ? selectedSelectionInput.min ?? 0
            : selectedSelectionInput.max ?? 0
        if (isNaN(currentNumber)) {
          replaceText = defaultValue.toString().padStart(2, '0') ?? '00'
        } else {
          if (direction === 'down') {
            const newValue =
              currentNumber - 1 < selectedSelectionInput.min
                ? selectedSelectionInput.max
                : currentNumber - 1
            replaceText = newValue?.toString().padStart(2, '0') ?? '00'
          } else {
            const newValue =
              currentNumber + 1 > selectedSelectionInput.max
                ? selectedSelectionInput.min
                : currentNumber + 1
            replaceText = newValue?.toString().padStart(2, '0') ?? '00'
          }
        }
      }
      setNewValueForInput(currentValue, replaceText, selectedSelectionInput)
    }

    const setNewValueForInput = (
      currentValue: string,
      replaceText: string,
      selectTime: EmptyFormat,
    ) => {
      if (!timePickerInputRef.current) return
      timePickerInputRef.current.value = replaceBetween(
        currentValue,
        replaceText,
        selectTime.start,
        selectTime.end,
      )
      setTimeout(() => {
        timePickerInputRef.current.setSelectionRange(
          selectTime.start,
          selectTime.end,
        )
      })
    }

    const handleIconClockClick = () => {
      setIsOpen(true)
    }

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
              rightIcon={<Icon icon={faClock} onClick={handleIconClockClick} />}
              ref={timePickerInputRef}
              name={name}
              onFocus={handleFocusInput}
              onBlur={handlePopoverClose()}
              onChange={handleInputChange}
              onClick={setSelectionInput}
              onKeyDown={handleKeyDown}
              placeholder={formatTime}
              {...options}
            />
            // <TimeField />
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
