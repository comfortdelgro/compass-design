import {Box, Typography} from '@comfortdelgro/react-compass'
import Image from 'next/image'
import {getStaticPath} from 'utils'

const Banner = () => {
  return (
    <Box css={{position: 'relative'}}>
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 0,
          objectFit: 'cover',
        }}
        src={getStaticPath('/static/images/home-background.png')}
        alt='Big hero banner'
        sizes='100vw'
        width={0}
        height={0}
      />
      <Box
        css={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '70px 0',
        }}
      >
        <Box
          css={{
            backgroundColor: '#0000001A',
            padding: '25px 70px',
            borderRadius: '16px',
            color: '#FFFFFF',
          }}
        >
          <Typography.Header
            css={{
              color: 'var(--colors-background)',
              fontSize: '1.125rem',
              textAlign: 'center',
              fontWeight: '700',
              lineHeight: '27px',
              marginBottom: '12px',
            }}
          >
            WELCOME TO
          </Typography.Header>
          <Typography.Header
            css={{
              color: 'var(--colors-background)',
              fontSize: '2.875rem',
              textAlign: 'center',
              fontWeight: '700',
              lineHeight: '69px',
              marginBottom: '12px',
              '@media screen and (max-width: 768px)': {
                fontSize: '2rem',
                lineHeight: '32px',
              },
            }}
          >
            Compass Design System
          </Typography.Header>
          <Box
            css={{
              gap: 7,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--colors-background)',
              fontSize: '1.125rem',
              fontWeight: '500',
              textAlign: 'center',
              lineHeight: '27px',
            }}
          >
            let the
            <Typography.Header
              variant='header5'
              css={{
                display: 'inline',
                borderRadius: 4,
                width: 'fit-content',
                color: 'var(--colors-background)',
                padding: '5px 10px',
                background: '#EC5E5E',
                fontSize: '1.125rem',
                fontWeight: '700',
                textAlign: 'center',
                lineHeight: '27px',
              }}
            >
              work
            </Typography.Header>
            flow
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Banner
