import {useEffect, useState} from 'react'
import {config, theme} from './stitches.config'

export function useColors() {
  const [colorsConfig, setColorsConfig] = useState<Record<string, string>>({})

  function updateColorsConfig() {
    const configs: Record<string, string> = {}
    Object.keys(theme.colors).forEach(
      (key) =>
        (configs[key] = getComputedStyle(document.body).getPropertyValue(
          `--colors-${key}`,
        )),
    )
    setColorsConfig(configs)
  }

  useEffect(() => updateColorsConfig(), [])

  const mutationObserver = new MutationObserver(updateColorsConfig)

  mutationObserver.observe(document.body, {attributes: true})

  console.log(colorsConfig)

  return colorsConfig as unknown as typeof config.theme.colors
}
