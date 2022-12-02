import {StoryDecorator} from '@ladle/react'
import {I18nProvider} from '@react-aria/i18n'
import DateRangepicker from './date-range-picker'

export const Variants: React.FC = () => {
  return (
    <I18nProvider locale='en-SG'>
      <DateRangepicker startDateLabel='Start date' endDateLabel='End date' />
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
