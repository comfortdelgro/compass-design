---
title: useCollator
---

# useCollator

<p class="description">Provides localized string collation for the current locale. Automatically updates when the locale changes, and handles caching of the collator for performance.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Introduction

`useCollator` wraps a builtin browser [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
object to provide a React Hook that integrates with the i18n system in React Aria. It handles string comparison according to the current locale,
updating when the locale changes, and caching of collators for performance. See the
[Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) docs for
information.

## Properties & Methods

useCollator(options?: Intl.CollatorOptions): Intl.Collator

## Example

This example includes two textfields and compares the values of the two fields using a collator according to the current locale.

```tsx example
import {useCollator} from '@comfortdelgro/react-compass'

function Example() {
  let [first, setFirst] = React.useState('')
  let [second, setSecond] = React.useState('')

  let collator = useCollator()
  let result = collator.compare(first, second)

  return (
    <>
      <div>
        <label htmlFor='first-string'>First string</label>
        <input
          id='first-string'
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <label htmlFor='second-string'>Second string</label>
        <input
          id='second-string'
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </div>
      <p>
        {result === 0
          ? 'The strings are the same'
          : result < 0
          ? 'First comes before second'
          : 'Second comes before first'}
      </p>
    </>
  )
}
```
