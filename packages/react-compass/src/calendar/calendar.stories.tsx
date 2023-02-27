import {getLocalTimeZone, parseDate, today} from '@internationalized/date'
import {StoryDecorator} from '@ladle/react'
import React from 'react'
import {Column} from '../utils'
import Calendar, {CalendarProps} from './index'

const {useDateFormatter} = Calendar.I18N
export const Variants: React.FC = () => {
  const [date, setDate] = React.useState<CalendarProps>(
    parseDate(today(getLocalTimeZone()).toString()),
  )
  const formatter = useDateFormatter({dateStyle: 'full'})

  return (
    <Column>
      <p>
        <b>Selected date:</b>
        <span style={{marginLeft: '4px'}}>
          {formatter.format(date.toDate(getLocalTimeZone()))}
        </span>
      </p>
      <Calendar
        value={date}
        maxValue={today(getLocalTimeZone())}
        //minValue={today(getLocalTimeZone())}
        onChange={(e) => setDate(e)}
      />
    </Column>
  )
}

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
