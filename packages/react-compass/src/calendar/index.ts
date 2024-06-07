import * as InternationalizedDate from '../internationalized/date'
import * as i18n from '../internationalized/i18n'
import _Calendar from './calendar'

export type {CalendarProps} from './calendar'

const Calendar = _Calendar as typeof _Calendar & {
  InternationalizedDate: typeof InternationalizedDate
  I18N: typeof i18n
}

Calendar.displayName = 'Calendar'
Calendar.InternationalizedDate = InternationalizedDate
Calendar.I18N = i18n
export default Calendar
