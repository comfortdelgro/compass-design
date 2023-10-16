import Snackbar from './snackbar'
import SnackbarDetail from './snackbar-detail'
import SnackbarDetailDescription from './snackbar-detail-description'
import SnackbarPrefixIcon from './snackbar-prefix-icon'
import SnackbarSuffixIcon from './snackbar-suffix-icon'
import SnackbarText from './snackbar-text'

export type {SnackbarDetailDescriptionProps} from './snackbar-detail-description'
export type {SnackbarDetailProps} from './snackbar-detail'
export type {SnackbarPrefixIconProps} from './snackbar-prefix-icon'
export type {SnackbarSuffixIconProps} from './snackbar-suffix-icon'
export type {SnackbarTextProps} from './snackbar-text'


Snackbar.Detail = SnackbarDetail
Snackbar.DetailDescription = SnackbarDetailDescription
Snackbar.PrefixIcon = SnackbarPrefixIcon
Snackbar.SuffixIcon = SnackbarSuffixIcon
Snackbar.Text = SnackbarText

Snackbar.Detail.displayName = 'Snackbar.Detail'
Snackbar.DetailDescription.displayName = 'Snackbar.DetailDescription'
Snackbar.PrefixIcon.displayName = 'Snackbar.PrefixIcon'
Snackbar.SuffixIcon.displayName = 'Snackbar.SuffixIcon'
Snackbar.Text.displayName = 'Snackbar.Text'

export default Snackbar
