import GithubIcon from '@comfortdelgro/compass-icons/react/github'
import {
  Box,
  Button,
  Navbar,
  Tooltip,
  TooltipTrigger,
  Typography,
} from '@comfortdelgro/react-compass'
import {ETheme, GITHUB_REPOSITORY} from 'constants/index'
import {useThemeContext} from 'contexts/Theme'
import {useIsMobileScreen, useIsTabletScreen} from 'hooks'
import Image from 'next/image'
import Link from 'next/link'
import LeftSideNav from './components/LeftSideNav'
import RightSideNav from './components/RightSideNav'
import SearchBar from './components/SearchBar'

interface AppHeaderProps {
  handleChangeThemeMode: () => void
}

export default function Header(props: AppHeaderProps) {
  const {handleChangeThemeMode} = props

  const mode = useThemeContext()
  const isTabletScreen = useIsTabletScreen()
  const isMobileScreen = useIsMobileScreen()

  return (
    <Navbar
      css={{maxWidth: '100vw', overflow: 'hidden', gap: 'var(--cdg-spacing-1)'}}
    >
      {isTabletScreen && <LeftSideNav />}
      <Navbar.Brand>
        <Link href='/' style={{textDecoration: 'none'}}>
          <Box css={{display: 'flex', alignItems: 'center'}}>
            <Image
              src={'/static/icons/compass.svg'}
              alt='banner'
              width={30}
              height={30}
            />
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
          '.cdg-navbar-actions-default': {
            justifyContent: 'flex-end',
            margin: 0,
            gap: 10,
          },
        }}
      >
        <SearchBar />
        {!isTabletScreen && (
          <a href={GITHUB_REPOSITORY} target='_blank'>
            <Button
              variant='primary'
              css={{
                border: '1px solid var(--cdg-color-cdgBlue60)',
                height: 34,
                width: 34,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GithubIcon fill='white' />
            </Button>
          </a>
        )}
        <TooltipTrigger>
          <Button
            variant='primary'
            onClick={() => {
              handleChangeThemeMode()
            }}
            css={{
              border: '1px solid var(--cdg-color-cdgBlue60)',
              height: 34,
              width: 34,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mode === ETheme.Dark ? (
              <svg width='14' height='14' viewBox='0 0 14 14' fill='white'>
                <path
                  d='M7.98212 0C4.12274 0 0.997742 3.13438 0.997742 7C0.997742 10.8656 4.12274 14 7.98212 14C9.87587 14 11.5915 13.2438 12.8509 12.0188C13.0071 11.8656 13.0477 11.6281 12.9477 11.4344C12.8477 11.2406 12.6321 11.1312 12.4165 11.1687C12.1102 11.2219 11.7977 11.25 11.4759 11.25C8.44774 11.25 5.99149 8.7875 5.99149 5.75C5.99149 3.69375 7.11649 1.90313 8.78212 0.959375C8.97274 0.85 9.06962 0.63125 9.02274 0.41875C8.97587 0.20625 8.79462 0.046875 8.57587 0.028125C8.37899 0.0125 8.18212 0.00312495 7.98212 0.00312495V0Z'
                  fill='#FDFDFD'
                />
              </svg>
            ) : (
              <svg width='16' height='16' viewBox='0 0 16 16' fill='white'>
                <g clipPath='url(#clip0_11917_138353)'>
                  <path
                    d='M11.2969 0.0374973C11.4531 0.103122 11.5656 0.243747 11.5969 0.409372L12.2187 3.78125L15.5906 4.4C15.7562 4.43125 15.8969 4.54375 15.9625 4.7C16.0281 4.85625 16.0094 5.03437 15.9125 5.175L13.9656 8L15.9125 10.8219C16.0094 10.9625 16.0281 11.1406 15.9625 11.2969C15.8969 11.4531 15.7562 11.5656 15.5906 11.5969L12.2187 12.2187L11.5969 15.5906C11.5656 15.7562 11.4531 15.8969 11.2969 15.9625C11.1406 16.0281 10.9625 16.0094 10.8219 15.9125L8 13.9656L5.17812 15.9125C5.0375 16.0094 4.85937 16.0281 4.70312 15.9625C4.54687 15.8969 4.43437 15.7562 4.40312 15.5906L3.78125 12.2187L0.409372 11.5969C0.243747 11.5656 0.103122 11.4531 0.0374973 11.2969C-0.0281277 11.1406 -0.00937766 10.9625 0.0874973 10.8219L2.03437 8L0.0874973 5.17812C-0.00937766 5.0375 -0.0281277 4.85937 0.0374973 4.70312C0.103122 4.54687 0.243747 4.43437 0.409372 4.40312L3.78125 3.78125L4.40312 0.409372C4.43437 0.243747 4.54687 0.103122 4.70312 0.0374973C4.85937 -0.0281277 5.0375 -0.00937766 5.17812 0.0874973L8 2.03437L10.8219 0.0874973C10.9625 -0.00937766 11.1406 -0.0281277 11.2969 0.0374973ZM5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8ZM12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42142 9.06086 4 8 4C6.93913 4 5.92172 4.42142 5.17157 5.17157C4.42142 5.92172 4 6.93913 4 8C4 9.06086 4.42142 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12C9.06086 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06086 12 8Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_11917_138353'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            )}
          </Button>
          <Tooltip css={{background: 'var(--cdg-color-gray40)'}}>
            <Typography.Label>
              {mode === ETheme.Dark
                ? 'Turn on the light'
                : 'Turn off the light'}
            </Typography.Label>
          </Tooltip>
        </TooltipTrigger>
        {isTabletScreen && <RightSideNav />}
      </Navbar.Actions>
    </Navbar>
  )
}
