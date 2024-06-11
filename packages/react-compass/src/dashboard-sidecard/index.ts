import DashboardSidecard from './dashboardSidecard'
import DashboardSidecardContent from './dashboardSidecardContent'
import DashboardSidecardHeader from './dashboardSidecardHeader'

export type {DashboardSidecardProps} from './dashboardSidecard'
export type {DashboardSidecardContentProps} from './dashboardSidecardContent'
export type {DashboardSidecardHeaderProps} from './dashboardSidecardHeader'

DashboardSidecard.Header = DashboardSidecardHeader
DashboardSidecard.Content = DashboardSidecardContent

DashboardSidecard.displayName = 'DashboardSidecard'
DashboardSidecard.Header.displayName = 'DashboardSidecard.Header'
DashboardSidecard.Content.displayName = 'DashboardSidecard.Content'

export default DashboardSidecard
