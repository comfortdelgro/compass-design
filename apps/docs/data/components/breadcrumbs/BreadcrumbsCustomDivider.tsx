import {Breadcrumbs} from '@comfortdelgro/react-compass-old'
// import {Breadcrumbs as StaticBreadcrumbs} from '@comfortdelgro/static'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const isCurrent = (i: number) => {
  if (typeof window !== 'undefined' && window && window.location)
    return window.location.hash === `#${i}`
  return false
}

const CustomDivider: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        dividerIcon={<FontAwesomeIcon icon={faBug} />}
        isCurrent={isCurrent}
      >
        <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
        <Breadcrumbs.Item href='#2'>Data</Breadcrumbs.Item>
      </Breadcrumbs>

      {/* <StaticBreadcrumbs
        dividerIcon={<FontAwesomeIcon icon={faBug} />}
        isCurrent={isCurrent}
      >
        <StaticBreadcrumbs.Item href='#0'>Home</StaticBreadcrumbs.Item>
        <StaticBreadcrumbs.Item href='#1'>Library</StaticBreadcrumbs.Item>
        <StaticBreadcrumbs.Item href='#2'>Data</StaticBreadcrumbs.Item>
      </StaticBreadcrumbs> */}
    </>
  )
}
export default CustomDivider
