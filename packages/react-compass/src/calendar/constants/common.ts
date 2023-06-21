export const EPOCH = 1721426 // 001/01/03 Julian C.E.

export const daysInMonth = {
  standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
}

export const MIN_YEAR = 1900
export const MAX_YEAR = 2999

export const nonTextInputTypes = new Set([
  'checkbox',
  'radio',
  'range',
  'color',
  'file',
  'image',
  'button',
  'submit',
  'reset',
])

export const EDITABLE_SEGMENTS = {
  year: true,
  month: true,
  day: true,
  hour: true,
  minute: true,
  second: true,
  dayPeriod: true,
  era: true,
}

export const PAGE_STEP = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15,
}

export const TYPE_MAPPING = {
  dayperiod: 'dayPeriod',
}

export const intlMessage = {
  'en-US': {
    previous: 'Previous',
    next: 'Next',
    selectedDateDescription: 'Selected Date: {date}',
    selectedRangeDescription: 'Selected Range: {dateRange}',
    todayDate: 'Today, {date}',
    todayDateSelected: 'Today, {date} selected',
    dateSelected: '{date} selected',
    startRangeSelectionPrompt: 'Click to start selecting date range',
    finishRangeSelectionPrompt: 'Click to finish selecting date range',
    calendar: 'Calendar',
    minimumDate: 'First available date',
    maximumDate: 'Last available date',
    dateRange: '{startDate} to {endDate}',
    era: 'era',
    year: 'year',
    month: 'month',
    day: 'day',
    hour: 'hour',
    minute: 'minute',
    second: 'second',
    dayPeriod: 'AM/PM',
    startDate: 'Start Date',
    endDate: 'End Date',
    weekday: 'day of the week',
    timeZoneName: 'time zone',
    selectedTimeDescription: 'Selected Time: {time}',
    Empty: 'Empty',
  },
}
