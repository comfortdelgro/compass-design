/* eslint-disable @typescript-eslint/unbound-method */
import {getLocalTimeZone, today} from '@internationalized/date'
import {useDatePicker} from '@react-aria/datepicker'
import {useDatePickerState} from '@react-stately/datepicker'
import React from 'react'
import Button from '../button'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import Calendar from './calendar'
import {DateField} from './components'
import Dialog from './components/dialog'
import Popover from './components/popover'
import {StyledDatepicker} from './date-picker.style'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  label?: string
}

const Datepicker = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const state = useDatePickerState(props)

  const calendarRef = useDOMRef(ref)

  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, calendarRef)

  return (
    <StyledDatepicker>
      <div {...labelProps}>{props.label}</div>
      <div {...groupProps} ref={calendarRef}>
        <DateField {...fieldProps} />
        <Button {...buttonProps}>🗓</Button>
      </div>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={calendarRef}
          placement='bottom start'
        >
          <Dialog {...dialogProps}>
            <Calendar
              defaultFocusedValue={today(getLocalTimeZone())}
              {...calendarProps}
            />
          </Dialog>
        </Popover>
      )}
    </StyledDatepicker>
  )
})

export default Datepicker
