import {CalendarDate} from '../../internationalized/date'

export interface AnyCalendarDate {
  readonly calendar: Calendar
  readonly era: string
  readonly year: number
  readonly month: number
  readonly day: number
  copy(): this
}

export interface AnyTime {
  readonly hour: number
  readonly minute: number
  readonly second: number
  readonly millisecond: number
  copy(): this
}

export interface AnyDateTime extends AnyCalendarDate, AnyTime {}

export interface Calendar {
  identifier: string

  fromJulianDay(jd: number): CalendarDate
  toJulianDay(date: AnyCalendarDate): number

  getDaysInMonth(date: AnyCalendarDate): number
  getMonthsInYear(date: AnyCalendarDate): number
  getYearsInEra(date: AnyCalendarDate): number
  getEras(): string[]

  getMinimumMonthInYear?(date: AnyCalendarDate): number

  getMinimumDayInMonth?(date: AnyCalendarDate): number

  balanceDate?(date: AnyCalendarDate): void
  balanceYearMonth?(date: AnyCalendarDate, previousDate: AnyCalendarDate): void
  constrainDate?(date: AnyCalendarDate): void
  isInverseEra?(date: AnyCalendarDate): boolean
}

export interface DateDuration {
  years?: number
  months?: number
  weeks?: number
  days?: number
}

export interface TimeDuration {
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
}

export interface DateTimeDuration extends DateDuration, TimeDuration {}

export interface DateFields {
  era?: string
  year?: number
  month?: number
  day?: number
}

export interface TimeFields {
  hour?: number
  minute?: number
  second?: number
  millisecond?: number
}

export type DateField = keyof DateFields
export type TimeField = keyof TimeFields

export type Disambiguation = 'compatible' | 'earlier' | 'later' | 'reject'

export interface CycleOptions {
  round?: boolean
}

export interface CycleTimeOptions extends CycleOptions {
  hourCycle?: 12 | 24
}
