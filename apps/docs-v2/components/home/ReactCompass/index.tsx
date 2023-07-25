import {Box, Divider, Typography} from '@comfortdelgro/react-compass'
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
          <div className='cdg-card-row'>
            <Item
              title='Latest updates'
              description='Check out our latest updates'
              textLink='Latest updates'
              urlLink='https://github.com/comfortdelgro/compass-design/releases'
              target='_blank'
              image='/static/images/home/lastest-updated.png'
            />
            <Item
              title='Github'
              description='Check out our github repo.'
              textLink='Get started'
              urlLink='https://github.com/comfortdelgro/compass-design'
              target='_blank'
              image='/static/images/home/github.png'
            />
          </div>
        </Box>
        <Divider css={{padding: '$4'}} />
        <Box css={{paddingTop: '$8'}}>
          <Typography.Header css={{paddingBottom: '$3'}}>
            Add preflight flushing styles for SSR.
          </Typography.Header>
          <CoreShowcase />
        </Box>
        <Box css={{paddingTop: '$8'}}>
          <Typography.Header css={{paddingBottom: '$3'}}>
            Add Preflight component for better CSS resets according to design
            guidelines.
          </Typography.Header>
          <CoreShowcase />
        </Box>
      </Container>
    </Box>
  )
}

export default ReactCompass
