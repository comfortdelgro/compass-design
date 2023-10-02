import { useEffect, useState } from 'react'

const DEFAULT_COLORS = {
  'cdgBlue': 'white',
  'typeHeading': 'white',
  'background': 'white',
  'black': 'white',
  'white': 'white',
  'primaryText': 'white',
  'secondaryText': 'white',
  'disabledText': 'white',
  'tertiaryText': 'white',
  'whiteText': 'white',
  'divider': 'white',
  'border': 'white',
  'activeBorder': 'white',
  'infoBg': 'white',
  'info': 'white',
  'dangerBg': 'white',
  'danger': 'white',
  'dangerDarker': 'white',
  'successBg': 'white',
  'success': 'white',
  'severeWarningBg': 'white',
  'severeWarning': 'white',
  'warningBg': 'white',
  'warning': 'white',
  'cdgBlue10': 'white',
  'cdgBlue20': 'white',
  'cdgBlue30': 'white',
  'cdgBlue40': 'white',
  'cdgBlue60': 'white',
  'cdgBlue80': 'white',
  'cdgBlue100': 'white',
  'cdgBlue120': 'white',
  'cdgBlue140': 'white',
  'overlayLight': 'white',
  'overlayDark': 'white',
  'gray10': 'white',
  'gray20': 'white',
  'gray30': 'white',
  'gray40': 'white',
  'gray50': 'white',
  'gray60': 'white',
  'gray70': 'white',
  'gray80': 'white',
  'gray90': 'white',
  'gray100': 'white',
  'gray110': 'white',
  'primaryBg': 'white',
  'secondaryBg': 'white',
  'darkerBg': 'white',
  'brighterBg': 'white',
  'gradientOrange': 'white',
  'gradientRainbow': 'white',
  'gradientOrangeBlue': 'white',
}

export type Colors = typeof DEFAULT_COLORS

export function useColors() {
  const [colorsConfig, setColorsConfig] = useState<Colors>(DEFAULT_COLORS)

  function updateColorsConfig() {
    const configs: Record<string, string> = {}
    const documentStyle = getComputedStyle(document.body)
    Object.keys(DEFAULT_COLORS).forEach(
      (key) =>
        (configs[key] = documentStyle.getPropertyValue(`--cdg-color-${key}`)),
    )
    setColorsConfig(configs as Colors)
  }

  useEffect(() => {
    updateColorsConfig()
    const mutationObserver = new MutationObserver(updateColorsConfig)
    mutationObserver.observe(document.body, { attributes: true })
  }, [])

  return colorsConfig
}
