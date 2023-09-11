import {Calendar, isWeekend, useLocale} from '@comfortdelgro/react-compass'

function ValidatedCalendar() {
  const {locale} = useLocale()
  return <Calendar isDateUnavailable={(date) => isWeekend(date, locale)} />
}

export default ValidatedCalendar
