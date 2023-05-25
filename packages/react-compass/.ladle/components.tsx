import {GlobalProvider, ThemeState} from '@ladle/react'
import React, {useEffect} from 'react'
import Preflight from '../src/preflight'
import {darkTheme} from '../src/theme/theme'

export const Provider: GlobalProvider = ({children, globalState}) => {
  useEffect(() => {
    if (globalState.theme === ThemeState.Dark) {
      document.body.classList.add(darkTheme.className)
      return () => {
        document.body.classList.remove(darkTheme.className)
      }
    }
  }, [globalState])

  return (
    <React.Fragment>
      <Preflight />
      {children}
    </React.Fragment>
  )
}
