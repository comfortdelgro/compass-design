'use client'
import {cloneDeep} from 'lodash'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import Button from '../button'
import {
  DEFAULT_VIEWS,
  EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
  HALF_TIME_AM,
  HALF_TIME_LIST,
} from './constant'
import styles from './styles/time-picker.module.css'
import TimePickerDropdownItem from './time-picker-dropdown-item'
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
  isUncontrolledComponent: boolean
  minTimeDropdownValue?: TimePickerDropdownSelectedDisplayList
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

const TIME_PICKER_ITEM_HEIGHT = 50

function TimePickerDropdown(props: TimePickerDropdownProps) {
  const {
    isOpen = true,
    hourStep = 1,
    minuteStep = 1,
    value = EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
    hasFooter = true,
    isUncontrolledComponent = true,
    views = DEFAULT_VIEWS,
    isReadOnly,
    minTimeDropdownValue = EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
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
    const hasSession = views.findIndex((view) => view === 'sessions') !== -1

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
            items: createDropdownList(1, hasSession ? 11 : 12, hourStep),
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
      if (ref.current) {
        ref.current.style.minWidth = `${
          displayList.length * TIME_PICKER_ITEM_HEIGHT
        }px`
      }
    } else {
      setFocusingItemId('')
    }
  }, [isOpen, selectedDisplayList, displayList])

  const handleTimeItemClick = useCallback(
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

      if (isUncontrolledComponent) {
        setSelectedDisplayList(newSelectedDisplayList)
      }
      onItemClick(newSelectedDisplayList)
    },
    [
      isReadOnly,
      selectedDisplayList,
      isUncontrolledComponent,
      displayList,
      onItemClick,
    ],
  )

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
      const nextButton = ref.current?.querySelector(
        `.cdg-timepicker-dropdown-item__${controlIndex}-${nextItemIndex}`,
      ) as HTMLButtonElement
      if (control && !nextButton?.disabled) {
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
    <div
      onKeyDown={handleWrapperKeyDown}
      ref={ref}
      className={`cdg-time-picker-dropdown-wrapper ${styles.timePickerDropdownWrapper}`}
    >
      <div
        className={`cdg-time-picker-dropdown-wrapper ${styles.timePickerDropdownContent}`}
      >
        {displayList.map((displayData, index) => (
          <div
            className={`${styles.timePickerDropdownControl} cdg-time-picker-dropdown-control`}
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
                  minTime={minTimeDropdownValue[displayData.type]}
                  displayDataType={displayData.type}
                  onClickItem={handleTimeItemClick}
                />
              ),
            )}
          </div>
        ))}
      </div>
      {hasFooter && (
        <div className={`${styles.timePickerDropdownFooter}`}>
          <Button
            variant='ghost'
            onClick={handleButtonOkClick}
            tabIndex={-1}
            ref={buttonRef}
          >
            OK
          </Button>
        </div>
      )}
    </div>
  )
}
export default React.memo(TimePickerDropdown)
