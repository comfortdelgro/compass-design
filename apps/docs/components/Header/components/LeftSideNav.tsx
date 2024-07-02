import AlignLeft from '@comfortdelgro/compass-icons/react/align-left'
import CrossIcon from '@comfortdelgro/compass-icons/react/cross'
import {Box, Button, Drawer, Typography} from '@comfortdelgro/react-compass'
import {map} from 'lodash'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {getStaticPath} from 'utils'
import {routes} from 'utils/constants/routes'
import SidenavContext from 'utils/contexts/SideNav'
import {TSideNavItem} from 'utils/types'
import SideMenu from './SideMenu'

export default function LeftSideNav() {
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  const [sidenav, setSidenav] = useState<TSideNavItem[]>([])
  const router = useRouter()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        css={{
          width: 34,
          padding: 'var(--cdg-spacing-1)',
          span: {
            padding: 0,
          },
          svg: {
            width: 'fit-content !important',
          },
        }}
        isSquare
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
        <Drawer.Header css={{padding: 8}}>
          <Box css={{display: 'flex', alignItems: 'center'}}>
            <Image
              src={getStaticPath('/static/icons/compass.svg')}
              alt='banner'
              width={30}
              height={30}
            />
            <Typography.Header
              variant='header4'
              css={{marginLeft: '10px', fontWeight: 'bold'}}
            >
              REACT COMPASS
            </Typography.Header>
          </Box>
          <Button
            css={{
              width: 32,
              padding: 'var(--cdg-spacing-1)',
              span: {
                padding: 0,
              },
              svg: {
                width: 'fit-content !important',
              },
            }}
            isSquare
            type='button'
            variant='ghost'
            onClick={() => setIsShowDrawer(false)}
          >
            <CrossIcon />
          </Button>
        </Drawer.Header>
        <SideMenu
          handleExpand={handleExpandSidenav}
          onClickItem={onClickItem}
        />
      </Drawer>
    </SidenavContext.Provider>
  )
}
