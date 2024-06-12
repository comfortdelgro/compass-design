import Snackbar from './snackbar'
import SnackbarPrefixIcon from './snackbar-prefix-icon'
import SnackbarSuffixIcon from './snackbar-suffix-icon'
import SnackbarText from './snackbar-text'

export type {SnackbarPrefixIconProps} from './snackbar-prefix-icon'
export type {SnackbarSuffixIconProps} from './snackbar-suffix-icon'
export type {SnackbarTextProps} from './snackbar-text'

Snackbar.PrefixIcon = SnackbarPrefixIcon
Snackbar.SuffixIcon = SnackbarSuffixIcon
Snackbar.Text = SnackbarText

Snackbar.PrefixIcon.displayName = 'Snackbar.PrefixIcon'
Snackbar.SuffixIcon.displayName = 'Snackbar.SuffixIcon'
Snackbar.Text.displayName = 'Snackbar.Text'

export default Snackbar
