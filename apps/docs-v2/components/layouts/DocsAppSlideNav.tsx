import ArrowDown from '@comfortdelgro/compass-icons/react/arrow-down'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import {
  Box,
  Flexbox,
  Icon,
  MenuList,
  MenuListDropdown,
  Sidenav,
} from '@comfortdelgro/react-compass'

import routes from 'constants/routes'
import Link from 'next/link'
import React, {useState} from 'react'
import {TPage} from 'types/common'

const AppSideNav: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('/getting-started')

  const CustomSidenavItem = (props: TPage) => {
    const {pathname, icon, title, children} = props
    return (
      <>
        <Sidenav.Item
          isActive={currentPage === pathname}
          css={{marginBottom: '$3 !important', overflow: 'initial'}}
        >
          {icon ? <Icon icon={icon}></Icon> : <></>}
          <Flexbox css={{justifyContent: 'space-between', width: '100%'}}>
            {title && <span>{title}</span>}
            {currentPage === pathname ? (
              <ArrowDown style={{width: 15, height: 15}} />
            ) : (
              <ArrowRight style={{width: 15, height: 15}} />
            )}
          </Flexbox>
        </Sidenav.Item>
        {children && children.length > 0 && (
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
                {children.map((child, index) => (
                  <Link
                    key={`${child.pathname}${index}`}
                    href={child.pathname}
                    style={{textDecoration: 'none'}}
                  >
                    <MenuListDropdown.Item key={child.pathname}>
                      {child.title}
                    </MenuListDropdown.Item>
                  </Link>
                ))}
              </MenuListDropdown>
            </MenuList>
          </Box>
        )}
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
        filter: 'none',
        '.sidenav-item-title': {
          width: '100%',
        },
      }}
      expand={true}
      delay={200}
    >
      {routes.map((item) => {
        return (
          <CustomSidenavItem key={`${item.pathname}${item.title}`} {...item} />
        )
      })}
      <Sidenav.Divider />
    </Sidenav>
  )
}

export default AppSideNav
