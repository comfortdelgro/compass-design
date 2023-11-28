import {Box, Button, Navbar, Typography} from '@comfortdelgro/react-compass'
import ThemeModeToggle from 'components/header/ThemeModeToggle'
import SvgGithub from 'components/icons/SvgGithub'
import SvgLogo from 'components/icons/SvgLogo'
import {DeferredAppSearch} from 'components/layouts/DocsAppFrame'
import {ETheme, GITHUB_REPOSITORY} from 'constants/index'
import {useThemeContext} from 'contexts/Theme'
import {useIsMobileScreen, useIsTabletScreen} from 'hooks'
import Link from 'next/link'
import AppNavbarMobile from './AppNavbarMobile'
import DocsAppSideNavMobile from './DocsAppSideNavMobile'

interface AppHeaderProps {
  handleChangeThemeMode: () => void
}

export default function AppHeader(props: AppHeaderProps) {
  const {handleChangeThemeMode} = props

  const mode = useThemeContext()
  const isTabletScreen = useIsTabletScreen()
  const isMobileScreen = useIsMobileScreen()

  return (
    <Navbar css={{maxWidth: '100vw', overflow: 'hidden', gap: '$1'}}>
      {isTabletScreen && <DocsAppSideNavMobile />}
      <Navbar.Brand>
        <Link href='/' style={{textDecoration: 'none'}}>
          <Box css={{display: 'flex', alignItems: 'center'}}>
            <SvgLogo />
            {!isMobileScreen && (
              <Typography.Header
                variant='header4'
                css={{color: 'white', marginLeft: 10, fontWeight: 'bold'}}
              >
                REACT COMPASS
              </Typography.Header>
            )}
          </Box>
        </Link>
      </Navbar.Brand>
      {!isTabletScreen && (
        <Navbar.Links>
          <Link href='/foundation/overview'>
            <Button>Document</Button>
          </Link>
          <Link
            href='https://comfortdelgro.github.io/compass-design/ladle/'
            target='_blank'
          >
            <Button>Ladle</Button>
          </Link>
        </Navbar.Links>
      )}
      <Navbar.Separator />
      <Navbar.Actions
        css={{
          '.default-navbar-actions': {
            justifyContent: 'flex-end',
            margin: 0,
            gap: 10,
          },
        }}
      >
        <DeferredAppSearch />
        {!isTabletScreen && (
          <a href={GITHUB_REPOSITORY} target='_blank'>
            <Button
              variant='primary'
              css={{
                border: '1px solid $cdgBlue60',
                height: 34,
                width: 34,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SvgGithub fill='white' />
            </Button>
          </a>
        )}
        <ThemeModeToggle
          checked={mode === ETheme.Dark}
          onChange={handleChangeThemeMode}
        />
        {isTabletScreen && <AppNavbarMobile />}
      </Navbar.Actions>
    </Navbar>
  )
}
