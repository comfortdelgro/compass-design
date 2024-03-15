// import {
//   faBars,
//   faBell,
//   faChevronDown,
//   faClose,
//   faExclamationTriangle,
//   faMapMarkerAlt,
//   faUserEdit,
// } from '@fortawesome/free-solid-svg-icons'
import type {Meta} from '@storybook/react'
import React from 'react'
// import Icon from '../icon'
import Announcement from './index'

const Style: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1.5rem',
  marginBottom: '2rem',
}

export const Basic: React.FC = () => (
  <div style={{width: '100%', height: '100%', padding: '2rem'}}>
    <h3>1. Variants</h3>
    <div style={{...Style}}>
      <Announcement.Banner variant='primary-dark'>
        <Announcement.Banner.Body>
          12312321
        </Announcement.Banner.Body>
      </Announcement.Banner>
    </div>
  </div>
)

const meta = {
  title: 'Example/Announcement',
  component: Basic,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
