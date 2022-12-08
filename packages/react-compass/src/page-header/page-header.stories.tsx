import {StoryDecorator} from '@ladle/react'
import Badge from '../badge'
import Breadcrumbs from '../breadcrumbs'
import Button from '../button'
import {Column} from '../utils'
import PageHeader from './page-header'
import PageHeaderDescription from './page-header-description'
import PageHeaderHeader from './page-header-header'
import PageHeaderSubtitle from './page-header-subtitle'
import PageHeaderTitle from './page-header-title'
import SubHeader from './sub-header'

const isCurrent = (i: number) => {
  if (window && window.location) return window.location.hash === `#${i}`
  return false
}

export const Variants: React.FC = () => {
  return (
    <Column>
      <PageHeaderHeader>
        <PageHeaderTitle>Title</PageHeaderTitle>
        <PageHeaderSubtitle>This is subtitle</PageHeaderSubtitle>
      </PageHeaderHeader>

      <PageHeaderHeader css={{backgroundColor: 'white'}}>
        <PageHeaderTitle>Title</PageHeaderTitle>
        <PageHeaderSubtitle>This is subtitle</PageHeaderSubtitle>
        <Button css={{marginLeft: 'auto'}}>Call to action</Button>
        <Button>Call to action</Button>
        <Button>Call to action</Button>
      </PageHeaderHeader>

      <PageHeader color='white'>
        <Breadcrumbs isCurrent={isCurrent}>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeaderHeader>
          <PageHeaderTitle>Title</PageHeaderTitle>
          <PageHeaderSubtitle>This is subtitle</PageHeaderSubtitle>
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeaderHeader>
      </PageHeader>

      <PageHeader color='white'>
        <Breadcrumbs isCurrent={isCurrent}>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeaderHeader>
          <PageHeaderTitle>Title</PageHeaderTitle>
          <PageHeaderSubtitle>This is subtitle</PageHeaderSubtitle>
          <Badge label='Processing' variant='outline' />
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeaderHeader>
        <PageHeaderDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum
          amet natus doloribus laudantium exercitationem blanditiis velit
          laborum repudiandae quas expedita.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint
          officiis, nisi quos quibusdam, voluptatum amet natus doloribus
          laudantium exercitationem blanditiis velit laborum repudiandae quas
          expedita.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum
          amet natus doloribus laudantium exercitationem blanditiis velit
          laborum repudiandae quas expedita.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint
          officiis, nisi quos quibusdam, voluptatum amet natus doloribus
          laudantium exercitationem blanditiis velit laborum repudiandae quas
          expedita.
        </PageHeaderDescription>
      </PageHeader>

      <PageHeader color='blue' css={{padding: '0 48px'}}>
        <PageHeaderHeader>
          <PageHeaderTitle>Title</PageHeaderTitle>
          <PageHeaderSubtitle>This is subtitle</PageHeaderSubtitle>
        </PageHeaderHeader>
      </PageHeader>

      <PageHeader color='blue' css={{padding: '0 48px'}}>
        <PageHeaderHeader>
          <PageHeaderTitle>Title</PageHeaderTitle>
          <PageHeaderSubtitle>This is subtitle</PageHeaderSubtitle>
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeaderHeader>
      </PageHeader>

      <PageHeader color='blue'>
        <Breadcrumbs isCurrent={isCurrent}>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeaderHeader>
          <PageHeaderTitle>Title</PageHeaderTitle>
          <PageHeaderSubtitle>This is subtitle</PageHeaderSubtitle>
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeaderHeader>
      </PageHeader>

      <PageHeader color='blue'>
        <Breadcrumbs isCurrent={isCurrent}>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeaderHeader>
          <PageHeaderTitle>Title</PageHeaderTitle>
          <PageHeaderSubtitle>This is subtitle</PageHeaderSubtitle>
          <Badge label='Processing' variant='outline' />
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeaderHeader>
      </PageHeader>

      <PageHeader color='blue'>
        <Breadcrumbs isCurrent={isCurrent}>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeaderHeader>
          <PageHeaderTitle>Title</PageHeaderTitle>
          <PageHeaderSubtitle>This is subtitle</PageHeaderSubtitle>
          <Badge label='Processing' variant='outline' />
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeaderHeader>
        <PageHeaderDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum
          amet natus doloribus laudantium exercitationem blanditiis velit
          laborum repudiandae quas expedita.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint
          officiis, nisi quos quibusdam, voluptatum amet natus doloribus
          laudantium exercitationem blanditiis velit laborum repudiandae quas
          expedita.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum
          amet natus doloribus laudantium exercitationem blanditiis velit
          laborum repudiandae quas expedita.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint
          officiis, nisi quos quibusdam, voluptatum amet natus doloribus
          laudantium exercitationem blanditiis velit laborum repudiandae quas
          expedita.
        </PageHeaderDescription>
      </PageHeader>
    </Column>
  )
}

export const PageSubHeader: React.FC = () => {
  return (
    <Column>
      <SubHeader>
        <PageHeaderHeader>
          <PageHeaderTitle>Title</PageHeaderTitle>
        </PageHeaderHeader>
        <PageHeaderDescription>Description.</PageHeaderDescription>
      </SubHeader>
    </Column>
  )
}

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
