import {GlobalProvider} from '@ladle/react'
import {createTheme} from '@stitches/react'
import React from 'react'
import Preflight from '../src/preflight'
import ThemeProvider from '../src/theme/ThemeProvider'

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

export const Provider: GlobalProvider = ({children, globalState}) => {
  return (
    <React.Fragment>
      <ThemeProvider
        changeBy={globalState.theme}
        // @ts-ignore
        // lightThemeCustom={lightThemeCustom}
        // // @ts-ignore
        // darkThemeCustom={darkThemeCustom}
        isCSR={true}
      >
        <Preflight />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
