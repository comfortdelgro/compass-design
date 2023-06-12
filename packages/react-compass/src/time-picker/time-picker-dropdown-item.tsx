import React, {useEffect, useRef} from 'react'
import {TimePickerDropdownItemStyle} from './time-picker.styles'
import {SelectedKey} from './types'

interface TimePickerDropdownItemProps {
  selectedDisplayList: Record<SelectedKey, string | number | null>
  selectedTime: string | number | null
  time: string
  isOpen?: boolean
  displayDataType: SelectedKey
  onClickItem: (time: string, type: SelectedKey) => () => void
}

const MARGIN_TOP = 4

export default function TimePickerDropdownItem(
  props: TimePickerDropdownItemProps,
) {
  const {selectedTime, time, onClickItem, displayDataType, isOpen} = props
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      if (selectedTime === time) {
        setTimeout(() => {
          if (ref.current) {
            ref.current.parentElement?.scroll({
              top: ref.current.offsetTop - MARGIN_TOP,
              behavior: 'auto',
            })
          }
        }, 0)
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (selectedTime === time && ref.current) {
      ref.current.parentElement?.scroll({
        top: ref.current.offsetTop - MARGIN_TOP,
        behavior: 'smooth',
      })
    }
  }, [selectedTime, time])

  return (
    <TimePickerDropdownItemStyle
      ref={ref}
      className={selectedTime === time ? 'active' : ''}
      onClick={onClickItem(time.toString().padStart(2, '0'), displayDataType)}
    >
      {time}
    </TimePickerDropdownItemStyle>
  )
}
