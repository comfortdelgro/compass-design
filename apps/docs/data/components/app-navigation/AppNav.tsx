import Activity from '@comfortdelgro/compass-icons/react/activity'
import Home from '@comfortdelgro/compass-icons/react/home'
import NotificationOutlined from '@comfortdelgro/compass-icons/react/notification-outlined'
import User from '@comfortdelgro/compass-icons/react/user-duotone'
import AppNav from '@comfortdelgro/react-compass/appnav'
import React from 'react'
const AppNavComponent: React.FC = () => {
  const [index, setIndex] = React.useState<number>(0)
  return (
    <div style={{height: '100px', position: 'relative'}}>
      <AppNav
        index={index}
        onChange={(newIndex) => {
          setIndex(newIndex)
        }}
        css={{
          position: 'absolute',
        }}
      >
        <AppNav.Section
          activeIcon={<Home />}
          inactiveIcon={<Home />}
          label='Home'
          hasBadge
        />
        <AppNav.Section
          activeIcon={<Activity />}
          inactiveIcon={<Activity />}
          label='Activities'
        />
        <AppNav.Section
          activeIcon={<NotificationOutlined />}
          inactiveIcon={<NotificationOutlined />}
          label='Notifications'
        />
        <AppNav.Section
          activeIcon={<User />}
          inactiveIcon={<User />}
          label='Account'
        />
      </AppNav>
    </div>
  )
}
export default AppNavComponent
