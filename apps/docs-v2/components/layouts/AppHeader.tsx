import Github from '@comfortdelgro/compass-icons/react/github'
import {Box, Button, Navbar, Typography} from '@comfortdelgro/react-compass'
import NavbarActions from '@comfortdelgro/react-compass/navbar/navbar-actions'
import {NavbarLinks} from '@comfortdelgro/react-compass/navbar/navbar-links.styles'
import {NavbarSeperator} from '@comfortdelgro/react-compass/navbar/navbar-seperator.style'
import ThemeModeToggle from 'components/header/ThemeModeToggle'
import SvgLogo from 'components/icons/SvgLogo'
import {DeferredAppSearch} from 'components/layouts/DocsAppFrame'
import {ETheme} from 'constants/index'
import {useThemeContext} from 'contexts/Theme'
import Link from 'next/link'

interface AppHeaderProps {
  gitHubRepository?: string
  handleChangeThemeMode: () => void
}

export default function AppHeader(props: AppHeaderProps) {
  const {
    gitHubRepository = 'https://github.com/comfortdelgro/compass-design',
    handleChangeThemeMode,
  } = props

  const mode = useThemeContext()

  return (
    <Navbar css={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Navbar.Brand>
        <Link href='/' style={{textDecoration: 'none'}}>
          <Box css={{display: 'flex', alignItems: 'center'}}>
            <SvgLogo />
            <Typography.Header
              variant='header4'
              css={{color: 'white', marginLeft: 10, fontWeight: 'bold'}}
            >
              REACT COMPASS
            </Typography.Header>
          </Box>
        </Link>
      </Navbar.Brand>
      <NavbarLinks>
        <Link href='/getting-started/overview'>
          <Button>Document</Button>
        </Link>
        <Link href='https://comfortdelgro.github.io/compass-design/ladle/'>
          <Button>Ladle</Button>
        </Link>
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
          checked={mode === ETheme.Dark}
          onChange={handleChangeThemeMode}
        />
      </NavbarActions>
    </Navbar>
  )
}
