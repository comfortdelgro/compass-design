import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {Meta} from '@storybook/react'
import React from 'react'
import Breadcrumbs from './index'

import '../theme-static/theme.module.css'

const isCurrent = (i: number) => {
  if (window && window.location) return window.location.hash === `#${i}`
  return false
}

export const Basic: React.FC = () => {
  return (
    <Breadcrumbs isCurrent={isCurrent}>
      <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#2' isDisabled>
        Disabled
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href='#3'>Data</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export const CustomDivider: React.FC = () => {
  return (
    <Breadcrumbs
      dividerIcon={<FontAwesomeIcon icon={faBug} />}
      isCurrent={isCurrent}
    >
      <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#2'>Data</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

const meta = {
  title: 'Example/Breadcrumbs Server',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
