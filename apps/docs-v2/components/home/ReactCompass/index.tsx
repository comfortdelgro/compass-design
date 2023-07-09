import {Box, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import GradientText from '../../typography/GradientText'
import CoreShowcase from './CoreShowcase'

function ReactCompass() {
  return (
    <Box css={{background: 'white', padding: '4rem 0'}}>
      <Container>
        <Box>
          <Typography.Header variant='header1' css={{fontWeight: 'bold'}}>
            <GradientText>React Compass</GradientText> Library
          </Typography.Header>
          <Typography.Body variant='body2'>
            Foundational components for shipping features faster.
          </Typography.Body>
        </Box>
        <CoreShowcase />
      </Container>
    </Box>
  )
}

export default ReactCompass
