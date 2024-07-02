import ArrowDown from '@comfortdelgro/compass-icons/react/arrow-down'
import ArrowRight from '@comfortdelgro/compass-icons/react/arrow-right'
import {
  Box,
  Flexbox,
  Icon,
  MenuList,
  MenuListDropdown,
  MenuListDropdownItemProps,
  Sidenav,
} from '@comfortdelgro/react-compass'
import {isNil} from 'lodash'
import Link from 'next/link'
import {useCallback, useEffect, useRef, useState} from 'react'
import useSidenav from 'utils/hooks/useSideNav'
import {TSideNavItem} from 'utils/types'

interface Props {
  handleExpand: (path: string) => void
  onClickItem?: () => void
}

const SideMenu = (props: Props) => {
  const {handleExpand, onClickItem} = props
  const sideNavs = useSidenav()

  return (
    <Sidenav
      css={{
        paddingRight: 4,
        height: '100%',
        position: 'relative',
        backgroundColor: 'var(--cdg-color-background)',
        width: '100%',
        overflowY: 'scroll',
        filter: 'none',
      }}
      expand={true}
      delay={200}
    >
      {sideNavs.map((item) => {
        return (
          <SideMenuItem
            {...item}
            key={`${item.pathname}${item.title}`}
            handleExpand={handleExpand}
            onClickItem={onClickItem}
          />
        )
      })}
    </Sidenav>
  )
}

interface SideMenuItemProps extends TSideNavItem {
  handleExpand: (path: string) => void
  onClickItem?: () => void
}

const SideMenuItem = (props: SideMenuItemProps) => {
  const {
    icon,
    title,
    children,
    isExpanded: isExpandedProps,
    pathname,
    handleExpand,
    onClickItem,
  } = props

  const [isInternalExpanded, setInternalIsExpanded] = useState(isExpandedProps)

  const isExpanded = isInternalExpanded

  const handleClickSidenav = () => {
    if (isNil(isExpandedProps)) return
    setInternalIsExpanded((prev) => !prev)
    handleExpand(pathname)
  }

  const handleOnClickItem = useCallback(() => {
    onClickItem && onClickItem()
  }, [onClickItem])

  return (
    <>
      <button
        style={{
          margin: 0,
          padding: 0,
          border: 'none',
          fontFamily: 'unset',
          backgroundColor: 'transparent',
        }}
        onClick={handleClickSidenav}
      >
        <Sidenav.Item
          isActive={isExpanded}
          css={{
            marginBottom: '0 !important',
            overflow: 'initial',
            minHeight: 46,
            height: 'auto',
            '&.sidenav-item-active': {
              color: 'var(--cdg-color-cdgBlue100)',
            },
            '&:hover': {
              color: 'var(--cdg-color-cdgBlue100)',
            },
            '& .cdg-sidenav-item-icon svg': {
              width: '20px',
              height: '20px',
            },
          }}
        >
          {icon ? <Icon icon={icon} size='xs'></Icon> : <></>}
          <Flexbox
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {title && <span style={{fontSize: 16}}>{title}</span>}
            {isExpanded ? (
              <Box css={{width: 15, height: 15}}>
                <ArrowDown style={{width: 15, height: 15}} />
              </Box>
            ) : (
              <Box css={{width: 15, height: 15}}>
                <ArrowRight style={{width: 15, height: 15}} />
              </Box>
            )}
          </Flexbox>
        </Sidenav.Item>
      </button>
      {isExpanded && children && children.length > 0 && (
        <Box>
          <MenuList
            css={{
              overflow: 'initial',
              padding: 'var(--cdg-spacing-1) var(--cdg-spacing-4)',
              width: '100%',
              borderRadius: 8,
              border: 'none',
              background: 'none',
              fontWeight: 600,
              '.active': {
                transition: 'all .3s',
                background: 'var(--cdg-color-cdgBlue20)',
                color: 'var(--cdg-color-cdgBlue100)',
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
                  <MenuListDropdownItem
                    tabIndex={-1}
                    key={child.pathname}
                    isActive={child.isActive}
                    className={child.isActive ? 'active' : ''}
                    css={{
                      '&:hover': {
                        transition: 'all .3s',
                        background: 'var(--cdg-color-cdgBlue20)',
                        color: 'var(--cdg-color-cdgBlue100)',
                      },
                    }}
                  >
                    {child.title}
                  </MenuListDropdownItem>
                </Link>
              ))}
            </MenuListDropdown>
          </MenuList>
        </Box>
      )}
    </>
  )
}

const MenuListDropdownItem = (props: MenuListDropdownItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (props.isActive) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
  }, [props.isActive])
  return <MenuListDropdown.Item ref={ref} {...props} />
}

export default SideMenu
