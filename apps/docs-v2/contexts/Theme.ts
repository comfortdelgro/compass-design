import {createContext, useContext} from 'react'
import {ETheme} from '../constants/index'

const ThemeContext = createContext<ETheme>(ETheme.Light)

export const useThemeContext = (): ETheme => useContext<ETheme>(ThemeContext)

export default ThemeContext
