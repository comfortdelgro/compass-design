import {Box, Typography} from '@comfortdelgro/react-compass'
import Image from 'next/image'
import {getStaticPath} from 'utils'

const Banner = () => {
  return (
    <Box className='hero-banner'>
      <Image
        className='hero-background'
        src={getStaticPath('/static/images/home-background.png')}
        alt='Big hero banner'
        sizes='100vw'
        width={0}
        height={0}
      />
      <Box className='hero-content-wrapper'>
        <Box className='hero-content'>
          <Typography.Header
            variant='header4'
            style={{
              color: 'var(--colors-background)',
              fontSize: '1.125rem',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            WELCOME TO
          </Typography.Header>
          <Typography.Header
            style={{
              color: 'var(--colors-background)',
              fontSize: '2.875rem',
              textAlign: 'center',
              lineHeight: '69px',
              '@media screen and (max-width: 768px)': {
                fontSize: '2rem',
                lineHeight: '32px',
              },
            }}
          >
            Compass Design System
          </Typography.Header>
          <Typography.Header
            variant='header5'
            style={{
              color: 'var(--colors-background)',
              fontSize: '1.125rem',
              textAlign: 'center',
            }}
          >
            let the{' '}
            <span
              style={{
                background: '#EC5E5E',
                padding: '2px 6px',
                borderRadius: 4,
              }}
            >
              work
            </span>{' '}
            flow
          </Typography.Header>
        </Box>
      </Box>
    </Box>
  )
}

export default Banner
