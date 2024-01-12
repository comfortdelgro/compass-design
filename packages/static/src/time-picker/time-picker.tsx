'use client'
import {cloneDeep} from 'lodash'
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import Popover from '../popover'
import TextField, {TextFieldProps} from '../textfield'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DEFAULT_VIEWS,
  EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
  EMPTY_TIME_PICKER_FORMAT,
} from './constant'
import styles from './styles/time-picker.module.css'
import TimePickerDropdown from './time-picker-dropdown'
import {
  TimePickerDropdownSelectedDisplayList,
  TimePickerFormat,
  ViewType,
} from './types'
import {getSelectionOnFocus, replaceBetween, splitTimeFormat} from './utils'

interface Props {
  css?: unknown
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
  defaultValue?: string
  minTime?: string
  onTimeChange?: (time: string) => void
  onOpenChange?: (open: boolean) => void
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
      value,
      hourStep = 1,
      minuteStep = 1,
      hasFooter = true,
      formatTime = 'hh:mm AA',
      views = DEFAULT_VIEWS,
      defaultValue,
      minTime = '',
      onTimeChange,
      onOpenChange,
      ...delegated
    } = props

    const [isOpen, setIsOpen] = useState(false)
    const [selectedSelectionInput, setSelectedSelectionInput] = useState(
      cloneDeep(EMPTY_TIME_PICKER_FORMAT),
    )
    const [selectedDropdownValue, setSelectedDropdownValue] =
      useState<TimePickerDropdownSelectedDisplayList>(
        cloneDeep(EMPTY_DISPLAY_TIME_DROPDOWN_LIST),
      )
    const [minTimeDropdownValue, setMinTimeDropdownValue] =
      useState<TimePickerDropdownSelectedDisplayList>(
        cloneDeep(EMPTY_DISPLAY_TIME_DROPDOWN_LIST),
      )

    const isUncontrolledComponent = useMemo(
      () => !!defaultValue || (!defaultValue && !value),
      [defaultValue, value],
    )

    const timePickerInputRef = useRef<HTMLInputElement>(null)
    const timePickerIconRef = useRef<HTMLButtonElement>(null)
    const containerRef = useDOMRef<HTMLElement>(ref)

    // Slit format string for object with position, min, max, format value
    const splittedTimeFormat = useMemo(
      () => splitTimeFormat(formatTime),
      [formatTime],
    )

    useEffect(() => {
      if (minTime && selectedDropdownValue) {
        const {hour, minute, second, session} = splittedTimeFormat
        const minTimeDropdown = {
          hour: minTime.substring(hour.start, hour.end),
          minute: minTime.substring(minute.start, minute.end),
          second: minTime.substring(second.start, second.end),
          session: minTime.substring(session.start, session.end),
        }

        if (
          minTimeDropdown.session &&
          minTimeDropdown.session === selectedDropdownValue.session
        ) {
          if (
            Number(selectedDropdownValue.hour) > Number(minTimeDropdown.hour)
          ) {
            minTimeDropdown.minute = '0'
            minTimeDropdown.second = '0'
            minTimeDropdown.session = ''
          } else if (
            Number(selectedDropdownValue.minute) >
            Number(minTimeDropdown.minute)
          ) {
            minTimeDropdown.second = '0'
            minTimeDropdown.session = ''
          }
        }
        // Check if need to disabled all
        else if (
          minTimeDropdown.session === 'PM' &&
          selectedDropdownValue.session === 'AM'
        ) {
          minTimeDropdown.hour = '-'
          minTimeDropdown.minute = '-'
          minTimeDropdown.second = '-'
          minTimeDropdown.session = 'PM'
        }
        // Reset disabled
        else {
          minTimeDropdown.hour = '0'
          minTimeDropdown.minute = '0'
          minTimeDropdown.second = '0'
          minTimeDropdown.session = ''
        }
        setMinTimeDropdownValue(minTimeDropdown)
      }
    }, [minTime, selectedDropdownValue, splittedTimeFormat])

    useEffect(() => {
      const newValue = value ?? defaultValue
      if (timePickerInputRef.current) {
        timePickerInputRef.current.value = newValue ?? ''
      }
      if (newValue) {
        const {hour, minute, second, session} = splittedTimeFormat
        setSelectedDropdownValue({
          hour: newValue.substring(hour.start, hour.end),
          minute: newValue.substring(minute.start, minute.end),
          second: newValue.substring(second.start, second.end),
          session: newValue.substring(session.start, session.end),
        })
      } else {
        setSelectedDropdownValue(cloneDeep(EMPTY_DISPLAY_TIME_DROPDOWN_LIST))
      }
    }, [value, defaultValue])

    const handleItemClick = useCallback(
      (value: TimePickerDropdownSelectedDisplayList) => {
        if (isUncontrolledComponent) {
          setSelectedDropdownValue(value)
        }
        if (timePickerInputRef.current) {
          const dataValue = formatTime
            .replace('hh', String(value.hour).padStart(2, '0'))
            .replace('HH', String(value.hour).padStart(2, '0'))
            .replace('mm', String(value.minute).padStart(2, '0'))
            .replace('ss', String(value.second).padStart(2, '0'))
            .replace('AA', String(value.session))
          // Convert from format and selected value to display data
          if (isUncontrolledComponent) {
            timePickerInputRef.current.value = dataValue
          }
          onTimeChange && onTimeChange(dataValue)
        }
      },
      [hasFooter, formatTime, isUncontrolledComponent, onTimeChange],
    )

    const resetToMinTime = () => {
      const {hour, minute, second, session} = splittedTimeFormat
      const minTimeDropdown = {
        hour: minTime.substring(hour.start, hour.end),
        minute: minTime.substring(minute.start, minute.end),
        second: minTime.substring(second.start, second.end),
        session: minTime.substring(session.start, session.end),
      }
      let needUpdatValue = false
      const newSelectedDropdownValue = {...selectedDropdownValue}
      // Reset hour to min hour
      if (
        Number(newSelectedDropdownValue.hour) <
          Number(minTimeDropdownValue.hour) ||
        minTimeDropdownValue.hour === '-'
      ) {
        needUpdatValue = true
        newSelectedDropdownValue.hour = minTimeDropdown.hour
      }
      // Reset minute to min minute
      if (
        Number(newSelectedDropdownValue.minute) <
          Number(minTimeDropdownValue.minute) ||
        minTimeDropdownValue.minute === '-'
      ) {
        needUpdatValue = true
        newSelectedDropdownValue.minute = minTimeDropdown.minute
      }
      // Reset second to min second
      if (
        Number(newSelectedDropdownValue.second) <
          Number(minTimeDropdownValue.second) ||
        minTimeDropdownValue.second === '-'
      ) {
        needUpdatValue = true
        newSelectedDropdownValue.second = minTimeDropdown.second
      }
      // Reset second to min session
      if (
        newSelectedDropdownValue.session === 'AM' &&
        minTimeDropdownValue.session === 'PM'
      ) {
        needUpdatValue = true
        newSelectedDropdownValue.session = 'PM'
      }
      const dataValue = formatTime
        .replace('hh', String(newSelectedDropdownValue.hour).padStart(2, '0'))
        .replace('HH', String(newSelectedDropdownValue.hour).padStart(2, '0'))
        .replace('mm', String(newSelectedDropdownValue.minute).padStart(2, '0'))
        .replace('ss', String(newSelectedDropdownValue.second).padStart(2, '0'))
        .replace('AA', String(newSelectedDropdownValue.session))

      // // Convert from format and selected value to display data
      if (
        needUpdatValue &&
        isUncontrolledComponent &&
        timePickerInputRef.current
      ) {
        timePickerInputRef.current.value = dataValue
      }
      if (needUpdatValue) {
        setSelectedDropdownValue(newSelectedDropdownValue)
        onTimeChange && onTimeChange(dataValue)
      }
    }

    /**
     * Emits when clicking outside popover or blur input
     * @param isClosePopover boolean
     */
    const handlePopoverClose =
      (isClosePopover = false) =>
      (event?: React.FocusEvent<HTMLInputElement>) => {
        // Prevent to call action when close popup and click outside
        if (!isOpen && isClosePopover) return
        event?.preventDefault()
        event?.stopPropagation()
        // Reset for empty value input
        if (
          !timePickerInputRef.current?.value ||
          timePickerInputRef.current?.value === formatTime
        ) {
          if (timePickerInputRef.current) {
            timePickerInputRef.current.value = ''
          }
          setSelectedDropdownValue(cloneDeep(EMPTY_DISPLAY_TIME_DROPDOWN_LIST))
        } else {
          resetToMinTime()
        }
        // Close popover when click outside
        if (isClosePopover) {
          setIsOpen(false)
          onOpenChange?.(false)
        }
        // Clear selection position of input
        setSelectedSelectionInput(cloneDeep(EMPTY_TIME_PICKER_FORMAT))
      }

    const handleFocusInput = (event: React.FocusEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSelectionPositionToInput()
    }

    const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSelectionPositionToInput()
    }

    const setSelectionPositionToInput = () => {
      if (delegated.isReadOnly || delegated.isDisabled) return
      // Waiting for cursor select on input
      setTimeout(() => {
        if (timePickerInputRef.current) {
          // Set placeholder as value of input when input.value is empty
          if (!timePickerInputRef.current.value) {
            timePickerInputRef.current.value = formatTime
          }
          // current selection position
          const selectionIndex = timePickerInputRef.current.selectionStart ?? 0
          // Get Range of current selection position
          const selecttionPositionInput = getSelectionOnFocus(
            formatTime,
            selectionIndex,
          )

          setSelectedSelectionInput(selecttionPositionInput)
          timePickerInputRef.current.setSelectionRange(
            selecttionPositionInput.start,
            selecttionPositionInput.end,
          )
        }
      })
    }

    /**
     * Limit keys down from users
     */
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        !timePickerInputRef.current ||
        event.code === 'Tab' ||
        delegated.isReadOnly ||
        delegated.isDisabled
      ) {
        return
      }
      event.preventDefault()
      event.stopPropagation()
      const isControlledWithoutOnTimeChange =
        !isUncontrolledComponent && !onTimeChange
      if (isControlledWithoutOnTimeChange) {
        return
      }

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
      const prevSiblingIndex = selectedSelectionInput.end - 3
      const nextSiblingIndex = selectedSelectionInput.end + 2

      switch (event.code) {
        case 'Backspace':
          setNewValueForInput(
            currentValue,
            timeFormatValue,
            {
              start: selectedSelectionInput.start,
              end: selectedSelectionInput.end,
            },
            selectedSelectionInput,
          )
          break
        case 'Space':
          break
        case 'ArrowLeft':
          if (prevSiblingIndex <= 0) {
            return
          } else {
            const selecttionPositionInput = getSelectionOnFocus(
              formatTime,
              prevSiblingIndex,
            )
            setSelectedSelectionInput(selecttionPositionInput)
            timePickerInputRef.current?.setSelectionRange(
              selecttionPositionInput.start,
              selecttionPositionInput.end,
            )
          }
          break
        case 'ArrowRight':
          if (nextSiblingIndex > formatTime.length) {
            return
          } else {
            const selecttionPositionInput = getSelectionOnFocus(
              formatTime,
              nextSiblingIndex,
            )
            setSelectedSelectionInput(selecttionPositionInput)
            timePickerInputRef.current?.setSelectionRange(
              selecttionPositionInput.start,
              selecttionPositionInput.end,
            )
          }
          break
        case 'ArrowUp':
          handleKeyUpDownInput(
            'up',
            selectedSelectionInput.format,
            currentNumber,
            currentValue,
            timeValue,
            'AM',
          )

          break
        case 'ArrowDown':
          handleKeyUpDownInput(
            'down',
            selectedSelectionInput.format,
            currentNumber,
            currentValue,
            timeValue,
            'PM',
          )
          break

        default:
          if (selectedSelectionInput.format === 'AA') {
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
              handleKeyDownWithNumberKey(
                currentValue,
                currentValueArr,
                event.key,
                nextSiblingIndex,
              )
            }
          }
          break
      }
    }

    /**
     * Handle for key down is number and selection format position is hh, mm, ss
     */
    const handleKeyDownWithNumberKey = (
      currentValue = '',
      currentValueArr: string[] = [],
      key: string,
      nextSiblingIndex = 0,
    ) => {
      let replaceText = ''
      const selectedSelectionInputCore = cloneDeep(selectedSelectionInput)
      let selecttionPositionInput = cloneDeep(selectedSelectionInputCore)

      // Checks if current value is lower max value at selection format position
      if (
        Number(
          `${currentValueArr[selectedSelectionInput.start]}${
            currentValueArr[selectedSelectionInput.end - 1]
          }${key}`,
        ) <= selectedSelectionInput.max
      ) {
        replaceText = `${
          currentValueArr[selectedSelectionInput.end - 1] ?? '0'
        }${key}`

        selecttionPositionInput = getSelectionOnFocus(
          formatTime,
          nextSiblingIndex,
        )
      } else {
        replaceText = `0${key}`
        // Checks if entered value adds '0' is lower max value at selection format position
        if (
          Number(`${currentValueArr[selectedSelectionInput.end - 1]}0`) >=
          selectedSelectionInput.max
        ) {
          selecttionPositionInput = getSelectionOnFocus(
            formatTime,
            nextSiblingIndex,
          )
        }
      }

      // Is not last selection
      if (selecttionPositionInput.format) {
        setSelectedSelectionInput(selecttionPositionInput)
      } else {
        // Keep current selection position
        selecttionPositionInput = selectedSelectionInputCore
      }

      setNewValueForInput(
        currentValue,
        replaceText,
        {
          start: selectedSelectionInputCore.start,
          end: selectedSelectionInputCore.end,
        },
        selecttionPositionInput,
      )
    }

    const handleKeyUpDownInput = (
      direction: 'up' | 'down',
      selectedFormat: string,
      currentNumber: number,
      currentValue: string,
      timeValue: string,
      defaultText: 'PM' | 'AM',
    ) => {
      if (!timePickerInputRef.current) return
      let replaceText = ''
      const isKeyArrowUp = direction === 'up'
      // Current selection format position is PM/AM
      if (selectedFormat === 'AA') {
        // Current value is not null then switch value PM/AM
        if (['pm', 'am'].includes(timeValue.toLowerCase())) {
          replaceText = timeValue.toUpperCase() === 'PM' ? 'AM' : 'PM'
        } else {
          replaceText = defaultText.toUpperCase()
        }
      } else {
        const defaultValue = isKeyArrowUp
          ? selectedSelectionInput.min
          : selectedSelectionInput.max
        if (isNaN(currentNumber)) {
          replaceText = defaultValue.toString().padStart(2, '0') ?? '00'
        } else {
          if (isKeyArrowUp) {
            // Add 1 and if over max value then reset to min value
            const newValue =
              currentNumber + 1 > selectedSelectionInput.max
                ? selectedSelectionInput.min
                : currentNumber + 1
            replaceText = newValue?.toString().padStart(2, '0') ?? '00'
          } else {
            // Reduce 1 and if lower min value then set to max value
            const newValue =
              currentNumber - 1 < selectedSelectionInput.min
                ? selectedSelectionInput.max
                : currentNumber - 1
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

    /**
     * Set new value for input and set new selection for input
     * @param currentValue current input value
     * @param replaceText text want to replace
     * @param replacePosition position(start, end) need to place replaceText to currentValue
     * @param selecttionPositionInput next selection position
     */
    const setNewValueForInput = (
      currentValue: string,
      replaceText: string,
      replacePosition: {start: number; end: number},
      selecttionPositionInput: TimePickerFormat,
    ) => {
      if (!timePickerInputRef.current) return
      timePickerInputRef.current.value = replaceBetween(
        currentValue,
        replaceText,
        replacePosition.start,
        replacePosition.end,
      )
      const {hour, minute, second, session} = splittedTimeFormat
      setSelectedDropdownValue({
        hour: timePickerInputRef.current.value.substring(hour.start, hour.end),
        minute: timePickerInputRef.current.value.substring(
          minute.start,
          minute.end,
        ),
        second: timePickerInputRef.current.value.substring(
          second.start,
          second.end,
        ),
        session: timePickerInputRef.current.value.substring(
          session.start,
          session.end,
        ),
      })

      const isMissingValue = Object.keys(splittedTimeFormat).some((key) => {
        const formatValue =
          splittedTimeFormat[key as keyof typeof splittedTimeFormat]
        return (
          formatValue.format &&
          formatValue.format ===
            timePickerInputRef.current?.value.substring(
              formatValue.start,
              formatValue.end,
            )
        )
      })
      // If valid value then emits event onTimeChange
      if (!isMissingValue) {
        onTimeChange && onTimeChange(timePickerInputRef.current.value || '')
      }

      timePickerInputRef.current.setSelectionRange(
        selecttionPositionInput.start,
        selecttionPositionInput.end,
      )
    }

    /**
     * Emits when clicking Icon Lock button at the right
     */
    const handleIconClockClick = (
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      event.stopPropagation()
      event.preventDefault()
      if (delegated.isDisabled) return
      setIsOpen((isOpen) => {
        onOpenChange?.(!isOpen)
        return !isOpen
      })
    }

    /**
     * Emits when clicking button Ok at the bottom
     */
    const handleOkClick = () => {
      resetToMinTime()

      setIsOpen(false)
      onOpenChange?.(false)
    }

    /**
     * Emits when clicking button Ok at the bottom
     */
    const handleEscapeKeyDown = useCallback(() => {
      timePickerIconRef.current?.focus()
    }, [])

    return (
      <CssInjection css={css} childrenRef={containerRef}>
        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className={`${className} ${styles.timePickerContainer} cdg-time-picker-container`}
        >
          <Popover
            anchor={
              <TextField
                inputRef={timePickerInputRef}
                onFocus={handleFocusInput}
                onBlur={handlePopoverClose()}
                onClick={handleInputClick}
                onKeyDown={handleKeyDown}
                placeholder={formatTime}
                className={`${styles.timePickerInput} cdg-time-picker-input`}
                rightIcon={
                  <button
                    onClick={handleIconClockClick}
                    className={`${styles.timePickerInputIcon} cdg-time-picker-input-icon`}
                    disabled={delegated.isDisabled}
                    ref={timePickerIconRef}
                  >
                    <svg
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M7.34375 4.28125C7.34375 3.91758 7.63633 3.625 8 3.625C8.36367 3.625 8.65625 3.91758 8.65625 4.28125V7.65L10.9887 9.20312C11.2895 9.40547 11.3715 9.81289 11.1473 10.1137C10.9695 10.4145 10.5621 10.4965 10.2613 10.2723L7.63633 8.52227C7.45312 8.42383 7.34375 8.21875 7.34375 7.97539V4.28125ZM8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8C1 4.13359 4.13359 1 8 1ZM2.3125 8C2.3125 11.1418 4.8582 13.6875 8 13.6875C11.1418 13.6875 13.6875 11.1418 13.6875 8C13.6875 4.8582 11.1418 2.3125 8 2.3125C4.8582 2.3125 2.3125 4.8582 2.3125 8Z' />
                    </svg>
                  </button>
                }
                {...delegated}
              />
            }
            attachToElement={
              containerRef.current && containerRef.current.parentElement
            }
            direction='bottom-left'
            offset={8}
            isOpen={isOpen}
            onClose={handlePopoverClose(true)}
          >
            <TimePickerDropdown
              isUncontrolledComponent={isUncontrolledComponent}
              views={views}
              isOpen={isOpen}
              value={selectedDropdownValue}
              onItemClick={handleItemClick}
              onOkClick={handleOkClick}
              hourStep={hourStep}
              minuteStep={minuteStep}
              hasFooter={hasFooter}
              isReadOnly={!!delegated.isReadOnly}
              onEscapeKeyDown={handleEscapeKeyDown}
              minTimeDropdownValue={minTimeDropdownValue}
            />
          </Popover>
        </div>
      </CssInjection>
    )
  },
)

export default TimePicker
