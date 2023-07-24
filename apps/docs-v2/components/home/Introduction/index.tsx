import {Box, Grid, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import Item from './item'

export default function Introduction() {
  return (
    <Box css={{background: '#E2DEEB', padding: '$14 0'}}>
      <Container>
        <Typography.Header>Introduction</Typography.Header>
        <Typography.Body variant='body2' css={{padding: '$5 0 $3 0'}}>
          This is guideline page for ComfortDelGro's Workbench Design System
          library. Which a set of components that created using web component
          and can be used to implement user experiences consistent with
          ComfortDelGro's design principles. These components can work without
          any other library like jQuery, Angular, VueJS, React and can run on
          most of modern browsers. Refer Workbench Design System
        </Typography.Body>
        <Box css={{paddingTop: '$4'}}>
          <Grid spacing='sm' alignItems='center' style={{height: '100%'}}>
            <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Item
                title='Design'
                description='Check out our figma Compass design system'
                textLink='Figma link'
                urlLink='https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=480-41144&mode=design&t=PfKoDFh3mPd3y9yz-4'
                target={'_blank'}
                image='/static/images/home/design.png'
              />
            </Grid.Item>
            <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Item
                title='Develop'
                description='Find installation guide and tooling tips'
                textLink='Get started'
                target={'_self'}
                urlLink='./getting-started/overview/'
                image='/static/images/home/develop.png'
              />
            </Grid.Item>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
