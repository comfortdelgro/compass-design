# Theming

<p class="description">Customize React Compass with your theme. You can change the colors, the typography and much more.</p>

## Theme provider

If you wish to customize the theme, you need to use the ThemeProvider component in order to inject a theme into your application. However, this is optional Compass Design components come with a default theme.

`ThemeProvider` relies on the context feature of React to pass the theme down to the components, so you need to make sure that ThemeProvider is a parent of the components you are trying to customize. You can learn more about this in the API section.

## Theme configuration variables

Changing the theme configuration variables is the most effective way to match Compass Design to your needs. The following sections cover the most important theme variables:

- `colors`
- `spacings`
- `fonts`
- `fontSizes`
- `lineHeights`
- `fontWeights`
- `borderWidths`
- `radius`
- `transitions`

You can see [theme configuration variables here](https://github.com/comfortdelgro/compass-design/blob/main/packages/react-compass/src/theme/theme.ts)

## Custom variables

When using Compass Design's theme, it can be convenient to add additional variables to the theme so you can use them everywhere. For instance:

```js
import createTheme from '@comfortdelgro/react-compass/theme/theme'

export const lightThemeCustom = createTheme('light-theme-custom', {
  colors: {
    primaryText: 'red',
  },
})

export const darkThemeCustom = createTheme('dark-theme-custom', {
  colors: {
    primaryText: 'blue',
  },
})
```

## ThemeProvider

This component takes a theme prop and applies it to the entire React tree that it is wrapping around. It should preferably be used at _the root of your component tree_.

```js
import {ThemeProvider} from '@comfortdelgro/react-compass'
```

**Props:**

| Name             | Type          | Default | Description                         |
| :--------------- | :------------ | :------ | :---------------------------------- |
| lightThemeCustom | `createTheme` | —       | Customize theme for light theme     |
| darkThemeCustom  | `createTheme` | —       | Customize theme for dark theme      |
| changeBy         | `any`         | —       | State to determine the theme change |
| isCSR            | `boolean`     | false   | Determine if CSR or SSR             |

---

### Example

:::info
**⚠️ Infor**

You can see example with [Next.js](https://github.com/comfortdelgro/compass-design/tree/71a00c61fdc3b5dad6f76c9e82844c981a19ad04/examples/create-next-app)
:::

```js
function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider
      lightThemeCustom={lightThemeCustom}
      darkThemeCustom={darkThemeCustom}
    >
      {children}
    </ThemeProvider>
  )
}
```

## Dark mode

Compass Design comes with two palette modes: light (the default) and dark.

### Example

:::info
**⚠️ Infor**

You can see example with [Next.js](https://github.com/comfortdelgro/compass-design/tree/71a00c61fdc3b5dad6f76c9e82844c981a19ad04/examples/create-next-app)
:::

```js
enum ETheme {
  Light = 'light',
  Dark = 'dark',
}

function MyApp({Component, pageProps}: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<ETheme>(ETheme.Light)
  const handleOnChangeTheme = (value: string) => {
    setIsDarkTheme(value as ETheme)
  }

  return (
    <>
      <ThemeProvider
        changeBy={isDarkTheme}
      >
        <Box
          css={{
            backgroundColor: '$background',
          }}
        >
          <Box>
            <Radio.Group
              onChange={handleOnChangeTheme}
              value={isDarkTheme}
            >
              <Radio label='Light theme' value={ETheme.Light} />
              <Radio label='Dark theme' value={ETheme.Dark} />
            </Radio.Group>
          </Box>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  )
}
```

### Hooks

We can get the color code using the hook `useColors`

Example:

```js
export const Demo: React.FC = () => {
  const colors = useColors()
  return (
    <Button
      css={{
        backgroundColor: colors.cdgBlue140,
        color: colors.whiteText,
      }}
    >
      Button
    </Button>
  )
}
```

We can get the current theme using the hook `useCurrentTheme` and we also can using `useIsLightTheme` or `useIsDarkTheme`

Example:

```js
export const Demo: React.FC = () => {
  const currentTheme = useCurrentTheme()
  const isLightTheme = useIsLightTheme()
  const isDarkTheme = useIsDarkTheme()
  return (
    <>
      <Typography.Header variant='header4'>
        Current theme: {currentTheme}
      </Typography.Header>
      <Typography.Header variant='header4'>
        Is light theme: {String(isLightTheme)}
      </Typography.Header>
      <Typography.Header variant='header4'>
        Is dark theme: {String(isDarkTheme)}
      </Typography.Header>
    </>
  )
}
```

<!-- For static  -->

<!-- ## Theme provider

If you wish to customize the theme, you need to use the ThemeProvider component in order to inject a theme into your application. However, this is optional Compass Design components come with a default theme.

`ThemeProvider` relies on the context feature of React to pass the theme down to the components, so you need to make sure that ThemeProvider is a parent of the components you are trying to customize. You can learn more about this in the API section.

## Theme configuration variables

Changing the theme configuration variables is the most effective way to match Compass Design to your needs. The following sections cover the most important theme variables:

- `colors`
- `spacings`
- `fonts`
- `fontSizes`
- `lineHeights`
- `fontWeights`
- `borderWidths`
- `radius`
- `transitions`

## Custom variables

You can customize variables by overriding them in the global css file, below is an example:

```css
:root {
  --cdg-color-danger: yellow;
}

[data-cdg-theme='dark'] {
  --cdg-color-danger: green;
}
```

## ThemeProvider

This component takes a theme prop and applies it to the entire React tree that it is wrapping around. It should preferably be used at _the root of your component tree_.

```js
import {ThemeProvider} from '@comfortdelgro/react-compass'
```

**Props:**

| Name     | Type      | Default | Description                         |
| :------- | :-------- | :------ | :---------------------------------- |
| changeBy | `any`     | —       | State to determine the theme change |
| isCSR    | `boolean` | false   | Determine if CSR or SSR             |

---

## Dark mode

Compass Design comes with two palette modes: light (the default) and dark.

### Example

```js
enum ETheme {
  Light = 'light',
  Dark = 'dark',
}

function MyApp({Component, pageProps}: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<ETheme>(ETheme.Light)
  const handleOnChangeTheme = (value: string) => {
    setIsDarkTheme(value as ETheme)
  }

  return (
    <>
      <ThemeProvider
        changeBy={isDarkTheme}
      >
        <Box>
          <Box>
            <Radio.Group
              onChange={handleOnChangeTheme}
              value={isDarkTheme}
            >
              <Radio label='Light theme' value={ETheme.Light} />
              <Radio label='Dark theme' value={ETheme.Dark} />
            </Radio.Group>
          </Box>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  )
}
```

### Hooks

We can get the color code using the hook `useColors`

Example:

```js
export const Demo: React.FC = () => {
  const colors = useColors()
  return (
    <Button
      css={{
        backgroundColor: colors.cdgBlue140,
        color: colors.whiteText,
      }}
    >
      Button
    </Button>
  )
}
```

We can get the current theme using the hook `useCurrentTheme` and we also can using `useIsLightTheme` or `useIsDarkTheme`

Example:

```js
export const Demo: React.FC = () => {
  const currentTheme = useCurrentTheme()
  const isLightTheme = useIsLightTheme()
  const isDarkTheme = useIsDarkTheme()
  return (
    <>
      <Typography.Header variant='header4'>
        Current theme: {currentTheme}
      </Typography.Header>
      <Typography.Header variant='header4'>
        Is light theme: {String(isLightTheme)}
      </Typography.Header>
      <Typography.Header variant='header4'>
        Is dark theme: {String(isDarkTheme)}
      </Typography.Header>
    </>
  )
}
``` -->
