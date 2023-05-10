import {
  faAmbulance,
  faBank,
  faCar,
  faHelicopter,
  faPlane,
  faTractor,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'
import Avatar from '../avatar'
import Icon from '../icon'
import {Row} from '../utils/components'
import Sidenav from './index'
import SidenavMenu from './sidenav-menu'
// import SidenavMenu from './sidenav-menu'

interface ItemBase {
  id: number
  icon: IconDefinition
  title: string
}

interface ItemType extends ItemBase {
  children?: ItemType[]
}

export const Default: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const items: ItemType[] = [
    {
      id: 1,
      icon: faCar,
      title: 'Placeholder',
      children: [
        {id: 11, title: 'Placeholder', icon: faCar},
        {id: 12, title: 'Placeholder', icon: faCar},
        {
          id: 13,
          title: 'Placeholder',
          icon: faCar,
          children: [
            {id: 11, title: 'Placeholder', icon: faCar},
            {
              id: 12,
              title: 'Placeholder',
              icon: faCar,
              children: [
                {id: 11, title: 'Placeholder', icon: faCar},
                {id: 12, title: 'Placeholder', icon: faCar},
                {
                  id: 13,
                  title: 'Placeholder',
                  icon: faCar,
                  children: [
                    {id: 11, title: 'Placeholder', icon: faCar},
                    {id: 12, title: 'Placeholder', icon: faCar},
                    {id: 13, title: 'Placeholder', icon: faCar},
                  ],
                },
              ],
            },
            {id: 13, title: 'Placeholder', icon: faCar},
          ],
        },
      ],
    },
    {id: 2, icon: faAmbulance, title: 'Placeholder'},
    {id: 3, icon: faPlane, title: 'Placeholder'},
    {id: 4, icon: faHelicopter, title: 'Placeholder'},
    {id: 5, icon: faTractor, title: 'Placeholder'},
  ]

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number,
  ) => {
    e.preventDefault()
    setCurrentPage(id)
  }

  const CustomSizenavItem = (props: ItemType & {isMenu?: boolean}) => {
    const {id, icon, title, children, isMenu} = props
    return (
      <Sidenav.Item isActive={isMenu ? false : currentPage === id}>
        {icon ? <Icon icon={icon}></Icon> : <></>}
        {title ? (
          <span>
            {title} {children ? '→' : ''}
          </span>
        ) : (
          <></>
        )}
        {children ? (
          <SidenavMenu shouldFlip>
            {children.map((child) => {
              return (
                <CustomSizenavItem key={child.id} isMenu={true} {...child} />
              )
            })}
          </SidenavMenu>
        ) : (
          <></>
        )}
      </Sidenav.Item>
    )
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
        {items.map((item) => {
          return (
            <a
              onClick={(e) => {
                handleOnClick(e, item.id)
              }}
              key={item.id}
              href='#'
              style={{color: 'inherit', textDecoration: 'none'}}
            >
              <CustomSizenavItem key={item.id} {...item} />
            </a>
          )
        })}
        <Sidenav.Divider />
        <Sidenav.Item css={{marginTop: 'auto'}}>
          <Icon icon={faBank}></Icon>
          <span>Placeholder</span>
        </Sidenav.Item>
      </Sidenav>
      {/* <Sidenav
        css={{
          height: '800px',
          position: 'absolute',
          left: '200px',
          backgroundColor: '$primaryBg',
          top: '0px',
          zIndex: 1,
          '& .Sidenav-item-active': {
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
            <Sidenav.Item
              isActive={currentPage === item.id}
              css={{
                '&:hover': {
                  color: '$danger',
                },
              }}
            >
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
      </Sidenav> */}
    </Row>
  )
}
