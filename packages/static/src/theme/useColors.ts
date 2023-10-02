import { useEffect, useState } from 'react'

const DEFAULT_COLORS = {
  cdgBlue: '#0142AF',
  typeHeading: '#323130',
  background: '#FFFFFF',
  black: '#000000',
  white: '#FFFFFF',
  primaryText: '#323130',
  secondaryText: '#605E5C',
  disabledText: '#A19F9D',
  tertiaryText: '#C5C6CF',
  whiteText: '#FFFFFF',
  divider: '#EDEBE9',
  border: '#8A8886',
  activeBorder: '#323130',
  infoBg: '#CCECF8',
  info: '#009EDA',
  dangerBg: '#EFD9DB',
  danger: '#A4262C',
  dangerDarker: '#7d1b20',
  successBg: '#D1E8CF',
  success: '#107C10',
  severeWarningBg: '#F0CBBE',
  severeWarning: '#D83B01',
  warningBg: '#F8DB96',
  warning: '#EFB01D',
  cdgBlue10: '#E6ECF7',
  cdgBlue20: '#CCD9EF',
  cdgBlue30: '#CCD5EF',
  cdgBlue40: '#99B3DF',
  cdgBlue60: '#678ECF',
  cdgBlue80: '#3468BF',
  cdgBlue100: '#0142AF',
  cdgBlue120: '#012158',
  cdgBlue140: '#001232',
  overlayLight: 'rgba(255, 255, 255, 0.4)',
  overlayDark: 'rgba(0, 0, 0, 0.4)',
  gray10: '#FAF9F8',
  gray20: '#F3F2F1',
  gray30: '#EDEBE9',
  gray40: '#E1DFDD',
  gray50: '#D2D0CE',
  gray60: '#C8C6C4',
  gray70: '#A19F9D',
  gray80: '#605E5C',
  gray90: '#3A3B39',
  gray100: '#323130',
  gray110: '#201F1E',
  primaryBg: '#F5F5F6',
  secondaryBg: '#F0F0F0',
  darkerBg: '#EAEBEB',
  brighterBG: '#484D65',
  gradientOrange: '#F02627, #EA8816',
  gradientRainbow: '#0163AE, #D80837, #53AF35',
  gradientOrangeBlue: '#D2132A, #0597DB',
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
