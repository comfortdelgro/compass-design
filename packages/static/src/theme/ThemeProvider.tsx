import React, {createContext, useCallback, useEffect, useState} from 'react'

export enum ETheme {
  Light = 'light',
  Dark = 'dark',
}
type ColourMode = ETheme | undefined
type ColourModeProviderType = [ColourMode, (newMode: ETheme) => void]
type ThemeProviderProps = {
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
  changeBy,
  isCSR,
}: ThemeProviderProps): ColourModeProviderType {
  const [colorMode, setColorMode] = useState<ETheme>(ETheme.Light)
  const [body, setBody] = useState<HTMLElement | undefined>(
    isCSR ? document.body : undefined,
  )

  const savedColorMode = getSavedColorModePreference()

  const applyColorMode = useCallback(
    (newMode: ETheme) => {
      body?.setAttribute('data-cdg-theme', newMode)
      setColorMode(newMode)
      saveColorMode(newMode)
    },
    [body],
  )

  useEffect(() => {
    applyColorMode(savedColorMode)
  }, [applyColorMode, savedColorMode])

  useEffect(() => {
    if (!body) {
      setBody(document.body)
    }
    if (!!changeBy && (changeBy === ETheme.Light || changeBy === ETheme.Dark)) {
      applyColorMode(changeBy as ETheme)
    }
  }, [changeBy, body, applyColorMode])

  return [colorMode, applyColorMode]
}

const ThemeStaticProvider = ({
  children,
  changeBy,
  isCSR = false,
}: ThemeProviderProps) => {
  const [colorMode, applyColorMode] = useColorMode({
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

export default ThemeStaticProvider
