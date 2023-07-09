import CssBaseline from '@mui/material/CssBaseline'
import {PaletteColorOptions} from '@mui/material/styles'
import {NextNProgressBar} from 'components/common/AppFrame'
import MarkdownLinks from 'components/common/MarkdownLinks'
import * as React from 'react'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    primaryDark?: PaletteColorOptions
  }
}

export default function BrandingCssVarsProvider(props: {
  children: React.ReactNode
}) {
  const {children} = props
  return (
    <>
      <NextNProgressBar />
      <CssBaseline />
      <MarkdownLinks />
      {children}
    </>
  )
}
