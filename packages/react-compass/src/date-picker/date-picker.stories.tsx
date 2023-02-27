import {
  DateValue,
  getLocalTimeZone,
  parseDate,
  today,
} from '@internationalized/date'
import {StoryDecorator} from '@ladle/react'
import React, {useState} from 'react'
import {Column} from '../utils'
import DatePicker from './index'

const {I18nProvider, useDateFormatter} = DatePicker.I18N

export const Variants: React.FC = () => {
  const MyDate = today(getLocalTimeZone())
  return (
    <I18nProvider locale='en-SG'>
      <Column>
        <h3>Basic</h3>
        <DatePicker
          isReadOnly
          label='Date'
          defaultValue={today(getLocalTimeZone())}
        />
        <h3>Disabled</h3>
        <DatePicker
          isDisabled
          label='Date'
          defaultValue={today(getLocalTimeZone())}
        />
        <h3>Invalid</h3>
        <DatePicker
          isInvalid
          label='Date'
          defaultValue={today(getLocalTimeZone())}
        />
        <h3>MinValue</h3>
        <DatePicker
          label='Date'
          defaultValue={today(getLocalTimeZone())}
          minValue={MyDate}
        />
        <h3>MaxValue</h3>
        <DatePicker
          label='Date'
          defaultValue={today(getLocalTimeZone())}
          maxValue={today(getLocalTimeZone())}
        />
      </Column>
    </I18nProvider>
  )
}

export const Controlled: React.FC = () => {
  const [date, setDate] = useState<DateValue>(
    parseDate(today(getLocalTimeZone()).toString()),
  )

  const formatter = useDateFormatter({dateStyle: 'full'})

  return (
    <I18nProvider locale='en-SG'>
      <p>
        <b>Selected date:</b>
        <span style={{marginLeft: '4px'}}>
          {formatter.format(date.toDate(getLocalTimeZone()))}
        </span>
      </p>
      <DatePicker
        label='Date'
        value={date}
        defaultValue={today(getLocalTimeZone())}
        onChange={setDate}
      />
    </I18nProvider>
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
