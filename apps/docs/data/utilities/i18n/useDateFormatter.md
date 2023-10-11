---
title: useDateFormatter
---

# useDateFormatter

<p class="description">Provides localized date formatting for the current locale. Automatically updates when the locale changes, and handles caching of the date formatter for performance.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Introduction

`useDateFormatter` wraps a builtin browser [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
object to provide a React Hook that integrates with the i18n system in React Aria. It handles formatting dates for the current locale,
updating when the locale changes, and caching of date formatters for performance. See the
[Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) docs for
information on formatting options.

## Properties & Methods

useDateFormatter(options?: DateFormatterOptions): DateFormatter

## Example

This example displays the current date for two locales: USA, and Russia. Two instances of the `CurrentDate` component are rendered,
using the [I18nProvider](I18nProvider.html) to specify the locale to display.

```tsx example
import {I18nProvider, useDateFormatter} from '@comfortdelgro/react-compass'

function CurrentDate() {
  let formatter = useDateFormatter()

  return <p>{formatter.format(new Date())}</p>
}

;<>
  <I18nProvider locale='en-US'>
    <CurrentDate />
  </I18nProvider>
  <I18nProvider locale='ru-RU'>
    <CurrentDate />
  </I18nProvider>
</>
```
