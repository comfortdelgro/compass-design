import {Box, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import Image from 'next/image'
import GetStartedButtons from './GetStartedButtons'

export default function Hero() {
  return (
    <Box css={{background: '#ECE2EF', position: 'relative'}}>
      <Container css={{height: 538}}>
        <Box
          css={{
            padding: '4rem 0',
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Typography.Header variant='header1'>
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
        <Image
          src='/static/images/introduction.png'
          alt='banner'
          width={538}
          height={538}
          style={{
            width: 'auto',
            height: 538,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        />
      </Container>
    </Box>
  )
}
