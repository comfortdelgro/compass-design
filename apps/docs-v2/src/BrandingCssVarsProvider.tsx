import CssBaseline from '@mui/material/CssBaseline'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  PaletteColorOptions,
} from '@mui/material/styles'
import {deepmerge} from '@mui/utils'
import {NextNProgressBar} from 'components/common/AppFrame'
import MarkdownLinks from 'components/common/MarkdownLinks'
import SkipLink from 'components/common/SkipLink'
import {
  getDesignTokens,
  getThemedComponents,
} from 'docs/src/modules/brandingTheme'
import * as React from 'react'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    primaryDark?: PaletteColorOptions
  }
}

const {
  palette: lightPalette,
  typography,
  ...designTokens
} = getDesignTokens('light')
const {palette: darkPalette} = getDesignTokens('dark')

const theme = extendTheme({
  cssVarPrefix: 'muidocs',
  colorSchemes: {
    light: {
      palette: lightPalette,
    },
    dark: {
      palette: darkPalette,
    },
  },
  ...designTokens,
  typography: deepmerge(typography, {
    h1: {
      ':where([data-mui-color-scheme="dark"]) &': {
        color: 'var(--muidocs-palette-common-white)',
      },
    },
    h2: {
      ':where([data-mui-color-scheme="dark"]) &': {
        color: 'var(--muidocs-palette-grey-100)',
      },
    },
    h5: {
      ':where([data-mui-color-scheme="dark"]) &': {
        color: 'var(--muidocs-palette-primary-300)',
      },
    },
  }),
  ...getThemedComponents(),
})

export default function BrandingCssVarsProvider(props: {
  children: React.ReactNode
}) {
  const {children} = props
  return (
    <CssVarsProvider
      theme={theme}
      defaultMode='system'
      disableTransitionOnChange
    >
      <NextNProgressBar />
      <CssBaseline />
      <SkipLink />
      <MarkdownLinks />
      {children}
    </CssVarsProvider>
  )
}
