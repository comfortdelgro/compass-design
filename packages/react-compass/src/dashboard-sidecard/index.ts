import _DashboardSidecard from './dashboardSidecard'
import DashboardSidecardContent from './dashboardSidecardContent'
import DashboardSidecardHeader from './dashboardSidecardHeader'

export type {DashboardSidecardProps} from './dashboardSidecard'
export type {DashboardSidecardContentProps} from './dashboardSidecardContent'
export type {DashboardSidecardHeaderProps} from './dashboardSidecardHeader'

const DashboardSidecard = _DashboardSidecard as typeof _DashboardSidecard & {
  Header: typeof DashboardSidecardHeader
  Content: typeof DashboardSidecardContent
}

DashboardSidecard.Header = DashboardSidecardHeader
DashboardSidecard.Content = DashboardSidecardContent

DashboardSidecard.displayName = 'DashboardSidecard'
DashboardSidecard.Header.displayName = 'DashboardSidecard.Header'
DashboardSidecard.Content.displayName = 'DashboardSidecard.Content'

export default DashboardSidecard
