import type {GlobalProvider} from '@ladle/react'
import React from 'react'

export const Provider: GlobalProvider = ({children}) => (
  <React.Fragment>{children}</React.Fragment>
)
