import React, {useEffect, useRef} from 'react'
import {TIME_PICKER_MARGIN_TOP} from './constant'
import {TimePickerDropdownItemStyle} from './time-picker.styles'
import {SelectedKey, TimePickerDropdownSelectedDisplayList} from './types'

interface TimePickerDropdownItemProps {
  selectedDisplayList: TimePickerDropdownSelectedDisplayList
  selectedTime: string | number | null
  time: string
  isOpen?: boolean
  displayDataType: SelectedKey
  onClickItem: (time: string, type: SelectedKey) => () => void
}

function TimePickerDropdownItem(props: TimePickerDropdownItemProps) {
  const {selectedTime, time, onClickItem, displayDataType, isOpen} = props
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen && selectedTime === time) {
      setTimeout(() => {
        scrollToSelectedItem('auto')
      }, 0)
    }
  }, [isOpen])

  useEffect(() => {
    if (selectedTime === time && ref.current) {
      scrollToSelectedItem('smooth')
    }
  }, [selectedTime, time])

  const scrollToSelectedItem = (behavior: ScrollBehavior) => {
    if (ref.current) {
      ref.current.parentElement?.scroll({
        top: ref.current.offsetTop - TIME_PICKER_MARGIN_TOP,
        behavior,
      })
    }
  }

  return (
    <TimePickerDropdownItemStyle
      ref={ref}
      className={selectedTime === time ? 'active' : ''}
      onClick={onClickItem(time, displayDataType)}
    >
      {time}
    </TimePickerDropdownItemStyle>
  )
}
export default React.memo(TimePickerDropdownItem)
