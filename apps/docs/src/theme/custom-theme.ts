import createTheme from '@comfortdelgro/react-compass/theme/theme'

export const lightThemeCustom = createTheme('light-theme-custom', {
  colors: {
    primaryText: 'red !important',
  },
})

export const darkThemeCustom = createTheme('dark-theme-custom', {
  colors: {
    primaryText: 'blue !important',
  },
})
