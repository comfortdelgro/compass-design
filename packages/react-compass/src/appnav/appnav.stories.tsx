import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import {
faBell,
faHome,
faList,
faUser,
faWallet
} from '@fortawesome/free-solid-svg-icons'
import { Column } from '../utils'
import AppNav from './index'

export const FourSections: React.FC = () => {
  const [value, setValue] = React.useState<number>(0)
  return (
    <Column>
      <h3>App nav with four sections</h3>
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
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          css={{
            position: 'absolute',
            gap: '2.25rem',
          }}
        >
          <AppNav.Section
            icon={<FontAwesomeIcon icon={faHome} />}
            label='Home'
            hasBadge
          />
          <AppNav.Section
            icon={<FontAwesomeIcon icon={faList} />}
            label='Activities'
          />
          <AppNav.Section
            icon={<FontAwesomeIcon icon={faBell} />}
            label='Notifications'
          />
          <AppNav.Section
            icon={<FontAwesomeIcon icon={faUser} />}
            label='Account'
          />
        </AppNav>
      </div>
    </Column>
  )
}
export const FiveSections: React.FC = () => {
  const [value, setValue] = React.useState<number>(1)
  return (
    <Column>
      <h3>App nav with five sections</h3>
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
          value={value}
          sections={5}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          css={{
            position: 'absolute',
            gap: '1rem',
            justifyContent: 'space-around',
          }}
        >
          <AppNav.Section
            icon={<FontAwesomeIcon icon={faHome} />}
            label='Home'
          />
          <AppNav.Section
            icon={<FontAwesomeIcon icon={faList} />}
            label='Activities'
            hasBadge
          />
          <AppNav.Section
            icon={<FontAwesomeIcon icon={faBell} />}
            label='Notifications'
          />
          <AppNav.Section
            icon={<FontAwesomeIcon icon={faWallet} />}
            label='ZigPay'
            hasBadge
          />
          <AppNav.Section
            icon={<FontAwesomeIcon icon={faUser} />}
            label='Account'
          />
        </AppNav>
      </div>
    </Column>
  )
}
