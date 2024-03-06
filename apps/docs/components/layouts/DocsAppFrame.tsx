import {Box} from '@comfortdelgro/react-compass'
import {CommonHeader} from 'components/common/CommonHeader'
import MarkdownLinks from 'components/common/MarkdownLinks'
import routes from 'constants/routes'
import SidenavContext from 'contexts/SideNav'
import {useIsTabletScreen} from 'hooks'
import {map} from 'lodash'
import {useRouter} from 'next/router'
import * as React from 'react'
import {TSideNavItem} from 'types/common'
import DocsAppSideNav from './DocsAppSideNav'

const AppSearch = React.lazy(() => import('./AppSearch'))
export function DeferredAppSearch() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return <React.Fragment>{mounted ? <AppSearch /> : <Box />}</React.Fragment>
}

export default function DocsAppFrame(props: {children: React.ReactNode}) {
  const {children} = props
  const router = useRouter()
  const isTabletScreen = useIsTabletScreen()

  const [sidenav, setSidenav] = React.useState<TSideNavItem[]>([])

  React.useEffect(() => {
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
  }, [])

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
      <MarkdownLinks />
      <Box
        css={{
          width: '100vw',
          height: 'calc(100vh - 54px)',
          overflow: 'hidden',
          background: 'var(--cdg-color-background)',
          transition: 'background 0.25s'
        }}
      >
        <Box css={{width: '100%', display: 'flex'}}>
          {!isTabletScreen && (
            <DocsAppSideNav handleExpandSidenav={handleExpandSidenav} />
          )}
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
