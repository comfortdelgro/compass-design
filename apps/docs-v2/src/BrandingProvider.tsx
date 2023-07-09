import * as React from 'react'

interface BrandingProviderProps {
  children: React.ReactNode
  mode: 'light' | 'dark'
}

export default function BrandingProvider(props: BrandingProviderProps) {
  const {children} = props
  return <>{children}</>
}
