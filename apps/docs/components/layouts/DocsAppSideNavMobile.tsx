import AlignLeft from '@comfortdelgro/compass-icons/react/align-left'
import {
  Box,
  Button,
  Drawer,
  Icon,
  Navbar,
  Typography,
} from '@comfortdelgro/react-compass'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import SvgLogo from 'components/icons/SvgLogo'
import routes from 'constants/routes'
import SidenavContext from 'contexts/SideNav'
import {map} from 'lodash'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {TSideNavItem} from 'types/common'
import DocsAppSideNav from './DocsAppSideNav'

export default function DocsAppSideNavMobile(props: any) {
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  const [sidenav, setSidenav] = useState<TSideNavItem[]>([])
  const router = useRouter()

  useEffect(() => {
    const [_, parentPath = 'foundation', childrenPath = 'overview'] =
      router.route.split('/')
    const newSidenav = map(routes, (route) => {
      if (route.pathname === `/${parentPath}`) {
        return {
          ...route,
          isExpanded: true,
          children: map(route.children, (child) => {
            if (child.pathname === `/${childrenPath}`) {
              return {
                ...child,
                pathname: `${route.pathname}${child.pathname}`,
                isActive: true,
              }
            }
            return {
              ...child,
              pathname: `${route.pathname}${child.pathname}`,
            }
          }),
        }
      }
      return {
        ...route,
        isExpanded: false,
        children: map(route.children, (child) => {
          return {
            ...child,
            pathname: `${route.pathname}${child.pathname}`,
          }
        }),
      }
    })

    setSidenav(newSidenav)
  }, [router])

  const handleExpandSidenav = (path: string) => {
    const newSidenav = map(sidenav, (sideNavItem) => {
      if (path === sideNavItem.pathname) {
        return {
          ...sideNavItem,
          isExpanded: true,
        }
      }
      return {
        ...sideNavItem,
        isExpanded: false,
      }
    })
    setSidenav(newSidenav)
  }

  const onClickItem = () => {
    setIsShowDrawer(false)
  }

  return (
    <SidenavContext.Provider value={sidenav}>
      <Button
        css={{padding: '$1'}}
        type='button'
        onClick={() => setIsShowDrawer(true)}
      >
        <AlignLeft />
      </Button>
      <Drawer
        css={{
          width: 312,
          article: {
            padding: 0,
          },
        }}
        open={isShowDrawer}
        onClose={() => setIsShowDrawer(false)}
        position='left'
      >
        <Box
          padding='7px $3'
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 99,
            background: '$background',
          }}
        >
          <Navbar.Brand>
            <Link href='/' style={{textDecoration: 'none'}}>
              <Box css={{display: 'flex', alignItems: 'center'}}>
                <SvgLogo />
                <Typography.Header
                  variant='header4'
                  css={{marginLeft: 10, fontWeight: 'bold'}}
                >
                  REACT COMPASS
                </Typography.Header>
              </Box>
            </Link>
          </Navbar.Brand>
          <Button
            variant='ghost'
            onClick={() => setIsShowDrawer(false)}
            css={{padding: '$1'}}
          >
            <Icon icon={faClose} />
          </Button>
        </Box>

        <DocsAppSideNav
          handleExpandSidenav={handleExpandSidenav}
          onClickItem={onClickItem}
        />
      </Drawer>
    </SidenavContext.Provider>
  )
}
