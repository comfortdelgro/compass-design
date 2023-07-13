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

import {useSidenavContext} from 'contexts/SideNav'
import {isNil} from 'lodash'
import Link from 'next/link'
import {TSideNavItem} from 'types/common'

type TDocsAppSideNav = {
  handleExpandSidenav: (path: string) => void
}

const DocsAppSideNav = (props: TDocsAppSideNav) => {
  const {handleExpandSidenav} = props
  const sideNavs = useSidenavContext()

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
      {sideNavs.map((item) => {
        return (
          <CustomSidenavItem
            key={`${item.pathname}${item.title}`}
            {...item}
            handleExpandSidenav={handleExpandSidenav}
          />
        )
      })}
      <Sidenav.Divider />
    </Sidenav>
  )
}

type TCustomSideNavItem = {
  handleExpandSidenav: (path: string) => void
} & TSideNavItem

const CustomSidenavItem = (props: TCustomSideNavItem) => {
  const {icon, title, children, isExpanded, pathname, handleExpandSidenav} =
    props

  const handleClickSidenav = () => {
    if (isNil(isExpanded)) return
    handleExpandSidenav(pathname)
  }

  return (
    <>
      <Sidenav.Item
        isActive={isExpanded}
        // @ts-ignore
        onClick={handleClickSidenav}
        css={{marginBottom: '$3 !important', overflow: 'initial'}}
      >
        {icon ? <Icon icon={icon}></Icon> : <></>}
        <Flexbox css={{justifyContent: 'space-between', width: '100%'}}>
          {title && <span>{title}</span>}
          {isExpanded ? (
            <ArrowDown style={{width: 15, height: 15}} />
          ) : (
            <ArrowRight style={{width: 15, height: 15}} />
          )}
        </Flexbox>
      </Sidenav.Item>
      {isExpanded && children && children.length > 0 && (
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
                  <MenuListDropdown.Item
                    key={child.pathname}
                    isActive={child.isActive}
                  >
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

export default DocsAppSideNav
