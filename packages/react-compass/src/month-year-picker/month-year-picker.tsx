import {TrackDetails} from 'keen-slider/react'
import React, {HTMLAttributes} from 'react'
import Box from '../box'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import StyledMonthYearPicker from './month-year-picker.styles'
import Wheel from './wheel'

const MIN_YEAR = 1900

const generateYearArray = () => {
  const currentYear = new Date().getFullYear()
  const startYear = MIN_YEAR
  const yearArray = []

  for (let year = startYear; year <= currentYear; year++) {
    yearArray.push(year)
  }

  return yearArray
}
interface Props extends StyledComponentProps {
  month?: number
  year?: number
  onChange?: (month: number, year: number) => void
}
export type MonthYearPickerProps = Props &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

const MonthYearPicker = React.forwardRef<HTMLDivElement, MonthYearPickerProps>(
  (props, ref) => {
    const {month = 0, year = 0, onChange, css = {}} = props
    const pickerRef = useDOMRef(ref)

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const years = generateYearArray()
    const formatMonth = (_relative: number) => {
      return monthNames[_relative] as string
    }

    const formatYear = (_relative: number) => {
      return years[_relative] as number
    }

    const handleMonthChange = (data: TrackDetails) => {
      onChange?.(data.abs, year)
    }
    const handleYearChange = (data: TrackDetails) => {
      onChange?.(month, data.abs + MIN_YEAR)
    }
    return (
      <StyledMonthYearPicker
        ref={pickerRef}
        className='cdg-month-year-picker'
        css={css}
      >
        <Box
          css={{height: '168px', width: '50%', minWidth: '112px'}}
          className='cdg-month-year-picker-left'
        >
          <Wheel
            length={12}
            width={145}
            defaultValue={month > 11 || month < 0 ? 0 : month}
            setValue={formatMonth}
            onChange={handleMonthChange}
          />
        </Box>
        <Box
          css={{height: '168px', width: '50%', minWidth: '112px'}}
          className='cdg-month-year-picker-right'
        >
          <Wheel
            length={new Date().getFullYear() + 1 - MIN_YEAR}
            width={50}
            perspective='right'
            defaultValue={year - MIN_YEAR}
            setValue={formatYear}
            onChange={handleYearChange}
          />
        </Box>
      </StyledMonthYearPicker>
    )
  },
)

export default MonthYearPicker
