import {Box} from '@comfortdelgro/react-compass'
import Header from 'components/Header'
import SideMenu from 'components/Header/components/SideMenu'
import {map} from 'lodash'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {routes} from 'utils/constants'
import SidenavContext from 'utils/contexts/SideNav'
import {useIsTabletScreen} from 'utils/hooks/useMediaQuery'
import {TSideNavItem} from 'utils/types'

export default function Layout({children, handleChangeThemeMode}: any) {
  const isTabletScreen = useIsTabletScreen()
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

  const isShowSideBar = !isTabletScreen && router.pathname !== '/'

  return (
    <SidenavContext.Provider value={sidenav}>
      <Box css={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Header handleChangeThemeMode={handleChangeThemeMode} />
        <Box
          id='document'
          css={{
            width: '100%',
            height: 'calc(100vh - 54px)',
            display: 'grid',
            gridTemplateColumns: isShowSideBar ? '300px 1fr' : '1fr',
          }}
        >
          {isShowSideBar && <SideMenu handleExpand={handleExpandSidenav} />}
          <Box css={{overflow: 'auto'}}>{children}</Box>
        </Box>
      </Box>
    </SidenavContext.Provider>
  )
}
