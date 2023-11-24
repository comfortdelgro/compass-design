import {Breadcrumbs} from '@comfortdelgro/react-compass'
import React from 'react'

const isCurrent = (i: number) => {
  if (typeof window !== 'undefined' && window && window.location)
    return window.location.hash === `#${i}`
  return false
}

const Basic: React.FC = () => {
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

export default Basic
