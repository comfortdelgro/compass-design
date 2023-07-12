import {Box, Typography} from '@comfortdelgro/react-compass'
import Image from 'next/image'

const Banner = () => {
  return (
    <Box css={{position: 'relative'}}>
      <Image
        src='/static/images/home-background.png'
        alt='banner'
        width={0}
        height={0}
        sizes='100vw'
        style={{width: '100%', height: 'auto'}}
      />
      <Box
        css={{
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.10)',
          backdropFilter: 'blur(40px)',
          padding: '$14 $4',
          top: '4rem',
          width: '50%',
          left: '25%',
          borderRadius: 16,
        }}
      >
        <Typography.Header
          variant='header4'
          css={{
            color: '$whiteText',
            fontSize: '1.125rem',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          WELCOME TO
        </Typography.Header>
        <Typography.Header
          css={{
            color: '$whiteText',
            fontSize: '2.875rem',
            textAlign: 'center',
            padding: '$8 0 $10 0',
          }}
        >
          Compass Design System
        </Typography.Header>
        <Typography.Header
          variant='header5'
          css={{color: '$whiteText', fontSize: '1.125rem', textAlign: 'center'}}
        >
          let the{' '}
          <span
            style={{background: '#EC5E5E', padding: '5px 5px', borderRadius: 4}}
          >
            work
          </span>{' '}
          flow
        </Typography.Header>
      </Box>
    </Box>
  )
}

export default Banner
