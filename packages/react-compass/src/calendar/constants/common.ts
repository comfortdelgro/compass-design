export const EPOCH = 1721426 // 001/01/03 Julian C.E.

export const daysInMonth = {
  standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
}

export const textCalendar = {
  previous: 'Previous',
  next: 'Next',
  selectedDateDescription: 'Selected Date: {date}',
  selectedRangeDescription: 'Selected Range: {dateRange}',
  todayDate: 'Today, {date}',
  todayDateSelected: 'Today, {date} selected',
  dateSelected: '{date} selected',
  startRangeSelectionPrompt: 'Click to start selecting date range',
  finishRangeSelectionPrompt: 'Click to finish selecting date range',
  minimumDate: 'First available date',
  maximumDate: 'Last available date',
  dateRange: '{startDate} to {endDate}',
}
