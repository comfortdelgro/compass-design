import React, {useState} from 'react'
import Typography from '../typography'
import {Column} from '../utils'
import MonthYearPicker from './month-year-picker'

export const Default: React.FC = () => {
  const [date, setDate] = useState<{month: number; year: number}>({
    month: 7,
    year: 1989,
  })
  const handleChange = (month: number, year: number) => {
    setDate({month, year})
  }
  return (
    <Column>
      <Typography.Header>Default</Typography.Header>
      <MonthYearPicker
        month={date.month}
        year={date.year}
        onChange={handleChange}
      />
      <Typography.Body css={{textAlign: 'center'}}>
        {date.month + 1} - {date.year}
      </Typography.Body>
    </Column>
  )
}
