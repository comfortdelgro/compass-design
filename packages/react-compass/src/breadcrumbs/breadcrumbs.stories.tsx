import {faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Breadcrumbs from './index'

const isCurrent = (i: number) => {
  if (window && window.location) return window.location.hash === `#${i}`
  return false
}

export const Default: React.FC = () => {
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
    <Breadcrumbs dividerIcon={faLocationArrow} isCurrent={isCurrent}>
      <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#2'>Data</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
