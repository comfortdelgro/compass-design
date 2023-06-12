import BugIcon from '@comfortdelgro/compass-icons/react/bug'
import Breadcrumbs from '@comfortdelgro/react-compass/breadcrumbs'
import BugIcon from '@comfortdelgro/compass-icons/react/bug'

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
//dividerIcon={faLocationArrow}

export function CustomDividerBreadcrumb() {
  return (
    <Breadcrumbs dividerIcon={<BugIcon />} isCurrent={() => false}>
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
