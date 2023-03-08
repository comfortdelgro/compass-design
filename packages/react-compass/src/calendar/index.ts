import * as InternationalizedDate from '@internationalized/date'
import * as i18n from '@react-aria/i18n'
import Calendar from './calendar'

export type {CalendarProps, DateValue} from './calendar'

Calendar.displayName = 'Calendar'
Calendar.InternationalizedDate = InternationalizedDate
Calendar.I18N = i18n

export default Calendar
