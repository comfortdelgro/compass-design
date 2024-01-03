import {
  Box,
  Divider,
  Typography,
  useIsDarkTheme,
} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import {getStaticPath} from 'utils'
import Item from '../Introduction/item'
import CoreShowcase from './CoreShowcase'
import PreflightComponent from './PreflightComponent'

function ReactCompass() {
  const isDarkTheme = useIsDarkTheme()
  return (
    <Box
      style={{
        padding: '4rem 0',
        background: isDarkTheme ? 'var(--colors-gray90)' : '#ECE2EF',
      }}
    >
      <Container>
        <Box>
          <Typography.Header>Usage</Typography.Header>
          <Typography.Body
            variant='body2'
            style={{padding: 'var(--cdg-spacing-5) 0 var(--cdg-spacing-3) 0'}}
          >
            There are three parts of the package: CSS, Javascript, and Icon or
            Image resource. We are fetching icon and images from cdn by default.
          </Typography.Body>
        </Box>
        <Box style={{paddingTop: 'var(cdg-spacing-4)'}}>
          <div className='cdg-card-row'>
            <Item
              title='Latest updates'
              description='Check out our latest updates'
              textLink='Latest updates'
              urlLink='https://github.com/comfortdelgro/compass-design/releases'
              target='_blank'
              image={getStaticPath('/static/images/home/lastest-updated.png')}
            />
            <Item
              title='Github'
              description='Check out our github repo.'
              textLink='Get started'
              urlLink='https://github.com/comfortdelgro/compass-design'
              target='_blank'
              image={getStaticPath('/static/images/home/github.png')}
            />
          </div>
        </Box>
        <Divider style={{padding: 'var(--cdg-spacing-4)'}} />
        <Box style={{paddingTop: 'var(--cdg-spacing-8)'}}>
          <Typography.Header style={{paddingBottom: 'var(--cdg-spacing-3)'}}>
            Add compass-design style into your SSR app
          </Typography.Header>
          <CoreShowcase />
        </Box>
        <Box style={{padding: 'var(--cdg-spacing-8) 0px'}}>
          <Typography.Header style={{paddingBottom: 'var(--cdg-spacing-3)'}}>
            Add Preflight component for better CSS resets according to design
            guidelines.
          </Typography.Header>
          <PreflightComponent />
        </Box>
      </Container>
    </Box>
  )
}

export default ReactCompass
