import GitHubIcon from '@mui/icons-material/GitHub'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import GlobalStyles from '@mui/material/GlobalStyles'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import {styled} from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import useMediaQuery from '@mui/material/useMediaQuery'
import {DeferredAppSearch} from 'components/common/AppFrame'
import HeaderNavBar from 'components/header/HeaderNavBar'
import HeaderNavDropdown from 'components/header/HeaderNavDropdown'
import ThemeModeToggle from 'components/header/ThemeModeToggle'
import SvgMuiLogomark from 'components/icons/SvgMuiLogomark'
import Link from 'next/link'
import * as React from 'react'
import {useTranslate} from 'utils/i18n'

const Header = styled('header')(({theme}) => [
  {
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backdropFilter: 'blur(8px)',
    boxShadow: `inset 0px -1px 1px palette.grey[100]`,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
])

const HEIGHT = 56

interface AppHeaderProps {
  gitHubRepository?: string
}

export default function AppHeader(props: AppHeaderProps) {
  const {gitHubRepository = 'https://github.com/mui'} = props
  const [mode, setMode] = React.useState<string | null>(null)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const t = useTranslate()

  React.useEffect(() => {
    let initialMode = 'system'
    try {
      initialMode = localStorage.getItem('mui-mode') || initialMode
    } catch (error) {
      // do nothing
    }
    setMode(initialMode)
  }, [])

  const handleChangeThemeMode = (checked: boolean) => {
    const paletteMode = checked ? 'dark' : 'light'
    setMode(paletteMode)

    try {
      localStorage.setItem('mui-mode', paletteMode) // syncing with homepage, can be removed once all pages are migrated to CSS variables
    } catch (error) {
      // do nothing
    }
    // changeTheme({paletteMode})
  }

  return (
    <Header>
      <GlobalStyles
        styles={{
          ':root': {
            '--MuiDocs-header-height': `${HEIGHT}px`,
          },
        }}
      />
      <Container
        sx={{display: 'flex', alignItems: 'center', minHeight: HEIGHT}}
      >
        <Box
          component={Link}
          href='/'
          aria-label='Go to homepage'
          sx={{lineHeight: 0, mr: 2}}
        >
          <SvgMuiLogomark width={30} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'initial'}}}>
          <HeaderNavBar />
        </Box>
        <Box sx={{ml: 'auto'}} />
        <Stack direction='row' spacing={1}>
          <DeferredAppSearch />
          <Tooltip title={t('appFrame.github')} enterDelay={300}>
            <IconButton
              component='a'
              color='primary'
              href={gitHubRepository}
              target='_blank'
              rel='noopener'
              data-ga-event-category='header'
              data-ga-event-action='github'
            >
              <GitHubIcon fontSize='small' />
            </IconButton>
          </Tooltip>
          {mode !== null ? (
            <ThemeModeToggle
              checked={mode === 'system' ? prefersDarkMode : mode === 'dark'}
              onChange={handleChangeThemeMode}
            />
          ) : null}
        </Stack>
        <Box sx={{display: {md: 'none'}, ml: 1}}>
          <HeaderNavDropdown />
        </Box>
      </Container>
    </Header>
  )
}
