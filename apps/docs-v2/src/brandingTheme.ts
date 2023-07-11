import {createTheme, ThemeOptions} from '@mui/material/styles'
import type {} from '@mui/material/themeCssVarsAugmentation'
import {CSSObject} from '@mui/system'

interface ApplyDarkStyles {
  (scheme: CSSObject): CSSObject
}

declare module '@mui/material/styles' {
  interface Theme {
    applyDarkStyles: ApplyDarkStyles
  }
}

declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    primaryDark: PaletteColor
  }
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fontWeightSemiBold?: number
    fontWeightExtraBold?: number
    fontFamilyCode?: string
    fontFamilySystem?: string
  }

  interface Typography {
    fontWeightSemiBold: number
    fontWeightExtraBold: number
    fontFamilyCode: string
    fontFamilySystem: string
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    grey: true
  }
}

// TODO: enable this once types conflict is fixed
// declare module '@mui/material/Button' {
//   interface ButtonPropsVariantOverrides {
//     code: true;
//   }
// }

const defaultTheme = createTheme()

export const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  main: '#007FFF',
  500: '#007FFF',
  600: '#0072E5', // vs blueDark 900: WCAG 4.6 AAA (large), APCA 36 Not for reading text
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
}
export const blueDark = {
  50: '#E2EDF8',
  100: '#CEE0F3',
  200: '#91B9E3',
  300: '#5090D3',
  main: '#5090D3',
  400: '#265D97',
  500: '#1E4976',
  600: '#173A5E',
  700: '#132F4C', // contrast 13.64:1
  800: '#001E3C',
  900: '#0A1929',
}
export const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7', // vs blueDark 900: WCAG 11.6 AAA, APCA 78 Best for text
  400: '#B2BAC2', // vs blueDark 900: WCAG 9 AAA, APCA 63.3 Ok for text
  500: '#A0AAB4', // vs blueDark 900: WCAG 7.5 AAA, APCA 54.3 Only for large text
  600: '#6F7E8C', // vs white bg: WCAG 4.1 AA, APCA 68.7 Ok for text
  700: '#3E5060', // vs white bg: WCAG 8.3 AAA, APCA 88.7 Best for text
  800: '#2D3843', // vs white bg: WCAG 11.9 AAA, APCA 97.3 Best for text
  900: '#1A2027',
}
export const error = {
  50: '#FFF0F1',
  100: '#FFDBDE',
  200: '#FFBDC2',
  300: '#FF99A2',
  400: '#FF7A86',
  500: '#FF505F',
  main: '#EB0014', // contrast 4.63:1
  600: '#EB0014',
  700: '#C70011',
  800: '#94000D',
  900: '#570007',
}
export const success = {
  50: '#E9FBF0',
  100: '#C6F6D9',
  200: '#9AEFBC',
  300: '#6AE79C',
  400: '#3EE07F',
  500: '#21CC66',
  600: '#1DB45A',
  700: '#1AA251',
  800: '#178D46',
  900: '#0F5C2E',
}
export const warning = {
  50: '#FFF9EB',
  100: '#FFF3C1',
  200: '#FFECA1',
  300: '#FFDC48', // vs blueDark900: WCAG 10.4 AAA, APCA 72 Ok for text
  400: '#F4C000', // vs blueDark900: WCAG 6.4 AA normal, APCA 48 Only large text
  500: '#DEA500', // vs blueDark900: WCAG 8 AAA normal, APCA 58 Only large text
  main: '#DEA500',
  600: '#D18E00', // vs blueDark900: WCAG 6.4 AA normal, APCA 48 Only large text
  700: '#AB6800', // vs white bg: WCAG 4.4 AA large, APCA 71 Ok for text
  800: '#8C5800', // vs white bg: WCAG 5.9 AAA large, APCA 80 Best for text
  900: '#5A3600', // vs white bg: WCAG 10.7 AAA, APCA 95 Best for text
}
// context on the Advanced Perceptual Contrast Algorithm (APCA) used above here: https://github.com/w3c/wcag/issues/695

export const getDesignTokens = () =>
  ({
    palette: {
      primary: {
        ...blue,
      },
      divider: grey[100],
      primaryDark: blueDark,
      mode: 'light',
      common: {
        black: '#1D1D1D',
      },
      text: {
        primary: '#fff',
        secondary: grey[400],
      },
      grey: {
        ...grey,
        main: blueDark[700],
        contrastText: grey[600],
      },
      error,
      success: {
        main: '#1DB45A',
      },
      warning,
    },
    shape: {
      borderRadius: 10,
    },
    spacing: 10,
  } as ThemeOptions)

export const brandingLightTheme = createTheme({
  ...getDesignTokens(),
})

export const getMetaThemeColor = (mode: 'light' | 'dark') => {
  const themeColor = {
    light: grey[50],
    dark: blueDark[800],
  }
  return themeColor[mode]
}
