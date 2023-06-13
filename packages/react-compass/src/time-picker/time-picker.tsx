import {faClock} from '@fortawesome/free-regular-svg-icons'
import {cloneDeep} from 'lodash'
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import Icon from '../icon'
import Popover from '../popover'
import TextField, {TextFieldProps} from '../textfield'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DEFAULT_VIEWS,
  EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
  EMPTY_TIME_PICKER_FORMAT,
} from './constant'
import TimePickerDropdown from './time-picker-dropdown'
import {TimePickerContainer} from './time-picker.styles'
import {
  TimePickerDropdownSelectedDisplayList,
  TimePickerFormat,
  ViewType,
} from './types'
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
  defaultValue?: string
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
      value,
      hourStep = 1,
      minuteStep = 1,
      hasFooter = true,
      formatTime = 'hh:mm AA',
      views = DEFAULT_VIEWS,
      defaultValue,
      onTimeChange,
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

    const timePickerInputRef = useRef<HTMLInputElement>(null)
    const containerRef = useDOMRef<HTMLElement>(ref)

    // Slit format string for object with position, min, max, format value
    const splittedTimeFormat = useMemo(
      () => splitTimeFormat(formatTime),
      [formatTime],
    )

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
        setSelectedDropdownValue(value)
        if (timePickerInputRef.current) {
          // Convert from format and selected value to display data
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
        }
        // Close popover when click outside
        isClosePopover && setIsOpen(false)
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
      if (!timePickerInputRef.current || event.code === 'Tab') {
        return
      }
      event.preventDefault()
      event.stopPropagation()

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
    const handleIconClockClick = () => {
      if (delegated.isReadOnly || delegated.isDisabled) return
      setIsOpen(true)
    }

    /**
     * Emits when clicking button Ok at the bottom
     */
    const handleOkClick = () => {
      setIsOpen(false)
    }

    return (
      <TimePickerContainer
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={className}
        css={css}
      >
        <Popover
          anchor={
            <TextField
              rightIcon={<Icon icon={faClock} onClick={handleIconClockClick} />}
              inputRef={timePickerInputRef}
              onFocus={handleFocusInput}
              onBlur={handlePopoverClose()}
              onClick={handleInputClick}
              onKeyDown={handleKeyDown}
              placeholder={formatTime}
              {...delegated}
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
