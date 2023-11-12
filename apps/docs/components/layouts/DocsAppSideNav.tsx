import ArrowDown from '@comfortdelgro/compass-icons/react/arrow-down'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import {
  Box,
  Flexbox,
  Icon,
  MenuList,
  MenuListDropdown,
  Sidenav,
} from '@comfortdelgro/react-compass-old'

import {useSidenavContext} from 'contexts/SideNav'
import {isNil} from 'lodash'
import Link from 'next/link'
import {useCallback} from 'react'
import {TSideNavItem} from 'types/common'

type TDocsAppSideNav = {
  handleExpandSidenav: (path: string) => void
  onClickItem?: () => void
}

const DocsAppSideNav = (props: TDocsAppSideNav) => {
  const {handleExpandSidenav, onClickItem} = props
  const sideNavs = useSidenavContext()

  return (
    <Sidenav
      css={{
        height: '93vh',
        position: 'relative',
        background: '$background',
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
            onClickItem={onClickItem}
          />
        )
      })}
    </Sidenav>
  )
}

type TCustomSideNavItem = {
  handleExpandSidenav: (path: string) => void
  onClickItem?: () => void
} & TSideNavItem

const CustomSidenavItem = (props: TCustomSideNavItem) => {
  const {
    icon,
    title,
    children,
    isExpanded,
    pathname,
    handleExpandSidenav,
    onClickItem,
  } = props

  const handleClickSidenav = () => {
    if (isNil(isExpanded)) return
    handleExpandSidenav(pathname)
  }

  const handleOnClickItem = useCallback(() => {
    onClickItem && onClickItem()
  }, [onClickItem])

  return (
    <>
      <Sidenav.Item
        isActive={isExpanded}
        // @ts-ignore
        onClick={handleClickSidenav}
        css={{
          marginBottom: '0 !important',
          overflow: 'initial',
          minHeight: 40,
        }}
      >
        {icon ? <Icon icon={icon}></Icon> : <></>}
        <Flexbox css={{justifyContent: 'space-between', width: '100%'}}>
          {title && <span style={{fontSize: 16}}>{title}</span>}
          {isExpanded ? (
            <ArrowDown style={{width: 15, height: 15}} />
          ) : (
            <ArrowRight style={{width: 15, height: 15}} />
          )}
        </Flexbox>
      </Sidenav.Item>

      {isExpanded && children && children.length > 0 && (
        <Box>
          <MenuList
            css={{
              overflow: 'initial',
              padding: '$1 $4',
              width: '100%',
              borderRadius: 8,
              border: 'none',
              background: 'none',
              fontWeight: 600,
              '.active': {
                transition: 'all .3s',
                background: '$cdgBlue20',
                color: '$cdgBlue100',
              },
            }}
          >
            <MenuListDropdown>
              {children.map((child, index) => (
                <Link
                  key={`${child.pathname}${index}`}
                  href={child.pathname}
                  style={{textDecoration: 'none'}}
                  onClick={handleOnClickItem}
                >
                  <MenuListDropdown.Item
                    key={child.pathname}
                    isActive={child.isActive}
                    css={{
                      '&:hover': {
                        background: '$cdgBlue10',
                        color: '$cdgBlue80',
                        transition: 'all .2s',
                      },
                    }}
                    className={child.isActive ? 'active' : ''}
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
