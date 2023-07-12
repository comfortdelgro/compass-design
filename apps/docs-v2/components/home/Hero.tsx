import {Box, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import GradientText from 'components/typography/GradientText'
import Image from 'next/image'
import GetStartedButtons from './GetStartedButtons'

export default function Hero() {
  return (
    <Box css={{background: '#ECE2EF', position: 'relative'}}>
      <Container
        css={{
          height: 538,
          '@media screen and (max-width: 1200px)': {
            height: 400,
          },
        }}
      >
        <Box
          css={{
            padding: '4rem 0',
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            '@media screen and (max-width: 1200px)': {
              width: '100%',
            },
          }}
        >
          <Typography.Header variant='header0'>
            Ready to use <GradientText>Design components</GradientText>
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
        <Box
          css={{
            width: 'auto',
            height: 538,
            position: 'absolute',
            right: 0,
            top: 0,
            '@media screen and (max-width: 1200px)': {
              display: 'none',
            },
          }}
        >
          <Image
            src='/static/images/introduction.png'
            alt='banner'
            width={578}
            height={538}
          />
        </Box>
      </Container>
    </Box>
  )
}
