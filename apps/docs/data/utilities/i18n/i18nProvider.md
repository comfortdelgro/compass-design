---
title: I18nProvider
---

# I18nProvider

<p class="description">Provides the locale for the application to all child components..</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Introduction

`I18nProvider` allows you to override the default locale as determined by the browser/system setting
with a locale defined by your application (e.g. application setting). This should be done by wrapping
your entire application in the provider, which will be cause all child elements to receive the new locale
information via `useLocale`.

## Properties & Methods

| Method              | Description                                   |
| ------------------- | --------------------------------------------- |
| children: ReactNode | Contents that should have the locale applied. |
| locale: string      | The locale to apply to the children.          |

## Example

```tsx
import {I18nProvider} from '@comfortdelgro/react-compass-old'

function Example() {
  return (
    <I18nProvider locale='fr-FR'>
      <YourApp />
    </I18nProvider>
  )
}
```
