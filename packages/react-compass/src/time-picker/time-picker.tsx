import {faClock} from '@fortawesome/free-regular-svg-icons'
import {cloneDeep} from 'lodash'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import Icon from '../icon'
import Popover from '../popover'
import TextField, {TextFieldProps} from '../textfield'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
  EMPTY_TIME_PICKER_FORMAT,
} from './constant'
import TimePickerDropdown from './time-picker-dropdown'
import {TimePickerContainer} from './time-picker.styles'
import {SelectedKey, TimePickerFormat, ViewType} from './types'
import {getSelectionOnFocus, replaceBetween, splitTimeFormat} from './utils'

interface Props extends StyledComponentProps {
  className?: string
  isErrored?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isDisabled?: boolean
  formatTime?: string
  hourStep?: number
  minuteStep?: number
  value?: string
  hasFooter?: boolean
  views?: ViewType[]
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
    const [selectedSelectionInput, setSelectedSelectionInput] = useState(
      EMPTY_TIME_PICKER_FORMAT,
    )
    const [selectedDropdownValue, setSelectedDropdownValue] = useState<
      Record<SelectedKey, string | number | null>
    >(EMPTY_DISPLAY_TIME_DROPDOWN_LIST)

    const timePickerInputRef = useRef<HTMLInputElement>(null)
    const containerRef = useDOMRef<HTMLElement>(ref)

    useEffect(() => {
      setSelectedValue(value || '')
      if (timePickerInputRef.current) {
        timePickerInputRef.current.value = value || ''
      }
    }, [value])

    const handleItemClick = useCallback(
      (value: Record<SelectedKey, string | number | null>) => {
        setSelectedDropdownValue(value)
        if (timePickerInputRef.current) {
          timePickerInputRef.current.value = formatTime
            .replace('hh', String(value.hour).padStart(2, '0'))
            .replace('HH', String(value.hour).padStart(2, '0'))
            .replace('mm', String(value.minute).padStart(2, '0'))
            .replace('ss', String(value.second).padStart(2, '0'))
            .replace('AA', String(value.session))
          onTimeChange && onTimeChange(timePickerInputRef.current.value)
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
          onTimeChange &&
            onTimeChange(timePickerInputRef.current.value.toUpperCase() || '')
        } else {
          if (timePickerInputRef.current) {
            timePickerInputRef.current.value = ''
          }
          setSelectedValue('')
        }
        isClosePopover && setIsOpen(false)
        setSelectedSelectionInput(EMPTY_TIME_PICKER_FORMAT)
      }

    const handleInputChange = () => {
      if (!timePickerInputRef.current) return
      if (!timePickerInputRef.current.value) {
        setSelectedValue('')
        onTimeChange && onTimeChange('')
      } else {
        onTimeChange &&
          onTimeChange(timePickerInputRef.current.value.toUpperCase() || '')
      }
    }

    const handleFocusInput = (event: React.FocusEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSelectionInput()
    }

    const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
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
          timePickerInputRef.current.setSelectionRange(
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
              setNewValueForInput(
                currentValue,
                `${event.key.toUpperCase()}M`,
                {
                  start: selectedSelectionInput.start,
                  end: selectedSelectionInput.end,
                },
                selectedSelectionInput,
              )
            }
          } else {
            isNumber = /\d/.test(event.key)
            if (isNumber) {
              let replaceText = ''
              const selectedSelectionInputCore = cloneDeep(
                selectedSelectionInput,
              )
              let selectTime = selectedSelectionInput

              if (
                Number(
                  `${currentValueArr[selectedSelectionInput.start]}${
                    currentValueArr[selectedSelectionInput.end - 1]
                  }${event.key}`,
                ) < selectedSelectionInput.max
              ) {
                replaceText = `${
                  currentValueArr[selectedSelectionInput.end - 1] ?? '0'
                }${event.key}`

                selectTime = getSelectionOnFocus(
                  formatTime,
                  selectedSelectionInput.end + 2,
                )
                setSelectedSelectionInput(selectTime)
              } else {
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
                  setSelectedSelectionInput(selectTime)
                }
              }
              setNewValueForInput(
                currentValue,
                replaceText,
                {
                  start: selectedSelectionInputCore.start,
                  end: selectedSelectionInputCore.end,
                },
                selectTime,
              )
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
      setNewValueForInput(
        currentValue,
        replaceText,
        {start: selectedSelectionInput.start, end: selectedSelectionInput.end},
        selectedSelectionInput,
      )
    }

    const setNewValueForInput = (
      currentValue: string,
      replaceText: string,
      replacePosition: {start: number; end: number},
      selectTime: TimePickerFormat,
    ) => {
      if (!timePickerInputRef.current) return
      timePickerInputRef.current.value = replaceBetween(
        currentValue,
        replaceText,
        replacePosition.start,
        replacePosition.end,
      )
      const splittedTimeFormat = splitTimeFormat(formatTime)
      setSelectedDropdownValue({
        hour: timePickerInputRef.current.value.substring(
          splittedTimeFormat.hour.start,
          splittedTimeFormat.hour.end,
        ),
        minute: timePickerInputRef.current.value.substring(
          splittedTimeFormat.minute.start,
          splittedTimeFormat.minute.end,
        ),
        second: timePickerInputRef.current.value.substring(
          splittedTimeFormat.second.start,
          splittedTimeFormat.second.end,
        ),
        session: timePickerInputRef.current.value.substring(
          splittedTimeFormat.session.start,
          splittedTimeFormat.session.end,
        ),
      })

      timePickerInputRef.current.setSelectionRange(
        selectTime.start,
        selectTime.end,
      )
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
              inputRef={timePickerInputRef}
              name={name}
              onFocus={handleFocusInput}
              onBlur={handlePopoverClose()}
              onChange={handleInputChange}
              onClick={handleInputClick}
              onKeyDown={handleKeyDown}
              placeholder={formatTime}
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
            views={views}
            isOpen={isOpen}
            value={selectedDropdownValue}
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
