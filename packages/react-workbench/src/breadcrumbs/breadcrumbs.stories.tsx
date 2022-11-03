import {faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import BreadcrumbItem from './breadcrumb-item'
import Breadcrumbs from './breadcrumbs'

const isCurrent = (i: number) => {
  if (window && window.location) return window.location.hash === `#${i}`
  return false
}

export const Default: React.FC = () => {
  return (
    <Breadcrumbs isCurrent={isCurrent}>
      <BreadcrumbItem href='#0'>Home</BreadcrumbItem>
      <BreadcrumbItem href='#1'>Library</BreadcrumbItem>
      <BreadcrumbItem href='#2' isDisabled>
        Disabled
      </BreadcrumbItem>
      <BreadcrumbItem href='#3'>Data</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export const CustomDivider: React.FC = () => {
  return (
    <Breadcrumbs dividerIcon={faLocationArrow} isCurrent={isCurrent}>
      <BreadcrumbItem href='#0'>Home</BreadcrumbItem>
      <BreadcrumbItem href='#1'>Library</BreadcrumbItem>
      <BreadcrumbItem href='#2'>Data</BreadcrumbItem>
    </Breadcrumbs>
  )
}
