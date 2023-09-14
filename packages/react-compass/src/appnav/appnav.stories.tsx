import Activity from '@comfortdelgro/compass-icons/react/activity'
import CreditCard from '@comfortdelgro/compass-icons/react/credit-card-filled'
import CreditCardOutlined from '@comfortdelgro/compass-icons/react/credit-card-outlined'
import Home from '@comfortdelgro/compass-icons/react/home'
import Notification from '@comfortdelgro/compass-icons/react/notification-filled'
import NotificationOutlined from '@comfortdelgro/compass-icons/react/notification-outlined'
import User from '@comfortdelgro/compass-icons/react/user-duotone'
import React from 'react'

import {Column} from '../utils'
import AppNav from './index'

export const FourSections: React.FC = () => {
  const [index, setIndex] = React.useState<number>(0)
  return (
    <Column>
      <h3>Bottom app nav with four sections</h3>
      <div
        style={{
          position: 'relative',
          width: 375,
          height: 500,
          backgroundColor: '#f4f4f4',
          border: '1px solid #f0f0f0',
        }}
      >
        <AppNav
          index={index}
          onChange={(newIndex) => {
            setIndex(newIndex)
          }}
          css={
            {
              // position: 'absolute',
            }
          }
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
    </Column>
  )
}
export const FiveSections: React.FC = () => {
  const [index, setIndex] = React.useState<number>(1)
  return (
    <Column>
      <h3>Top app nav with five sections</h3>
      <div
        style={{
          position: 'relative',
          width: 375,
          height: 500,
          backgroundColor: '#f4f4f4',
          border: '1px solid #f0f0f0',
        }}
      >
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
          />
          <AppNav.Section
            activeIcon={<Activity />}
            inactiveIcon={<Activity />}
            label='Activities'
            hasBadge
          />
          <AppNav.Section
            activeIcon={<Notification />}
            inactiveIcon={<NotificationOutlined />}
            label='Notifications'
          />
          <AppNav.Section
            activeIcon={<CreditCard />}
            inactiveIcon={<CreditCardOutlined />}
            label='ZigPay'
            hasBadge
          />
          <AppNav.Section
            activeIcon={<User />}
            inactiveIcon={<User />}
            label='Account'
          />
        </AppNav>
      </div>
    </Column>
  )
}
