import {Box, Button, Navbar, Typography} from '@comfortdelgro/react-compass'
import NavbarActions from '@comfortdelgro/react-compass/navbar/navbar-actions'
import {NavbarLinks} from '@comfortdelgro/react-compass/navbar/navbar-links.styles'
import {NavbarSeperator} from '@comfortdelgro/react-compass/navbar/navbar-seperator.style'
import ThemeModeToggle from 'components/header/ThemeModeToggle'
import SvgGithub from 'components/icons/SvgGithub'
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
        <Link href='/foundation/overview' passHref legacyBehavior>
          <Button href='/foundation/overview'>Document</Button>
        </Link>
        <Link
          href='https://comfortdelgro.github.io/compass-design/ladle/'
          target='_blank'
          passHref
          legacyBehavior
        >
          <Button href='https://comfortdelgro.github.io/compass-design/ladle/'>
            Ladle
          </Button>
        </Link>
        <Link href='/products' passHref legacyBehavior>
          <Button href='/products'>Products</Button>
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
            css={{
              border: '1px solid white',
              height: 34,
              width: 34,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgGithub fill='white' />
          </Button>
        </a>
        <ThemeModeToggle
          checked={mode === ETheme.Dark}
          onChange={handleChangeThemeMode}
        />
      </NavbarActions>
    </Navbar>
  )
}
