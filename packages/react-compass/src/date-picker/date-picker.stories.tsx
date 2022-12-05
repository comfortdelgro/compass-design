import {
  DateValue,
  getLocalTimeZone,
  parseDate,
  today,
} from '@internationalized/date'
import {StoryDecorator} from '@ladle/react'
import {I18nProvider, useDateFormatter} from '@react-aria/i18n'
import React, {useState} from 'react'
import {Column} from '../utils'
import DatePicker from './date-picker'

export const Variants: React.FC = () => {
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
