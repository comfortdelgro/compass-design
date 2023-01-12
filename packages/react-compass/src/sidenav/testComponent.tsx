import {
  faAmbulance,
  faBank,
  faCar,
  faHelicopter,
  faPlane,
  faTractor,
} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import Avatar from '../avatar'
import Icon from '../icon'
import {Row} from '../utils/components'
import Sidenav from './index'

export const NoExpandSidenav: React.FC = () => {
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
      <Sidenav
        css={{height: '800px', position: 'absolute', top: '0px', zIndex: 2}}
        expand={false}
      >
        <Sidenav.Item>
          <div style={{width: '40px'}}>
            <Avatar label='M' />
          </div>
          <h2 style={{fontSize: '24px', marginLeft: '22px', color: '#323130'}}>
            Workbench
          </h2>
        </Sidenav.Item>
        <Sidenav.Divider />
        {items.map((item) => (
          <a
            onClick={(e) => {
              handleOnClick(e, item.id)
            }}
            key={item.id}
            href='#'
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            <Sidenav.Item isActive={currentPage === item.id}>
              <Icon icon={item.icon}></Icon>
              <span>Placeholder</span>
            </Sidenav.Item>
          </a>
        ))}
        <Sidenav.Divider />
        <Sidenav.Item css={{marginTop: 'auto'}}>
          <Icon icon={faBank}></Icon>
          <span>Placeholder</span>
        </Sidenav.Item>
      </Sidenav>
    </Row>
  )
}
