import {useContext} from 'react'
import {ETheme} from 'utils/constants'
import ThemeContext from 'utils/contexts/Theme'

const useTheme = (): ETheme => useContext<ETheme>(ThemeContext)

export default useTheme
