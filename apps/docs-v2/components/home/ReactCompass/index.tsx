import {Box, Grid, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import GradientText from '../../typography/GradientText'
import CoreShowcase from './CoreShowcase'

function ReactCompass() {
  return (
    <Box css={{background: 'white', padding: '4rem 0'}}>
      <Container>
        <Grid spacing='sm' alignItems='center' style={{height: '100%'}}>
          <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box>
              <Typography.Header variant='header1' css={{fontWeight: 'bold'}}>
                <GradientText>React Compass</GradientText> Library
              </Typography.Header>
              <Typography.Body variant='body2'>
                Foundational components for shipping features faster.
              </Typography.Body>
            </Box>
          </Grid.Item>
          <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
            <CoreShowcase />
          </Grid.Item>
        </Grid>
      </Container>
    </Box>
  )
}

export default ReactCompass
