import {Box} from '@comfortdelgro/react-compass'
import NProgressBar from '@mui/docs/NProgressBar'
import {debounce} from '@mui/material/utils'
import AppNavDrawer from 'components/common/AppNavDrawer'
import MarkdownLinks from 'components/common/MarkdownLinks'
import AppHeader from 'components/layouts/AppHeader'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'
import * as React from 'react'

const nProgressStart = debounce(() => {
  NProgress.start()
}, 200)

const nProgressDone = () => {
  nProgressStart.clear()
  NProgress.done()
}

export function NextNProgressBar() {
  const router = useRouter()
  React.useEffect(() => {
    const handleRouteChangeStart = (url, {shallow}) => {
      if (!shallow) {
        nProgressStart()
      }
    }

    const handleRouteChangeDone = (url, {shallow}) => {
      if (!shallow) {
        nProgressDone()
      }
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeDone)
    router.events.on('routeChangeError', handleRouteChangeDone)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeDone)
      router.events.off('routeChangeError', handleRouteChangeDone)
    }
  }, [router])

  return <NProgressBar />
}

const AppSearch = React.lazy(() => import('components/common/AppSearch'))
export function DeferredAppSearch() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <React.Fragment>
      {mounted ? (
        <React.Suspense fallback={<Box />}>
          <AppSearch />
        </React.Suspense>
      ) : (
        <Box />
      )}
    </React.Fragment>
  )
}

export default function AppFrame(props) {
  const {children} = props

  return (
    <>
      <NextNProgressBar />
      <MarkdownLinks />
      <Box css={{maxWidth: '100vw'}}>
        <AppHeader />
        <Box
          css={{
            display: 'flex',
            maxHeight: 'calc(100vh - 51px)',
            overflowY: 'hidden',
          }}
        >
          <AppNavDrawer />
          {children}
        </Box>
      </Box>
    </>
  )
}
