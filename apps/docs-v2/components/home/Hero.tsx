import {Box, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import Image from 'next/image'
import GetStartedButtons from './GetStartedButtons'

export default function Hero() {
  return (
    <Box className='portal-background'>
      <Container>
        <Box
          css={{
            padding: '4rem 0',
            width: 'calc(100% - 536px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            '@media screen and (max-width: 980px)': {
              width: 'calc(100% - 440px)',
            },
            '@media screen and (max-width: 768px)': {
              width: '100%',
            },
          }}
        >
          <Typography.Header variant='header0' className='section-big-header'>
            Ready to use Design components
          </Typography.Header>
          <Box css={{padding: '$6 0'}}>
            <Typography.Body variant='body2'>
              React Compass offers a comprehensive suite of UI tools to help you
              ship new features faster. Start with React Compass, our
              full-loaded component library, or bring your own design system to
              our production-ready component.
            </Typography.Body>
          </Box>
          <GetStartedButtons />
        </Box>
        <Box className='figma-preview-wrapper'>
          <Image
            className='figma-preview'
            src='/static/images/introduction.png'
            alt='banner'
            width={496}
            height={538}
          />
        </Box>
      </Container>
    </Box>
  )
}
