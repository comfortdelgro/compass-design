import {Box, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import GradientText from '../typography/GradientText'
import GetStartedButtons from './GetStartedButtons'

export default function Hero() {
  return (
    <Container>
      <Box css={{textAlign: 'center', padding: '4rem 0'}}>
        <Typography.Header
          variant='header1'
          css={{fontSize: '4rem', fontWeight: 'bold'}}
        >
          <GradientText>Move faster</GradientText> with intuitive React UI tools
        </Typography.Header>
        <Box css={{padding: '2rem'}}>
          <Typography.Body variant='body1'>
            React Compass offers a comprehensive suite of UI tools to help you
            ship new features faster. Start with React Compass, our fully-loaded
            component library, or bring your own design system to our
            production-ready components.
          </Typography.Body>
        </Box>
        <GetStartedButtons />
      </Box>
    </Container>
  )
}
