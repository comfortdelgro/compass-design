import {Box, Divider, Grid, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import Item from '../Introduction/item'
import CoreShowcase from './CoreShowcase'

function ReactCompass() {
  return (
    <Box css={{padding: '4rem 0', background: '#ECE2EF'}}>
      <Container>
        <Box>
          <Typography.Header>Usage</Typography.Header>
          <Typography.Body variant='body2' css={{padding: '$5 0 $3 0'}}>
            There are three parts of the package: CSS, Javascript, and Icon or
            Image resource. We are fetching icon and images from cdn by default.
          </Typography.Body>
        </Box>
        <Box css={{paddingTop: '$4'}}>
          <Grid spacing='sm' alignItems='center' style={{height: '100%'}}>
            <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Item
                title='Latest updates'
                description='Check out our latest updates'
                textLink='Figma link'
                urlLink='/'
                image='/static/images/home/lastest-updated.png'
              />
            </Grid.Item>
            <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Item
                title='Github'
                description='Check out our github repo.'
                textLink='Get started'
                urlLink='/'
                image='/static/images/home/github.png'
              />
            </Grid.Item>
          </Grid>
        </Box>
        <Divider css={{padding: '$4'}} />
        <Box css={{paddingTop: '$8'}}>
          <Typography.Header css={{paddingBottom: '$3'}}>
            Demo
          </Typography.Header>
          <CoreShowcase />
        </Box>
      </Container>
    </Box>
  )
}

export default ReactCompass
