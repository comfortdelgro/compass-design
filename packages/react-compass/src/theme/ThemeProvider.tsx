import React, {createContext, useEffect, useState} from 'react'
import {theme} from './stitches.config'
import {darkTheme} from './theme'

export enum ETheme {
  Light = 'light',
  Dark = 'dark',
}
type ColourMode = ETheme | undefined
type ColourModeProviderType = [ColourMode, (newMode: ETheme) => void]
type ThemeProviderProps = {
  lightThemeCustom?: typeof theme | undefined
  darkThemeCustom?: typeof theme | undefined
  changeBy?: unknown | undefined
  children?: React.ReactNode
  isCSR?: boolean
}

type ProviderType = {
  colorMode: ColourMode
  applyColorMode?: (theme: ETheme) => void
}

export const ColourModeContext = createContext<ProviderType>({
  colorMode: ETheme.Light,
})

const saveColorMode = (newMode: ColourMode) => {
  try {
    if (typeof newMode === 'string' && typeof window !== 'undefined') {
      window.localStorage.setItem('color-mode', newMode)
    }
  } catch (e) {
    console.warn(e)
  }
}

const getSavedColorModePreference = (): ETheme => {
  try {
    if (typeof window !== 'undefined') {
      const savedMode = window.localStorage.getItem('color-mode')
      if (typeof savedMode === 'string') return savedMode as ETheme
    }
  } catch (e) {
    console.warn(e)
    return ETheme.Light
  }
  return ETheme.Light
}

function useColorMode({
  lightThemeCustom,
  darkThemeCustom,
  changeBy,
  isCSR,
}: ThemeProviderProps): ColourModeProviderType {
  const [colorMode, setColorMode] = useState<ETheme>(ETheme.Light)
  const [body, setBody] = useState<HTMLElement | undefined>(
    isCSR ? document.body : undefined,
  )

  const savedColorMode = getSavedColorModePreference()

  const applyColorMode = (newMode: ETheme) => {
    if (newMode === ETheme.Light) {
      lightThemeCustom?.className &&
        body?.classList.add(lightThemeCustom?.className)
      darkThemeCustom?.className &&
        body?.classList.remove(darkThemeCustom?.className)
      body?.classList.remove(darkTheme.className)
    } else {
      body?.classList.add(darkTheme.className) //
      darkThemeCustom?.className &&
        body?.classList.add(darkThemeCustom?.className)
      lightThemeCustom?.className &&
        body?.classList.remove(lightThemeCustom?.className)
    }
    setColorMode(newMode)
    saveColorMode(newMode)
  }

  useEffect(() => {
    applyColorMode(savedColorMode)
  }, [savedColorMode])

  useEffect(() => {
    if (!body) {
      setBody(document.body)
    }
    if (!!changeBy && (changeBy === ETheme.Light || changeBy === ETheme.Dark)) {
      applyColorMode(changeBy as ETheme)
    }
  }, [changeBy, body])

  return [colorMode, applyColorMode]
}

const ThemeProvider = ({
  children,
  lightThemeCustom,
  darkThemeCustom,
  changeBy,
  isCSR = false,
}: ThemeProviderProps) => {
  const [colorMode, applyColorMode] = useColorMode({
    lightThemeCustom,
    darkThemeCustom,
    changeBy,
    isCSR,
  })
  return (
    <ColourModeContext.Provider
      value={{
        colorMode: colorMode,
        applyColorMode: applyColorMode,
      }}
    >
      {children}
    </ColourModeContext.Provider>
  )
}

export default ThemeProvider
