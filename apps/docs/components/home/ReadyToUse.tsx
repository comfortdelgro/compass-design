import {Box, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/common/Container'
import Image from 'next/image'
import {getStaticPath} from 'utils'
import GetStartedButtons from './GetStartedButtons'

export default function ReadyToUse() {
  return (
    <Box
      css={{
        position: 'relative',
        background:
          'var(--background-portal-background, linear-gradient(225deg, #ece2ef 0%, #e6ebf8 100%))',
      }}
    >
      <Container css={{gap: 36, display: 'flex', flexDirection: 'row'}}>
        <Box
          css={{
            padding: '48px 0',
            flex: 0.6,
            minHeight: '540px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '@media screen and (max-width: 1199px)': {
              minHeight: '400px',
            },
            '@media screen and (max-width: 768px)': {
              padding: '48px 0',
              flex: 1,
              minHeight: '0',
            },
          }}
        >
          <Typography.Header
            variant='header0'
            css={{
              '@media screen and (max-width: 980px)': {
                fontSize: '32px',
                lineHeight: '40px',
              },
            }}
          >
            Ready to use Design components
          </Typography.Header>
          <Box css={{padding: 'var(--cdg-spacing-6) 0'}}>
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
            flex: 0.4,
            backgroundColor: '#d9d6ec',
            overflow: 'hidden',
            '@media screen and (max-width: 768px)': {
              display: 'none',
            },
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left',
            }}
            src={getStaticPath('/static/images/introduction.png')}
            alt='banner'
            width={496}
            height={538}
          />
        </Box>
      </Container>
    </Box>
  )
}
