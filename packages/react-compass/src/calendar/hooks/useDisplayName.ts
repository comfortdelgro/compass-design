// Reference: https://github.com/adobe/react-spectrum/blob/98cad3f064c5302c04a1140d12a2cacc3ee921a2/packages/%40react-aria/datepicker/src/useDisplayNames.ts
import {LocalizedStringDictionary} from '@internationalized/string'
import {useLocale} from '@react-aria/i18n'
import {useMemo} from 'react'
import {intlMessage} from '../constants/common'

type Field =
  | 'era'
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'dayPeriod'
  | 'timeZoneName'
  | 'weekday'

interface DisplayNames {
  of(field: Field): string
}

export function useDisplayNames(): DisplayNames {
  const {locale} = useLocale()
  return useMemo(() => {
    try {
      return new Intl.DisplayNames(locale, {
        type: 'dateTimeField',
      }) as DisplayNames
    } catch (err) {
      return new DisplayNamesPolyfill(locale) as DisplayNames
    }
  }, [locale])
}

class DisplayNamesPolyfill implements DisplayNames {
  private locale: string
  private dictionary: LocalizedStringDictionary<Field>

  constructor(locale: string) {
    this.locale = locale
    this.dictionary = new LocalizedStringDictionary<Field, string>(intlMessage)
  }

  of(field: Field): string {
    return this.dictionary.getStringForLocale(field, this.locale)
  }
}
