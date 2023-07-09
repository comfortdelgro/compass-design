import NProgressBar from '@mui/docs/NProgressBar'
import GitHubIcon from '@mui/icons-material/GitHub'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import {styled} from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import {debounce} from '@mui/material/utils'
import AppNavDrawer from 'components/common/AppNavDrawer'
import MarkdownLinks from 'components/common/MarkdownLinks'
import PageContext from 'components/common/PageContext'
import SkipLink from 'components/common/SkipLink'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import * as React from 'react'
import {useTranslate} from 'utils/i18n'

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

const RootDiv = styled('div')(({theme}) => {
  return {
    display: 'flex',
  }
})

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'disablePermanent',
})(({disablePermanent, theme}) => {
  return {
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create('width'),
    ...(disablePermanent && {
      boxShadow: 'none',
    }),
    ...(!disablePermanent && {
      [theme.breakpoints.up('lg')]: {
        width: 'calc(100% - var(--MuiDocs-navDrawer-width))',
      },
    }),
    boxShadow: 'none',
    backdropFilter: 'blur(8px)',
    borderStyle: 'solid',
    borderColor: (theme.vars || theme).palette.grey[100],
    borderWidth: 0,
    borderBottomWidth: 'thin',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: (theme.vars || theme).palette.grey[800],
  }
})

const StyledAppNavDrawer = styled(AppNavDrawer)(({disablePermanent, theme}) => {
  if (disablePermanent) {
    return {}
  }
  return {
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: 'var(--MuiDocs-navDrawer-width)',
    },
  }
})

export const HEIGHT = 64

export default function AppFrame(props) {
  const {children, disableDrawer = false, className} = props
  const t = useTranslate()

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const {activePage} = React.useContext(PageContext)

  const disablePermanent =
    activePage?.disableDrawer === true || disableDrawer === true

  return (
    <RootDiv className={className}>
      <NextNProgressBar />
      <CssBaseline />
      <SkipLink />
      <MarkdownLinks />
      <StyledAppBar disablePermanent={disablePermanent}>
        <GlobalStyles
          styles={{
            ':root': {
              '--MuiDocs-header-height': `${HEIGHT}px`,
            },
          }}
        />
        <Toolbar variant='dense' disableGutters>
          <Stack direction='row' spacing='10px'>
            <DeferredAppSearch />
            <Tooltip title={t('appFrame.github')} enterDelay={300}>
              <IconButton
                component='a'
                color='primary'
                href={process.env.SOURCE_CODE_REPO}
                data-ga-event-category='header'
                data-ga-event-action='github'
              >
                <GitHubIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </StyledAppBar>
      <StyledAppNavDrawer
        disablePermanent={disablePermanent}
        onClose={() => setMobileOpen(false)}
        onOpen={() => setMobileOpen(true)}
        mobileOpen={mobileOpen}
      />
      {children}
    </RootDiv>
  )
}

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disableDrawer: PropTypes.bool,
}
