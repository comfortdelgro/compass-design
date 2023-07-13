import {Box} from '@comfortdelgro/react-compass'
import MarkdownLinks from 'components/common/MarkdownLinks'
import routes from 'constants/routes'
import SidenavContext from 'contexts/SideNav'
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

  return (
    <React.Fragment>
      {mounted ? (
        <React.Suspense fallback={<Box>Error</Box>}>
          <AppSearch />
        </React.Suspense>
      ) : (
        <Box />
      )}
    </React.Fragment>
  )
}

export default function DocsAppFrame(props: {children: React.ReactNode}) {
  const {children} = props
  const router = useRouter()

  const [sidenav, setSidenav] = React.useState<TSideNavItem[]>([])

  React.useEffect(() => {
    const [_, parentPath = 'getting-started', childrenPath = 'overview'] =
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

  return (
    <SidenavContext.Provider value={sidenav}>
      <MarkdownLinks />
      <Box
        css={{
          width: '100vw',
          height: 'calc(100vh - 54px)',
          overflow: 'hidden',
          background: '$background',
        }}
      >
        <Box css={{width: '100%', display: 'flex'}}>
          <DocsAppSideNav handleExpandSidenav={handleExpandSidenav} />
          <Box
            css={{
              display: 'flex',
              height: 'calc(100vh - 51px)',
              overflowY: 'hidden',
              width: '100%',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </SidenavContext.Provider>
  )
}
