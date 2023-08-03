import {Box, Typography} from '@comfortdelgro/react-compass'
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
          <div className='cdg-card-row'>
            <Item
              title='Design'
              description='Check out our figma Compass design system'
              textLink='Figma link'
              urlLink='https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=480-41144&mode=design&t=PfKoDFh3mPd3y9yz-4'
              target={'_blank'}
              image='/static/images/home/design.png'
            />
            <Item
              title='Develop'
              description='Find installation guide and tooling tips'
              textLink='Get started'
              target={'_self'}
              urlLink='./foundation/overview/'
              image='/static/images/home/develop.png'
            />
          </div>
        </Box>
      </Container>
    </Box>
  )
}
