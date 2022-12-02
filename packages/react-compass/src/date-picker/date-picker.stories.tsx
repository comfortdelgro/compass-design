import {getLocalTimeZone, today} from '@internationalized/date'
import {StoryDecorator} from '@ladle/react'
import {I18nProvider} from '@react-aria/i18n'
import DatePicker from './date-picker'

export const Variants: React.FC = () => {
  return (
    <I18nProvider locale='en-SG'>
      <DatePicker label='Date' defaultValue={today(getLocalTimeZone())} />
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
