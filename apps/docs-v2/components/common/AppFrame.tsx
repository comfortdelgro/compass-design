import {Box} from '@comfortdelgro/react-compass'
import AppNavDrawer from 'components/common/AppNavDrawer'
import MarkdownLinks from 'components/common/MarkdownLinks'
import AppHeader from 'components/layouts/AppHeader'
import * as React from 'react'

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

export default function AppFrame(props: {children: React.ReactNode}) {
  const {children} = props

  return (
    <>
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
