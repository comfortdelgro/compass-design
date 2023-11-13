---
title: Calendar
---

# Calendar

<p class="description">The Calendar represents a calendar system, including information about how days, months, years, eras are organized, and methods to perform arithmetic on dates.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Introduction

While the Gregorian calendar is the most common, many other calendar systems are used throughout the world. The `Calendar` interface represents calendar systems in the `date` library. It encapsulates information such as the number of days in a month, the number of months in a year, and the list of eras in a calendar system, as well as methods that handle correct arithmetic of dates in that calendar system, as well as converting dates between calendar systems. Many implementations of this interface are provided in `date` to handle the most commonly used calendar systems.

As described in the docs for `CalendarDate` and other date objects, you can pass a `Calendar` instance to a date to represent a date in that calendar. Date manipulation follows the rules defined by that calendar system. You can also convert between calendar systems using the `toCalendar` function.

```tsx
import {
  GregorianCalendar,
  HebrewCalendar,
  toCalendar,
} from '@comfortdelgro/react-compass-old'

let hebrewDate = new CalendarDate(new HebrewCalendar(), 5781, 1, 1)
toCalendar(hebrewDate, new GregorianCalendar())
// => new CalendarDate(new GregorianCalendar(), 2020, 9, 19);
```

### Calendar identifiers

While it is possible to construct `Calendar` objects manually, a common usecase is to get a calendar object for a certain locale. Each calendar has an associated string identifier that can be used to retrieve an instance of that calendar using the <TypeLink links={docs.links} type={docs.exports.createCalendar} /> function. A list of supported calendar identifiers is available [below](#implementations).

```tsx
import {createCalendar} from '@comfortdelgro/react-compass-old'

createCalendar('gregory')
createCalendar('hebrew')
createCalendar('japanese')
```

Locales are typically represented as strings such as `en-US`, and represent information about a user's preferences, such as language, script, number format, and calendar. Most of this is automatically determined based on data, but it can also be provided in the locale string itself via a [locale extension](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#adding_a_calendar_in_the_locale_string). For example, the locale `"hi-IN-u-ca-indian"` represents the Hindi language, in the country of India, using the `indian` calendar.

The [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) object can be used to get the calendar identifier from a locale string, either provided explicitly or implicitly. This can then be passed to the `createCalendar` function to retrieve a `Calendar` instance.

```tsx
// Get the calendar identifier for the current user.
let calendarIdentifier = new Intl.DateTimeFormat().resolvedOptions().calendar // e.g. 'gregory'
createCalendar(calendarIdentifier) // new GregorianCalendar()

// Language and region provided, calendar inferred.
let calendarIdentifier = new Intl.DateTimeFormat('th-TH').resolvedOptions()
  .calendar // 'buddhist'
createCalendar(calendarIdentifier) // new BuddhistCalendar()

// Calendar system set explicitly.
let calendarIdentifier = new Intl.DateTimeFormat(
  'hi-IN-u-ca-indian',
).resolvedOptions().calendar // 'indian'
createCalendar(calendarIdentifier) // new IndianCalendar()
```

**Note**: importing `createCalendar` into your project will result in all available calendars being included in your bundle. If you wish to limit the supported calendars to reduce bundle sizes, you can create your own implementation that only imports the desired classes. This way, your bundler can tree-shake the unused calendar implementations.

```tsx
import {
  GregorianCalendar,
  JapaneseCalendar,
} from '@comfortdelgro/react-compass-old'

function createCalendar(identifier) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar()
    case 'japanese':
      return new JapaneseCalendar()
    default:
      throw new Error(`Unsupported calendar ${identifier}`)
  }
}
```

## Classes

| Class                     | Identifier           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------------------ | :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GregorianCalendar         | `'gregory'`          | The Gregorian calendar is the most commonly used calendar system in the world. It supports two eras: BC, and AD. Years always contain 12 months, and 365 or 366 days depending on whether it is a leap year.                                                                                                                                                                                                                                                                                      |
| BuddhistCalendar          | `'buddhist'`         | The Buddhist calendar is the same as the Gregorian calendar, but counts years starting from the birth of Buddha in 543 BC (Gregorian). It supports only one era, identified as 'BE'.                                                                                                                                                                                                                                                                                                              |
| EthiopicCalendar          | `'ethiopic'`         | The Ethiopic calendar system is the official calendar used in Ethiopia. It includes 12 months of 30 days each, plus 5 or 6 intercalary days depending on whether it is a leap year. Two eras are supported: 'AA' and 'AM'.                                                                                                                                                                                                                                                                        |
| EthiopicAmeteAlemCalendar | `'ethioaa'`          | The Ethiopic (Amete Alem) calendar is the same as the modern Ethiopic calendar, except years were measured from a different epoch. Only one era is supported: 'AA'.                                                                                                                                                                                                                                                                                                                               |
| CopticCalendar            | `'coptic'`           | The Coptic calendar is similar to the Ethiopic calendar. It includes 12 months of 30 days each, plus 5 or 6 intercalary days depending on whether it is a leap year. Two eras are supported: 'BCE' and 'CE'.                                                                                                                                                                                                                                                                                      |
| HebrewCalendar            | `'hebrew'`           | The Hebrew calendar is used in Israel and around the world by the Jewish faith. Years include either 12 or 13 months depending on whether it is a leap year. In leap years, an extra month is inserted at month 6.                                                                                                                                                                                                                                                                                |
| IndianCalendar            | `'indian'`           | The Indian National Calendar is similar to the Gregorian calendar, but with years numbered since the Saka era in 78 AD (Gregorian). There are 12 months in each year, with either 30 or 31 days. Only one era identifier is supported: 'saka'.                                                                                                                                                                                                                                                    |
| IslamicCivilCalendar      | `'islamic-civil'`    | The Islamic calendar, also known as the "Hijri" calendar, is used throughout much of the Arab world. The civil variant uses simple arithmetic rules rather than astronomical calculations to approximate the traditional calendar, which is based on sighting of the crescent moon. It uses Friday, July 16 622 CE (Julian) as the epoch. Each year has 12 months, with either 354 or 355 days depending on whether it is a leap year. Learn more about the available Islamic calendars here.     |
| IslamicTabularCalendar    | `'islamic-tbla'`     | The Islamic calendar, also known as the "Hijri" calendar, is used throughout much of the Arab world. The tabular variant uses simple arithmetic rules rather than astronomical calculations to approximate the traditional calendar, which is based on sighting of the crescent moon. It uses Thursday, July 15 622 CE (Julian) as the epoch. Each year has 12 months, with either 354 or 355 days depending on whether it is a leap year. Learn more about the available Islamic calendars here. |
| IslamicUmalquraCalendar   | `'islamic-umalqura'` | The Islamic calendar, also known as the "Hijri" calendar, is used throughout much of the Arab world. The Umalqura variant is primarily used in Saudi Arabia. It is a lunar calendar, based on astronomical calculations that predict the sighting of a crescent moon. Month and year lengths vary between years depending on these calculations. Learn more about the available Islamic calendars here.                                                                                           |
| JapaneseCalendar          | `'japanese'`         | The Japanese calendar is based on the Gregorian calendar, but with eras for the reign of each Japanese emperor. Whenever a new emperor ascends to the throne, a new era begins and the year starts again from 1. Note that eras before 1868 (Gregorian) are not currently supported by this implementation.                                                                                                                                                                                       |
| PersianCalendar           | `'persian'`          | The The Persian calendar is the main calendar used in Iran and Afghanistan. It has 12 months in each year, the first 6 of which have 31 days, and the next 5 have 30 days. The 12th month has either 29 or 30 days depending on whether it is a leap year. The Persian year starts around the March equinox.                                                                                                                                                                                      |
| TaiwanCalendar            | `'roc'`              | The The Taiwanese calendar is the same as the Gregorian calendar, but years are numbered starting from 1912 (Gregorian). Two eras are supported: 'before_minguo' and 'minguo'.                                                                                                                                                                                                                                                                                                                    |

## Properties & Methods

| Name                  | Type                                | Description                                                                                                                                                         |
| :-------------------- | :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| identifier            | `string`                            | Creates a CalendarDate in this calendar from the given Julian day number.                                                                                           |
| fromJulianDay         | `(jd: number): CalendarDate`        | Converts a date in this calendar to a Julian day number.                                                                                                            |
| toJulianDay           | `(date: AnyCalendarDate): number`   | A string identifier for the calendar, as defined by Unicode CLDR.                                                                                                   |
| getDaysInMonth        | `(date: AnyCalendarDate): number  ` | Returns the number of days in the month of the given date.                                                                                                          |
| getMonthsInYear       | `(date: AnyCalendarDate): number`   | Returns the number of months in the year of the given date.                                                                                                         |
| getYearsInEra         | `(date: AnyCalendarDate): number`   | Returns the number of years in the era of the given date.                                                                                                           |
| getEras               | `(): string[]`                      | Returns a list of era identifiers for the calendar.                                                                                                                 |
| getMinimumMonthInYear | `(date: AnyCalendarDate): number`   | Returns the minimum month number of the given date's year. Normally, this is 1, but in some calendars such as the Japanese, eras may begin in the middle of a year. |
| getMinimumDayInMonth  | `(date: AnyCalendarDate): number`   | Returns the minimum day number of the given date's month. Normally, this is 1, but in some calendars such as the Japanese, eras may begin in the middle of a month. |
