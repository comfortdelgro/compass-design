import React, {useEffect, useMemo, useRef, useState} from 'react'
import Button from '../button'
import {ViewType} from './time-picker'
import {
  TimePickerDropdownContent,
  TimePickerDropdownControl,
  TimePickerDropdownFooter,
  TimePickerDropdownItem,
  TimePickerDropdownWrapper,
} from './time-picker.styles'

interface TimePickerDropdownProps {
  isFull: boolean
  isOpen?: boolean
  value?: string
  hourStep?: number
  minuteStep?: number
  hasFooter?: boolean
  views?: ViewType[]
  onItemClick?: (value: string) => void
  onOkClick?: (selectedValue: string) => void
}

const HALF_TIME_AM = 'AM'
const HALF_TIME_PM = 'PM'
const HALF_TIME_LIST = [HALF_TIME_AM, HALF_TIME_PM]
export const HALF_TIME_REGEX =
  /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\s(AM|aM|Am|am|PM|Pm|pM|pm)$/
export const FULL_TIME_REGEX = /^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/

const createDropdownList = (min: number, max: number, step = 1) => {
  const arr = []
  while (min <= max) {
    arr.push(min)
    min = min + step
  }
  return arr
}

function TimePickerDropdown(props: TimePickerDropdownProps) {
  const {
    isFull,
    isOpen = true,
    hourStep = 1,
    minuteStep = 1,
    value = '',
    hasFooter = true,
    onItemClick,
    onOkClick,
    views = [],
  } = props
  const [hourList, setHourList] = useState<number[]>([])
  const [minuteList, setMinuteList] = useState<number[]>([])
  const [secondList, setSecondList] = useState<string[] | number[]>([])
  const [selectedHour, setSelectedHour] = useState<number | null>(null)
  const [selectedMinute, setSelectedMinute] = useState<number | null>(null)
  const [selectedSecond, setSelectedSecond] = useState<number | string | null>(
    null,
  )

  const hourContainerRef = useRef<HTMLDivElement | null>(null)
  const minuteContainerRef = useRef<HTMLDivElement | null>(null)
  const secondContainerRef = useRef<HTMLDivElement | null>(null)

  const regexTime = useMemo(
    () => (isFull ? FULL_TIME_REGEX : HALF_TIME_REGEX),
    [isFull],
  )

  /**
   * Create arrays to display data
   */
  useEffect(() => {
    const formatHourValue = isFull ? 23 : 12
    const minHourValue = isFull ? 0 : 1
    setHourList(createDropdownList(minHourValue, formatHourValue, hourStep))
    setMinuteList(createDropdownList(0, 59, minuteStep))
    if (isFull) {
      setSecondList(createDropdownList(0, 59, 1))
    } else {
      setSecondList(HALF_TIME_LIST)
    }
  }, [isFull])

  useEffect(() => {
    // Scroll to selected value when open
    if (isOpen) {
      scrollToSelectedElement(selectedHour, hourContainerRef)
      scrollToSelectedElement(selectedMinute, minuteContainerRef)
      scrollToSelectedElement(selectedSecond, secondContainerRef)
    } else {
      // Reset data when open
      if (!value) {
        setSelectedHour(null)
        setSelectedMinute(null)
        setSelectedSecond(null)
        return
      }
      setSelectedItemsWithFormat()
    }
  }, [isOpen])

  useEffect(() => {
    if (selectedHour) {
      scrollToSelectedElement(selectedHour, hourContainerRef, 'smooth')
    }
  }, [selectedHour])

  useEffect(() => {
    if (selectedMinute) {
      scrollToSelectedElement(selectedMinute, minuteContainerRef, 'smooth')
    }
  }, [selectedMinute])

  useEffect(() => {
    if (selectedSecond) {
      scrollToSelectedElement(selectedSecond, secondContainerRef, 'smooth')
    }
  }, [selectedSecond])

  useEffect(() => {
    if (value) {
      if (!regexTime.test(value)) {
        return
      }
      setSelectedItemsWithFormat()
    } else {
      setSelectedHour(null)
      setSelectedMinute(null)
      setSelectedSecond(null)
    }
  }, [value])

  /**
   * Scroll to select element
   * @param selectedValue number | string | null
   * @param ref React.MutableRefObject<HTMLDivElement | null>
   * @param behavior "auto" | "smooth"
   */
  const scrollToSelectedElement = (
    selectedValue: number | string | null,
    ref: React.MutableRefObject<HTMLDivElement | null>,
    behavior: ScrollBehavior = 'auto',
  ) => {
    if ((selectedValue || selectedValue === 0) && ref.current) {
      for (let index = 0; index < ref.current.children.length; index++) {
        const element = ref.current.children.item(index)
        if (
          element?.textContent === selectedValue.toString().padStart(2, '0')
        ) {
          setTimeout(() => {
            element.scrollIntoView({behavior})
          })
          break
        }
      }
    }
  }

  /**
   * Split string to selected values on dropdown
   */
  const setSelectedItemsWithFormat = () => {
    if (isFull) {
      if (FULL_TIME_REGEX.test(value)) {
        // Spilt value "HH:mm:ss" to string
        const [hour, minute, second] = value.split(':')

        if (Number(hour) !== selectedHour) {
          setSelectedHour(Number(hour))
        }
        if (Number(minute) !== selectedMinute) {
          setSelectedMinute(Number(minute))
        }
        if (second !== selectedSecond) {
          setSelectedSecond(Number(second))
        }
      }
    } else {
      if (HALF_TIME_REGEX.test(value)) {
        // Spilt value "hh:mm AA" to string
        const [hhmm, time] = value.split(' ')
        if (!hhmm || !time) {
          return
        }
        const [hour, minute] = hhmm.split(':')

        if (Number(hour) !== selectedHour) {
          setSelectedHour(Number(hour))
        }
        if (Number(minute) !== selectedMinute) {
          setSelectedMinute(Number(minute))
        }
        if (time !== selectedSecond) {
          setSelectedSecond(time.toUpperCase())
        }
      }
    }
  }

  /**
   * Return display value for input
   * @param hour string
   * @param minute string
   * @param second string
   * @returns string format 'hh:mm AA' | 'HH:mm:ss'
   */
  const getDisplayValue = (hour: string, minute: string, second: string) => {
    let resultString = ''
    if (isFull) {
      resultString = `${hour.padStart(2, '0')}:${minute.padStart(
        2,
        '0',
      )}:${second.padStart(2, '0')}`
    } else {
      resultString = `${hour.padStart(2, '0')}:${minute.padStart(
        2,
        '0',
      )} ${second.toUpperCase()}`
    }
    return resultString
  }

  const handleTimeItemClick =
    (value: number | string, type: 'hour' | 'minute' | 'second') => () => {
      const currentValue = {
        hour: selectedHour,
        minute: selectedMinute,
        second: selectedSecond,
      }
      // Set default data for others empty
      switch (type) {
        case 'hour':
          currentValue.hour = Number(value)
          if (!currentValue.minute) {
            currentValue.minute = 0
          }
          if (!currentValue.second) {
            currentValue.second = isFull ? 0 : HALF_TIME_AM
          }
          break
        case 'minute':
          currentValue.minute = Number(value)
          if (!currentValue.hour) {
            currentValue.hour = isFull ? 0 : 1
          }
          if (!currentValue.second) {
            currentValue.second = isFull ? 0 : HALF_TIME_AM
          }
          break
        case 'second':
          currentValue.second = value
          if (!currentValue.hour) {
            currentValue.hour = isFull ? 0 : 1
          }
          if (!currentValue.minute) {
            currentValue.minute = 0
          }
          break
        default:
          break
      }

      setSelectedHour(currentValue.hour)
      setSelectedMinute(currentValue.minute)
      setSelectedSecond(currentValue.second)

      onItemClick &&
        onItemClick(
          getDisplayValue(
            `${currentValue.hour || ''}`,
            `${currentValue.minute || ''}`,
            `${currentValue.second || ''}`,
          ),
        )
    }

  const handleButtonOkClick = () =>
    onOkClick &&
    onOkClick(
      getDisplayValue(
        `${selectedHour || ''}`,
        `${selectedMinute || ''}`,
        `${selectedSecond || ''}`,
      ),
    )

  return (
    <>
      <TimePickerDropdownWrapper>
        <TimePickerDropdownContent>
          <TimePickerDropdownControl
            className='border-right time-picker-dropdown-control'
            ref={hourContainerRef}
          >
            {hourList.map((hour) => (
              <TimePickerDropdownItem
                key={hour}
                className={selectedHour === hour ? 'active' : ''}
                onClick={handleTimeItemClick(hour, 'hour')}
              >
                {hour.toString().padStart(2, '0')}
              </TimePickerDropdownItem>
            ))}
          </TimePickerDropdownControl>
          <TimePickerDropdownControl
            className='border-right time-picker-dropdown-control'
            ref={minuteContainerRef}
          >
            {minuteList.map((minute) => (
              <TimePickerDropdownItem
                key={minute}
                className={selectedMinute === minute ? 'active' : ''}
                onClick={handleTimeItemClick(minute, 'minute')}
              >
                {minute.toString().padStart(2, '0')}
              </TimePickerDropdownItem>
            ))}
          </TimePickerDropdownControl>
          <TimePickerDropdownControl
            ref={secondContainerRef}
            className='time-picker-dropdown-control'
          >
            {secondList.map((second) => (
              <TimePickerDropdownItem
                key={second}
                className={selectedSecond === second ? 'active' : ''}
                onClick={handleTimeItemClick(second, 'second')}
              >
                {second.toString().padStart(2, '0')}
              </TimePickerDropdownItem>
            ))}
          </TimePickerDropdownControl>
        </TimePickerDropdownContent>
        {hasFooter && (
          <TimePickerDropdownFooter>
            <Button variant='ghost' onPress={handleButtonOkClick}>
              OK
            </Button>
          </TimePickerDropdownFooter>
        )}
      </TimePickerDropdownWrapper>
    </>
  )
}
export default React.memo(TimePickerDropdown)
