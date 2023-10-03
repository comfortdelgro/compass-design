import {Breadcrumbs} from '@comfortdelgro/react-compass'
// import {Breadcrumbs as StaticBreadcrumbs} from '@comfortdelgro/static'
import React from 'react'

const isCurrent = (i: number) => {
  if (typeof window !== 'undefined' && window && window.location)
    return window.location.hash === `#${i}`
  return false
}

const Basic: React.FC = () => {
  return (
    <>
      <Breadcrumbs isCurrent={isCurrent}>
        <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#2' isDisabled>
          Disabled
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href='#3'>Data</Breadcrumbs.Item>
      </Breadcrumbs>

      {/* <StaticBreadcrumbs isCurrent={isCurrent}>
        <StaticBreadcrumbs.Item href='#0'>Home</StaticBreadcrumbs.Item>
        <StaticBreadcrumbs.Item href='#1'>Library</StaticBreadcrumbs.Item>
        <StaticBreadcrumbs.Item href='#2' isDisabled>
          Disabled
        </StaticBreadcrumbs.Item>
        <StaticBreadcrumbs.Item href='#3'>Data</StaticBreadcrumbs.Item>
      </StaticBreadcrumbs> */}
    </>
  )
}
export default Basic
