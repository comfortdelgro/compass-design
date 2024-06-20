import {createContext} from 'react'
import {ETheme} from 'utils/constants'

const ThemeContext = createContext<ETheme>(ETheme.Light)

export default ThemeContext
