import {Box, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import Image from 'next/image'
import {getStaticPath} from 'utils'
import GetStartedButtons from './GetStartedButtons'

export default function ReadyToUse() {
  return (
    <Box className='portal-background'>
      <Container className='container-row ready-to-use-section'>
        <Box className='ready-to-use-content'>
          <Typography.Header variant='header0' className='section-big-header'>
            Ready to use Design components
          </Typography.Header>
          <Box style={{padding: 'var(--cdg-spacing-6) 0'}}>
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
