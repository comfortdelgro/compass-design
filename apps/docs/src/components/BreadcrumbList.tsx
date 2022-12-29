import Breadcrumbs from '@comfortdelgro/react-compass/breadcrumbs'
import {faVirus} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export function BasicBreadcrumb() {
  return (
    <Breadcrumbs isCurrent={() => false}>
      <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#2' isDisabled>
        Disabled
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href='#3'>Data</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export function CustomDividerBreadcrumb() {
  return (
    <Breadcrumbs dividerIcon={faVirus} isCurrent={() => false}>
      <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#2'>Data</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export function CustomCSSBreadcrumb() {
  return (
    <Breadcrumbs isCurrent={() => false}>
      <Breadcrumbs.Item href='#0' css={{'&:hover': {color: 'black'}}}>
        Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href='#1' css={{'&:hover': {color: 'black'}}}>
        Library
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href='#2' css={{'&:hover': {color: 'black'}}}>
        Data
      </Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
