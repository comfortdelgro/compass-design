import {useEffect, useState} from 'react'
import {ETheme} from './ThemeProvider'

export function useCurrentTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  function updateCurrentTheme() {
    setIsDarkTheme(document.body.classList.contains('dark-theme'))
  }

  useEffect(() => {
    updateCurrentTheme()
    const mutationObserver = new MutationObserver(updateCurrentTheme)
    mutationObserver.observe(document.body, {attributes: true})
  }, [])

  return isDarkTheme ? ETheme.Dark : ETheme.Light
}

export function useIsLightTheme() {
  const currentTheme: ETheme = useCurrentTheme()
  return currentTheme === ETheme.Light
}

export function useIsDarkTheme() {
  const currentTheme: ETheme = useCurrentTheme()
  return currentTheme === ETheme.Dark
}
