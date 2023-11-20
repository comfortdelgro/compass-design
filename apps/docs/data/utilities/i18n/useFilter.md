---
title: useFilter
---

# useFilter

<p class="description">Provides localized string search functionality that is useful for filtering or matching items in a list.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Introduction

`useFilter` provides functions for filtering or searching based on substring matches. The builtin JavaScript
string methods `startsWith`, `endsWith`, and `includes` could be used for this, but do not implement locale
sensitive matching. `useFilter` provides options to allow ignoring case, diacritics, and Unicode normalization forms,
which are implemented according to locale-specific rules. It automatically uses the current locale set by the application,
either via the default browser language or via the [I18nProvider](I18nProvider.html).

## API

useFilter(options?: Intl.CollatorOptions): Filter

## Interface

| Method                                                 | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ |
| startsWith(string: string, substring: string): boolean | Contents that should have the locale applied.          |
| startsWith(string: string, substring: string): boolean | The locale to apply to the children.                   |
| startsWith(string: string, substring: string): boolean | startsWith(string: string, substring: string): boolean |

## Example

The following example implements a filterable list using a `contains` matching strategy that ignores both case
and diacritics.

```tsx example
import {useFilter} from '@comfortdelgro/react-compass-old'

function Example() {
  const composers = [
    'Wolfgang Amadeus Mozart',
    'Johann Sebastian Bach',
    'Ludwig van Beethoven',
    'Claude Debussy',
    'George Frideric Handel',
    'Frédéric Chopin',
    'Johannes Brahms',
    'Pyotr Ilyich Tchaikovsky',
    'Antonín Dvořák',
    'Felix Mendelssohn',
    'Béla Bartók',
    'Niccolò Paganini',
  ]

  let {contains} = useFilter({
    sensitivity: 'base',
  })

  let [value, setValue] = React.useState('')
  let matchedComposers = composers.filter((composer) =>
    contains(composer, value),
  )

  return (
    <>
      <label htmlFor='search-input'>Filter: </label>
      <input
        type='search'
        id='search-input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul style={{height: 300}}>
        {matchedComposers.map((composer, i) => (
          <li key={i}>{composer}</li>
        ))}
      </ul>
    </>
  )
}
```
