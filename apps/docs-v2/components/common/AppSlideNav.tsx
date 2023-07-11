import Compass from '@comfortdelgro/compass-icons/react/colorful/compass'
import {Flexbox, Icon, Sidenav, Typography} from '@comfortdelgro/react-compass'

import {
  faFile,
  faSquarePen,
  faToggleOn,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'

interface ItemBase {
  id: number
  icon: IconDefinition
  title: string
}

interface ItemType extends ItemBase {
  children?: ItemType[]
}

const AppSideNav: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const items: ItemType[] = [
    {
      id: 1,
      icon: faFile,
      title: 'Getting Started',
    },
    {id: 2, icon: faToggleOn, title: 'Components'},
    {id: 3, icon: faSquarePen, title: 'Customization'},
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
      </Sidenav.Item>
    )
  }

  return (
    <Sidenav
      css={{
        height: '100vh',
        position: 'relative',
        background: '$white',
        width: 312,
      }}
      expand={true}
      delay={200}
    >
      <Sidenav.Item>
        <Flexbox css={{alignItems: 'center'}}>
          <Compass style={{width: 28, height: 28}} />
          <Typography.Header variant='header3'>React Compass</Typography.Header>
        </Flexbox>
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
    </Sidenav>
  )
}

export default AppSideNav
