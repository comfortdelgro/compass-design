import type {GlobalProvider} from '@ladle/react'
import React from 'react'
import Preflight from '../src/preflight'

export const Provider: GlobalProvider = ({children}) => (
  <React.Fragment>
    <Preflight />
    {children}
  </React.Fragment>
)
