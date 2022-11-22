import {
  faAmbulance,
  faBank,
  faCar,
  faHelicopter,
  faPlane,
  faTractor,
} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import Icon from '../icon'
import {Row} from '../utils/components'
import Divider from './divider'
import {default as SidebarComponent} from './sidebar'
import SidebarItem from './sidebar-item'

export const Sidebar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const items = [
    {id: 1, icon: faCar},
    {id: 2, icon: faAmbulance},
    {id: 3, icon: faPlane},
    {id: 4, icon: faHelicopter},
    {id: 5, icon: faTractor},
  ]

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number,
  ) => {
    e.preventDefault()
    setCurrentPage(id)
  }

  return (
    <Row css={{position: 'relative'}}>
      <SidebarComponent
        css={{height: '720px', position: 'absolute', top: '40px', zIndex: 2}}
        expand
      >
        {items.map((item) => (
          <a
            onClick={(e) => {
              handleOnClick(e, item.id)
            }}
            key={item.id}
            href='#'
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            <SidebarItem active={currentPage === item.id}>
              <Icon icon={item.icon}></Icon>
              <span>Placeholder</span>
            </SidebarItem>
          </a>
        ))}
        <Divider />
        <SidebarItem css={{marginTop: 'auto'}}>
          <Icon icon={faBank}></Icon>
          <span>Placeholder</span>
        </SidebarItem>
      </SidebarComponent>
      <SidebarComponent
        css={{
          height: '720px',
          position: 'absolute',
          left: '200px',
          backgroundColor: '$primaryBg',
          top: '40px',
          zIndex: 1,
          '& .sidebar-item-active': {
            color: '$warning',
          },
        }}
        expand
      >
        {items.map((item) => (
          <a
            onClick={(e) => {
              handleOnClick(e, item.id)
            }}
            key={item.id}
            href='#'
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            <SidebarItem
              active={currentPage === item.id}
              css={{
                '&:hover': {
                  color: '$danger',
                },
              }}
            >
              <Icon icon={item.icon}></Icon>
              <span>Placeholder</span>
            </SidebarItem>
          </a>
        ))}
        <Divider />
        <SidebarItem css={{marginTop: 'auto'}}>
          <Icon icon={faBank}></Icon>
          <span>Placeholder</span>
        </SidebarItem>
      </SidebarComponent>
    </Row>
  )
}
