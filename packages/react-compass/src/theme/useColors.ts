import {useEffect, useState} from 'react'
import {Colors, lightThemeColors} from './theme'

export function useColors() {
  const [colorsConfig, setColorsConfig] = useState<Colors>(lightThemeColors)

  function updateColorsConfig() {
    const configs: Record<string, string> = {}
    const documentStyle = getComputedStyle(document.body)
    Object.keys(lightThemeColors).forEach(
      (key) =>
        (configs[key] = documentStyle.getPropertyValue(`--cdg-color-${key}`)),
    )
    setColorsConfig(configs as Colors)
  }

  useEffect(() => {
    updateColorsConfig()
    const mutationObserver = new MutationObserver(updateColorsConfig)
    mutationObserver.observe(document.body, {attributes: true})
  }, [])

  return colorsConfig
}
