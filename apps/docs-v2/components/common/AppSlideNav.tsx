import ArrowDown from '@comfortdelgro/compass-icons/react/arrow-down'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import Compass from '@comfortdelgro/compass-icons/react/colorful/compass'
import {
  Box,
  Flexbox,
  Icon,
  MenuList,
  MenuListDropdown,
  Sidenav,
  Typography,
} from '@comfortdelgro/react-compass'

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

  const CustomSidenavItem = (props: ItemType & {isMenu?: boolean}) => {
    const {id, icon, title, isMenu} = props
    return (
      <>
        <Sidenav.Item
          isActive={isMenu ? false : currentPage === id}
          css={{marginBottom: '$3 !important', overflow: 'initial'}}
        >
          {icon ? <Icon icon={icon}></Icon> : <></>}
          <Flexbox css={{justifyContent: 'space-between', width: '100%'}}>
            {title && <span>{title}</span>}
            {currentPage === id ? (
              <ArrowDown style={{width: 15, height: 15}} />
            ) : (
              <ArrowRight style={{width: 15, height: 15}} />
            )}
          </Flexbox>
        </Sidenav.Item>
        <Box css={{padding: '0 $4'}}>
          <MenuList
            css={{
              overflow: 'initial',
              width: '100%',
              borderRadius: 8,
              borderRight: 'none',
            }}
          >
            <MenuListDropdown>
              <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
              <MenuListDropdown.Item isActive>Menu</MenuListDropdown.Item>
              <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
              <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
              <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
              <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
              <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
            </MenuListDropdown>
          </MenuList>
        </Box>
      </>
    )
  }

  return (
    <Sidenav
      css={{
        height: '100vh',
        position: 'relative',
        background: '$white',
        width: 312,
        overflowY: 'scroll',
        '.sidenav-item-title': {
          width: '100%',
        },
      }}
      expand={true}
      delay={200}
    >
      <Sidenav.Item css={{width: '100%', overflow: 'initial'}}>
        <Compass style={{width: 28, height: 28}} />
        <Typography.Header variant='header3' css={{marginBottom: 5}}>
          React Compass
        </Typography.Header>
      </Sidenav.Item>
      <Sidenav.Divider />
      {items.map((item) => {
        return <CustomSidenavItem key={item.id} {...item} />
      })}
      <Sidenav.Divider />
    </Sidenav>
  )
}

export default AppSideNav
