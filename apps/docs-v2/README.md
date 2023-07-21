# Compass design docs

Compass design docs are documentation for using compass design library

## Installation

```bash
pnpm install
```

## Usage

### Create a new page

#### 1. Create route

You need to create a `.tsx` file in the `apps/docs-v2/pages` folder with the file name being the path to the page.

Inside the file we need to import `MarkdownDocs` and the markdown file path.

> Note that there will be an extra `?@comfortdelgro/compass-design` at the end of the link.

Example

```tsx
import MarkdownDocs from 'components/common/MarkdownDocs'
import * as pageProps from 'docs/data/components/button/button.md?@comfortdelgro/compass-design'

export default function Page() {
  return <MarkdownDocs {...pageProps} />
}
```

Also you need to add the path in the file `apps/docs-v2/constants/routes.ts` to display in the sidenav

### 2. Update markdown file

You need to write the title and description at the top of the file

Example

```md
# Button

<p class="description">Buttons allow users to take actions, and make choices, with a single tap.</p>
```

#### 2.1 Add demo

To add a demo, you need to create a `.tsx` file in the same folder as the `.md` file and import by `{{"demo": "[component_path].tsx"}}`

To add preview for demo, you need to create file `[component_path].tsx.preview`

Example

```md
{{"demo": "ButtonSize.tsx"}}
```

![image](https://github.com/comfortdelgro/compass-design/assets/128688086/c0af5e7a-f0bb-4da8-a925-dc516ae304e9)


#### 2.2 Add component

To add a demo, you need to create a `.tsx` file and import by `{{"component": "[component_path].tsx"}}`

Example

```md
{{"component": "components/common/ComponentLinkHeader.tsx"}}
```

#### 2.3 Add alert

Example

```md
:::info
**⚠️ Infor**

Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
:::

:::warning
**⚠️ Warning**

Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
:::

:::error
**⚠️ Error**

Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
:::

:::success
**⚠️ Success**

Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
:::
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
