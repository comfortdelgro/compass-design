import {Box, Grid, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import GradientText from '../../typography/GradientText'
import DesignKit from './DesignKit'

function DesignKits() {
  return (
    <Box css={{background: '#f4f6f9', padding: '4rem 0'}}>
      <Container>
        <Grid spacing='sm' alignItems='center' style={{height: '100%'}}>
          <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box>
              <Typography.Header variant='header1' css={{fontWeight: 'bold'}}>
                <GradientText>Design</GradientText> kits
              </Typography.Header>
              <Typography.Body variant='body2'>
                Bring our components to your favorite design tool.
              </Typography.Body>
            </Box>
          </Grid.Item>
          <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
            <DesignKit />
          </Grid.Item>
        </Grid>
      </Container>
    </Box>
  )
}

export default DesignKits
