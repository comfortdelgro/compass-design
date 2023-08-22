import {Breadcrumbs} from '@comfortdelgro/react-compass'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const isCurrent = (i: number) => {
  if (typeof window !== 'undefined' && window && window.location)
    return window.location.hash === `#${i}`
  return false
}

const CustomDivider: React.FC = () => {
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
export default CustomDivider
