import BadgeDollarDuotone from '@comfortdelgro/compass-icons/react/duotone/badge-dollar-duotone'
import CalendarDaysDuotone from '@comfortdelgro/compass-icons/react/duotone/calendar-days-duotone'
import ChartLineUpDuotone from '@comfortdelgro/compass-icons/react/duotone/chart-line-up-duotone'
import ChartPieDuotone from '@comfortdelgro/compass-icons/react/duotone/chart-pie-duotone'
import EditDuotone from '@comfortdelgro/compass-icons/react/duotone/edit-duotone'
import FlagDuotone from '@comfortdelgro/compass-icons/react/duotone/flag-duotone'
import GearsDuotone from '@comfortdelgro/compass-icons/react/duotone/gears-duotone'
import GridDuotone from '@comfortdelgro/compass-icons/react/duotone/grid-duotone'
import NotificationDuotone from '@comfortdelgro/compass-icons/react/duotone/notification-duotone'
import OrgChartDuotone from '@comfortdelgro/compass-icons/react/duotone/org-chart-duotone'
import PasswordDuotone from '@comfortdelgro/compass-icons/react/duotone/password-duotone'
import TrashDuotone from '@comfortdelgro/compass-icons/react/duotone/trash-duotone'
import UserDuotone from '@comfortdelgro/compass-icons/react/duotone/user-duotone'
import {Flexbox} from '@comfortdelgro/react-compass'
import IconBox from './IconBox'

export default function duotoneIcons() {
  return (
    <Flexbox
      css={{justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}
    >
      <IconBox
        component={<BadgeDollarDuotone width={40} height={40} />}
        name='BadgeDollarDuotone'
      />
      <IconBox
        component={<CalendarDaysDuotone width={40} height={40} />}
        name='CalendarDaysDuotone'
      />
      <IconBox
        component={<ChartLineUpDuotone width={40} height={40} />}
        name='ChartLineUpDuotone'
      />
      <IconBox
        component={<ChartPieDuotone width={40} height={40} />}
        name='ChartPieDuotone'
      />
      <IconBox
        component={<EditDuotone width={40} height={40} />}
        name='EditDuotone'
      />
      <IconBox
        component={<FlagDuotone width={40} height={40} />}
        name='FlagDuotone'
      />
      <IconBox
        component={<GearsDuotone width={40} height={40} />}
        name='GearsDuotone'
      />
      <IconBox
        component={<GridDuotone width={40} height={40} />}
        name='GridDuotone'
      />
      <IconBox
        component={<NotificationDuotone width={40} height={40} />}
        name='NotificationDuotone'
      />
      <IconBox
        component={<OrgChartDuotone width={40} height={40} />}
        name='OrgChartDuotone'
      />
      <IconBox
        component={<PasswordDuotone width={40} height={40} />}
        name='PasswordDuotone'
      />
      <IconBox
        component={<TrashDuotone width={40} height={40} />}
        name='TrashDuotone'
      />
      <IconBox
        component={<UserDuotone width={40} height={40} />}
        name='UserDuotone'
      />
    </Flexbox>
  )
}
