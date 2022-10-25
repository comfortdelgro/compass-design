import type {StoryDecorator} from '@ladle/react'
import BreadcrumbItem from './breadcrumb-item'
import Breadcrumbs from './breadcrumbs'

export const Default: React.FC = () => {
  const isActive = (i: number) => {
    if (window && window.location) return window.location.hash === `#${i}`
    return false
  }

  return (
    <Breadcrumbs isActive={isActive}>
      <BreadcrumbItem href='#0'>Home</BreadcrumbItem>
      <BreadcrumbItem href='#1'>Library</BreadcrumbItem>
      <BreadcrumbItem href='#2'>Data</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export const CustomDivider: React.FC = () => {
  return (
    <Breadcrumbs divider={<span>&gt;</span>} isActive={(i) => i === 2}>
      <BreadcrumbItem href='#0'>Home</BreadcrumbItem>
      <BreadcrumbItem href='#1'>Library</BreadcrumbItem>
      <BreadcrumbItem href='#2'>Data</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default {
  decorators: [
    (Component) => (
      <table>
        <tbody>
          <Component />
        </tbody>
      </table>
    ),
  ] as StoryDecorator[],
}
