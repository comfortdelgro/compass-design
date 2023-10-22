import * as InternationalizedDate from '../internationalized/date'
import * as i18n from '../internationalized/i18n'
import Calendar from './calendar'

export type {CalendarProps} from './calendar'

Calendar.displayName = 'Calendar'
Calendar.InternationalizedDate = InternationalizedDate
Calendar.I18N = i18n
export default Calendar
