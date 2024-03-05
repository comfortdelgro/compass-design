export const parameters = {
  'data-theme-toggle': {
    querySelector: 'html',
    'data-target': 'theme',
    default: 'light',
    values: {
      dark: 'dark',
      light: 'light',
    },
    lightFill: '#FF0000',
    darkFill: '#000000',
  },
}
