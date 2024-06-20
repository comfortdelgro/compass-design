import {Box} from '@comfortdelgro/react-compass'
import {map} from 'lodash'
import {useRouter} from 'next/router'
import * as React from 'react'
import {routes} from 'utils/constants/routes'
import SidenavContext from 'utils/contexts/SideNav'
import {useIsTabletScreen} from 'utils/hooks/useMediaQuery'
import {TSideNavItem} from 'utils/types'
import SideMenu from '../../Header/components/SideMenu'
import {CommonHeader} from './CommonHeader'

export default function DocsFrame(props: {children: React.ReactNode}) {
  const {children} = props
  const router = useRouter()
  const isTabletScreen = useIsTabletScreen()

  const [sidenav, setSidenav] = React.useState<TSideNavItem[]>([])

  React.useEffect(() => {
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
  }, [router.route])

  const handleExpandSidenav = (path: string) => {
    const newSidenav = map(sidenav, (sideNavItem) => {
      if (path === sideNavItem.pathname) {
        return {
          ...sideNavItem,
          isExpanded: !sideNavItem.isExpanded,
        }
      }
      return {
        ...sideNavItem,
        isExpanded: false,
      }
    })
    setSidenav(newSidenav)
  }

  return (
    <SidenavContext.Provider value={sidenav}>
      <Box
        css={{
          width: '100vw',
          height: 'calc(100vh - 54px)',
          overflow: 'hidden',
          background: 'var(--cdg-color-background)',
          transition: 'background 0.25s',
        }}
      >
        <Box css={{width: '100%', display: 'flex'}}>
          <Box
            css={{
              width: 320,
              height: 'calc(100vh - 54px)',
            }}
          >
            {!isTabletScreen && <SideMenu handleExpand={handleExpandSidenav} />}
          </Box>
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100vh - 51px)',
              minHeight: 'calc(100vh - 51px)',
              overflow: 'auto',
              width: '100%',
            }}
          >
            <CommonHeader />
            {children}
          </Box>
        </Box>
      </Box>
    </SidenavContext.Provider>
  )
}
