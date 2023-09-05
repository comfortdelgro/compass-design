import {cloneDeep} from 'lodash'
import React, {useEffect, useRef, useState} from 'react'
import Button from '../button'
import {
  DEFAULT_VIEWS,
  EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
  HALF_TIME_AM,
  HALF_TIME_LIST,
} from './constant'
import TimePickerDropdownItem from './time-picker-dropdown-item'
import {
  TimePickerDropdownContent,
  TimePickerDropdownControl,
  TimePickerDropdownFooter,
  TimePickerDropdownWrapper,
} from './time-picker.styles'
import {
  SelectedKey,
  TimePickerDropdownDisplayList,
  TimePickerDropdownSelectedDisplayList,
  ViewType,
} from './types'
import {createDropdownList} from './utils'

interface TimePickerDropdownProps {
  isOpen?: boolean
  value?: TimePickerDropdownSelectedDisplayList
  hourStep?: number
  minuteStep?: number
  hasFooter?: boolean
  isReadOnly?: boolean
  views?: ViewType[]
  onItemClick: (value: TimePickerDropdownSelectedDisplayList) => void
  onOkClick?: () => void
  onEscapeKeyDown?: () => void
}

const findNextFocusIndexBySelectedValue = (
  displayList: TimePickerDropdownDisplayList,
  selectedDisplayList: TimePickerDropdownSelectedDisplayList,
  controlIndex: number,
) => {
  const nextControl = displayList[controlIndex]
  const typeOfNextControl = nextControl?.type
  const itemIndex = typeOfNextControl
    ? nextControl?.items.findIndex(
        (item) =>
          item.toString().padStart(2, '0') ===
          selectedDisplayList[typeOfNextControl]?.toString(),
      )
    : '0'

  return `${controlIndex}-${itemIndex}`
}

function TimePickerDropdown(props: TimePickerDropdownProps) {
  const {
    isOpen = true,
    hourStep = 1,
    minuteStep = 1,
    value = EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
    hasFooter = true,
    views = DEFAULT_VIEWS,
    isReadOnly,
    onItemClick,
    onOkClick,
    onEscapeKeyDown,
  } = props
  const ref = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [displayList, setDisplayList] = useState<TimePickerDropdownDisplayList>(
    [],
  )
  const [focusingItemId, setFocusingItemId] = useState('')
  const [selectedDisplayList, setSelectedDisplayList] =
    useState<TimePickerDropdownSelectedDisplayList>(
      EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
    )

  /**
   * Create arrays to display data
   */
  useEffect(() => {
    const newDisplayList: TimePickerDropdownDisplayList = []

    views.forEach((view) => {
      switch (view) {
        case 'hours24':
          newDisplayList.push({
            default: '00',
            items: createDropdownList(0, 23, hourStep),
            type: 'hour',
          })
          break
        case 'hours12':
          newDisplayList.push({
            default: '01',
            items: createDropdownList(1, 12, hourStep),
            type: 'hour',
          })
          break
        case 'minutes':
          newDisplayList.push({
            default: '00',
            items: createDropdownList(0, 59, minuteStep),
            type: 'minute',
          })
          break
        case 'seconds':
          newDisplayList.push({
            default: '00',
            items: createDropdownList(0, 59, 1),
            type: 'second',
          })
          break
        case 'sessions':
          newDisplayList.push({
            default: HALF_TIME_AM,
            items: HALF_TIME_LIST,
            type: 'session',
          })
          break
        default:
          break
      }
    })
    setDisplayList(newDisplayList)
  }, [views, hourStep, minuteStep])

  useEffect(() => {
    setSelectedDisplayList(value || EMPTY_DISPLAY_TIME_DROPDOWN_LIST)
  }, [value])

  useEffect(() => {
    if (isOpen) {
      setFocusingItemId((focusingItemId) => {
        const [controlIndex] = focusingItemId.split('-')
        return findNextFocusIndexBySelectedValue(
          displayList,
          selectedDisplayList,
          controlIndex ? Number(controlIndex) : 0,
        )
      })
    } else {
      setFocusingItemId('')
    }
  }, [isOpen, selectedDisplayList, displayList])

  const handleTimeItemClick =
    (value: number | string, type: SelectedKey) => () => {
      if (isReadOnly) return
      const newSelectedDisplayList = cloneDeep(selectedDisplayList)
      newSelectedDisplayList[type] = value
      // Set default data for others empty
      const selectedDisplayListArr = Object.keys(selectedDisplayList)
      selectedDisplayListArr.map((item) => {
        if (
          item !== type &&
          !selectedDisplayList[item as keyof typeof selectedDisplayList]
        ) {
          const selectedData = displayList.find((data) => data.type === item)
          if (selectedData) {
            newSelectedDisplayList[item as keyof typeof selectedDisplayList] =
              selectedData.default
          }
        }
      })

      setSelectedDisplayList(newSelectedDisplayList)
      onItemClick(newSelectedDisplayList)
    }

  const handleButtonOkClick = () => {
    onOkClick && onOkClick()
  }

  const moveToNextItem = (emptyIndex: number, nextItemIndex: number) => {
    const [controlIndex] = focusingItemId.split('-')
    if (!focusingItemId) {
      setFocusingItemId(
        findNextFocusIndexBySelectedValue(
          displayList,
          selectedDisplayList,
          emptyIndex,
        ),
      )
    } else {
      const control = displayList[Number(controlIndex)]
      if (control) {
        setFocusingItemId(`${controlIndex}-${nextItemIndex}`)
      }
    }
  }

  const handleTabKeyDown = (shiftKey = false) => {
    const [controlIndex] = focusingItemId.split('-')
    const nextControlIndex = shiftKey ? displayList.length - 1 : 0
    if (document.activeElement === buttonRef.current) {
      setFocusingItemId(
        findNextFocusIndexBySelectedValue(
          displayList,
          selectedDisplayList,
          nextControlIndex,
        ),
      )
      return
    }
    if (focusingItemId) {
      const nextIndex = shiftKey
        ? Number(controlIndex) - 1
        : Number(controlIndex) + 1
      if (displayList[nextIndex]) {
        setFocusingItemId(
          findNextFocusIndexBySelectedValue(
            displayList,
            selectedDisplayList,
            nextIndex,
          ),
        )
      } else {
        if (hasFooter) {
          buttonRef.current?.focus()
          setFocusingItemId('')
        } else {
          setFocusingItemId(
            findNextFocusIndexBySelectedValue(
              displayList,
              selectedDisplayList,
              nextControlIndex,
            ),
          )
        }
      }
    }
  }

  const handleWrapperKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) return
    const [controlIndex, itemIndex] = focusingItemId.split('-')
    const control = displayList[Number(controlIndex)]
    const controlItemsLength = control?.items.length || 0
    switch (event.code) {
      case 'ArrowUp':
        event.stopPropagation()
        event.preventDefault()
        if (control) {
          const nextIndex =
            Number(itemIndex) - 1 >= 0
              ? (Number(itemIndex) - 1) % controlItemsLength
              : controlItemsLength - 1
          moveToNextItem(0, nextIndex)
        }
        break
      case 'ArrowDown':
        event.stopPropagation()
        event.preventDefault()
        if (control) {
          moveToNextItem(0, (Number(itemIndex) + 1) % controlItemsLength)
        }
        break
      case 'Tab':
        event.stopPropagation()
        event.preventDefault()
        handleTabKeyDown(event.shiftKey)
        break
      case 'Escape':
        onEscapeKeyDown?.()
        break
      default:
        break
    }
  }

  return (
    <TimePickerDropdownWrapper onKeyDown={handleWrapperKeyDown} ref={ref}>
      <TimePickerDropdownContent>
        {displayList.map((displayData, index) => (
          <TimePickerDropdownControl
            className='time-picker-dropdown-control'
            key={index}
          >
            {displayData.items.map(
              (time: string | number, timeIndex: number) => (
                <TimePickerDropdownItem
                  itemId={`${index}-${timeIndex}`}
                  focusingItemId={focusingItemId}
                  key={time}
                  isOpen={isOpen}
                  selectedDisplayList={selectedDisplayList}
                  time={time.toString().padStart(2, '0')}
                  selectedTime={selectedDisplayList[displayData.type]}
                  displayDataType={displayData.type}
                  onClickItem={handleTimeItemClick}
                />
              ),
            )}
          </TimePickerDropdownControl>
        ))}
      </TimePickerDropdownContent>
      {hasFooter && (
        <TimePickerDropdownFooter>
          <Button
            variant='ghost'
            onClick={handleButtonOkClick}
            tabIndex={-1}
            ref={buttonRef}
          >
            OK
          </Button>
        </TimePickerDropdownFooter>
      )}
    </TimePickerDropdownWrapper>
  )
}
export default React.memo(TimePickerDropdown)
