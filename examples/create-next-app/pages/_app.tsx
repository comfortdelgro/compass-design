import {Box, Button, Radio, ThemeProvider} from '@comfortdelgro/react-compass'
import {theme} from '@comfortdelgro/react-compass/theme'
import createTheme from '@comfortdelgro/react-compass/theme/theme'
import type {AppProps} from 'next/app'
import {useState} from 'react'
import '../styles/globals.css'

enum ETheme {
  Light = 'light',
  Dark = 'dark',
}

const lightThemeCustom = createTheme('light-theme-custom', {
  colors: {
    primaryText: 'red !important',
  },
})

const darkThemeCustom = createTheme('dark-theme-custom', {
  colors: {
    primaryText: 'blue !important',
  },
})

function MyApp({Component, pageProps}: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<ETheme>(ETheme.Light)
  const handleOnchangeTheme = (value: string) => {
    setIsDarkTheme(value as ETheme)
  }

  return (
    <>
      <ThemeProvider
        changeBy={isDarkTheme}
        // @ts-ignore
        // lightThemeCustom={lightThemeCustom}
        // @ts-ignore
        // darkThemeCustom={darkThemeCustom}
      >
        <Box
          css={{
            backgroundColor: '$background',
          }}
        >
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Radio.Group
              css={{width: '540px'}}
              onChange={handleOnchangeTheme}
              value={isDarkTheme}
            >
              <Radio label='Light theme' value={ETheme.Light} />
              <Radio label='Dark theme' value={ETheme.Dark} />
            </Radio.Group>
          </Box>
          <Button onClick={() => console.log(theme)}>Test</Button>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default MyApp
