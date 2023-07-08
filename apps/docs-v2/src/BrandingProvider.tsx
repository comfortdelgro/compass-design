import {useTheme} from '@mui/material/styles'
import * as React from 'react'

interface BrandingProviderProps {
  children: React.ReactNode
  /**
   * If not `undefined`, the provider is considered nesting and does not render NextNProgressBar & CssBaseline
   */
  mode: 'light' | 'dark'
}

export default function BrandingProvider(props: BrandingProviderProps) {
  const {children, mode: modeProp} = props
  const upperTheme = useTheme()
  return <>{children}</>
}
