import {Box, Grid, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import GradientText from '../../typography/GradientText'
import StoreTemplatesBanner from './StoreTemplatesBanner'

function Templates() {
  return (
    <Box css={{background: '#f4f6f9', padding: '4rem 0'}}>
      <Container>
        <Grid spacing='sm' alignItems='center' style={{height: '100%'}}>
          <Grid.Item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box>
              <Typography.Header variant='header1' css={{fontWeight: 'bold'}}>
                <GradientText>Templates</GradientText>
              </Typography.Header>
              <Typography.Body variant='body2'>
                Professionally designed UI layouts to jumpstart your next
                project.
              </Typography.Body>
            </Box>
          </Grid.Item>
          <Grid.Item xs={12} sm={12} md={6} lg={8} xl={8}>
            <StoreTemplatesBanner />
          </Grid.Item>
        </Grid>
      </Container>
    </Box>
  )
}

export default Templates
