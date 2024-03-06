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
import styles from './styles/Menulist.module.css'
import sidenavStyles from './styles/Sidenav.module.css'
import { useSidenavContext } from 'contexts/SideNav'
import { isNil } from 'lodash'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { TSideNavItem } from 'types/common'

type TDocsAppSideNav = {
  handleExpandSidenav: (path: string) => void
  onClickItem?: () => void
}

const DocsAppSideNav = (props: TDocsAppSideNav) => {
  const { handleExpandSidenav, onClickItem } = props
  const sideNavs = useSidenavContext()

  return (
    <Sidenav
      css={{
        '.sidenav-item-title': {
          width: '100%',
        },
      }}
      className={sidenavStyles.CdgSidenav}
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
    isExpanded: isExpandedProps,
    pathname,
    handleExpandSidenav,
    onClickItem,
  } = props

  const [isInternalExpanded, setInternalIsExpanded] = useState(isExpandedProps)

  const isExpanded = isInternalExpanded

  const handleClickSidenav = () => {
    if (isNil(isExpandedProps)) return
    setInternalIsExpanded((prev) => !prev)
    handleExpandSidenav(pathname)
  }

  const handleOnClickItem = useCallback(() => {
    onClickItem && onClickItem()
  }, [onClickItem])

  return (
    <>
      <button
        style={{ margin: 0, padding: 0, border: 'none', fontFamily: 'unset', backgroundColor: 'transparent' }}
        onClick={handleClickSidenav}
      >
        <Sidenav.Item
          isActive={isExpanded}
          // @ts-ignore
          css={{
            marginBottom: '0 !important',
            overflow: 'initial',
            minHeight: 46,
            height: 'auto',
            '&.sidenav-item-active, &:hover': {
              color: 'var(--cdg-color-cdgBlue100)'
            },
            '& .cdg-sidenav-item-icon svg': {
              width: '20px',
              height: '20px'
            },
          }}
        >
          {icon ? <Icon icon={icon} size='xs'></Icon> : <></>}
          <Flexbox css={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            {title && <span style={{ fontSize: 16 }}>{title}</span>}
            {isExpanded ? (
              <Box css={{ width: 15, height: 15 }}>
                <ArrowDown style={{ width: 15, height: 15 }} />
              </Box>
            ) : (
              <Box css={{ width: 15, height: 15 }}>
                <ArrowRight style={{ width: 15, height: 15 }} />
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
                  style={{ textDecoration: 'none' }}
                  onClick={handleOnClickItem}
                >
                  <MenuListDropdownItem
                    key={child.pathname}
                    isActive={child.isActive}
                    tabIndex={-1}
                    className={`${styles.CdgMenuListItem} ${child.isActive ? 'active' : ''}`}
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
  const { css = {}, ...delegated } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (props.isActive) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
    }
  }, [])

  return <MenuListDropdown.Item ref={ref} css={css} {...delegated} />
}

export default DocsAppSideNav
