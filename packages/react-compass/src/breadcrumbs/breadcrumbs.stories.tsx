import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import Breadcrumbs from './index'

const isCurrent = (i: number) => {
  if (window && window.location) return window.location.hash === `#${i}`
  return false
}

export const Basic: React.FC = () => {
  return (
    <>
      <h3>Basic</h3>
      <Breadcrumbs isCurrent={isCurrent}>
        <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#2' isDisabled>
          Disabled
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href='#3'>Data</Breadcrumbs.Item>
      </Breadcrumbs>
    </>
  )
}

export const CustomDivider: React.FC = () => {
  return (
    <>
      <h3>Custom Divider</h3>
      <Breadcrumbs
        dividerIcon={<FontAwesomeIcon icon={faBug} />}
        isCurrent={isCurrent}
      >
        <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#2'>Data</Breadcrumbs.Item>
      </Breadcrumbs>
    </>
  )
}
