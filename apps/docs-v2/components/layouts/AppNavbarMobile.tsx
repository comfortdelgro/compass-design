import AlignRight from '@comfortdelgro/compass-icons/react/align-right'
import {Box, Button, Drawer, Icon} from '@comfortdelgro/react-compass'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import routes from 'constants/routes'
import SidenavContext from 'contexts/SideNav'
import {map} from 'lodash'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {TSideNavItem} from 'types/common'
import {DeferredAppSearch} from './DocsAppFrame'

export default function AppNavbarMobile(props: any) {
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
        <AlignRight />
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
        position='right'
      >
        <Box
          padding='7px $3'
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'sticky',
            top: 0,
            zIndex: 99,
            background: '$background',
          }}
        >
          <Button
            variant='ghost'
            onClick={() => setIsShowDrawer(false)}
            css={{padding: '$1'}}
          >
            <Icon icon={faClose} />
          </Button>
        </Box>

        <Box
          css={{
            padding: '$3',
            display: 'flex',
            gap: '$1',
            flexDirection: 'column',
          }}
        >
          <DeferredAppSearch />
          <Link href='/foundation/overview' passHref legacyBehavior>
            <Button variant='secondary' href='/foundation/overview'>
              Document
            </Button>
          </Link>
          <Link
            href='https://comfortdelgro.github.io/compass-design/ladle/'
            target='_blank'
            passHref
            legacyBehavior
          >
            <Button
              variant='secondary'
              href='https://comfortdelgro.github.io/compass-design/ladle/'
            >
              Ladle
            </Button>
          </Link>
          <Link href='/products' passHref legacyBehavior>
            <Button variant='secondary' href='/products'>
              Products
            </Button>
          </Link>
        </Box>
      </Drawer>
    </SidenavContext.Provider>
  )
}
