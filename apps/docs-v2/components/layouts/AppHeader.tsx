import Compass from '@comfortdelgro/compass-icons/react/colorful/compass'
import Github from '@comfortdelgro/compass-icons/react/github'
import {Box, Button, Navbar, Typography} from '@comfortdelgro/react-compass'
import NavbarActions from '@comfortdelgro/react-compass/navbar/navbar-actions'
import {NavbarLinks} from '@comfortdelgro/react-compass/navbar/navbar-links.styles'
import {NavbarSeperator} from '@comfortdelgro/react-compass/navbar/navbar-seperator.style'
import useMediaQuery from '@mui/material/useMediaQuery'
import {DeferredAppSearch} from 'components/common/AppFrame'
import ThemeModeToggle from 'components/header/ThemeModeToggle'
import * as React from 'react'

interface AppHeaderProps {
  gitHubRepository?: string
}

export default function AppHeader(props: AppHeaderProps) {
  const {gitHubRepository = 'https://github.com/comfortdelgro/compass-design'} =
    props
  const [mode, setMode] = React.useState<string | null>(null)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const handleChangeThemeMode = (checked: boolean) => {
    const paletteMode = checked ? 'dark' : 'light'
    setMode(paletteMode)

    try {
      localStorage.setItem('mui-mode', paletteMode)
    } catch (error) {
      // do nothing
    }
    // changeTheme({paletteMode})
  }

  return (
    <Navbar>
      <Navbar.Brand>
        <Box css={{display: 'flex', alignItems: 'center'}}>
          <Compass width={'35px'} height={'35px'} />
          <Typography.Header
            variant='header4'
            css={{color: 'white', marginLeft: 10, fontWeight: 'bold'}}
          >
            REACT COMPASS
          </Typography.Header>
        </Box>
      </Navbar.Brand>
      <NavbarLinks>
        <a href='/getting-started/'>
          <Button>Document</Button>
        </a>
      </NavbarLinks>
      <NavbarSeperator />
      <NavbarActions
        css={{
          '.default-navbar-actions': {
            gap: 10,
          },
        }}
      >
        <DeferredAppSearch />
        <a href={gitHubRepository} target='_blank'>
          <Button
            variant='primary'
            leftIcon={<Github />}
            css={{
              border: '1px solid white',
              height: 34,
              width: 34,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '.left': {
                marginRight: '0 !important',
              },
            }}
          ></Button>
        </a>
        <ThemeModeToggle
          checked={mode === 'system' ? prefersDarkMode : mode === 'dark'}
          onChange={handleChangeThemeMode}
        />
      </NavbarActions>
    </Navbar>
  )
}
