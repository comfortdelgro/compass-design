import {Button, Navbar} from '@comfortdelgro/react-compass'
import NavbarActions from '@comfortdelgro/react-compass/navbar/navbar-actions'
import {NavbarLinks} from '@comfortdelgro/react-compass/navbar/navbar-links.styles'
import {NavbarSeperator} from '@comfortdelgro/react-compass/navbar/navbar-seperator.style'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import useMediaQuery from '@mui/material/useMediaQuery'
import {DeferredAppSearch} from 'components/common/AppFrame'
import ThemeModeToggle from 'components/header/ThemeModeToggle'
import * as React from 'react'

interface AppHeaderProps {
  gitHubRepository?: string
}

export default function AppHeader(props: AppHeaderProps) {
  const {gitHubRepository = 'https://github.com/mui'} = props
  const [mode, setMode] = React.useState<string | null>(null)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

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
    <Navbar>
      <Navbar.Brand>
        <b>REACT COMPASS</b>
      </Navbar.Brand>
      <NavbarLinks>
        <a href='/getting-started/'>
          <Button>Document</Button>
        </a>
      </NavbarLinks>
      <NavbarSeperator />
      <NavbarActions>
        <DeferredAppSearch />
        <Tooltip title='Github' enterDelay={300}>
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
        <ThemeModeToggle
          checked={mode === 'system' ? prefersDarkMode : mode === 'dark'}
          onChange={handleChangeThemeMode}
        />
      </NavbarActions>
    </Navbar>
  )
}
