import {Meta} from '@storybook/react'
import PageHeader from '.'
import {Badge, Breadcrumbs, Button} from '..'

const isCurrent = (i: number) => {
  if (window && window.location) return window.location.hash === `#${i}`
  return false
}

export const Basic = () => {
  return (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column',
        backgroundColor: 'var(--cdg-color-gray20)',
      }}
    >
      <PageHeader color='white' css={{padding: '0 48px'}}>
        <PageHeader.Header>
          <PageHeader.Title>Title</PageHeader.Title>
          <PageHeader.Subtitle>This is subtitle</PageHeader.Subtitle>
        </PageHeader.Header>
      </PageHeader>

      <PageHeader color='white' css={{padding: '0 48px'}}>
        <PageHeader.Header>
          <PageHeader.Title>Title</PageHeader.Title>
          <PageHeader.Subtitle>This is subtitle</PageHeader.Subtitle>
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeader.Header>
      </PageHeader>
      <PageHeader color='white'>
        <Breadcrumbs isCurrent={isCurrent}>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeader.Header>
          <PageHeader.Title>Title</PageHeader.Title>
          <PageHeader.Subtitle>This is subtitle</PageHeader.Subtitle>
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeader.Header>
      </PageHeader>

      <PageHeader color='white'>
        <Breadcrumbs isCurrent={isCurrent}>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeader.Header>
          <PageHeader.Title>Title</PageHeader.Title>
          <PageHeader.Subtitle>This is subtitle</PageHeader.Subtitle>
          <Badge label='Processing' variant='outline' />
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeader.Header>
        <PageHeader.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum
          amet natus doloribus laudantium exercitationem blanditiis velit
          laborum repudiandae quas expedita.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint
          officiis, nisi quos quibusdam, voluptatum amet natus doloribus
          laudantium exercitationem blanditiis velit laborum repudiandae quas
          expedita.
        </PageHeader.Description>
        <PageHeader.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum
          amet natus doloribus laudantium exercitationem blanditiis velit
          laborum repudiandae quas expedita.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint
          officiis, nisi quos quibusdam, voluptatum amet natus doloribus
          laudantium exercitationem blanditiis velit laborum repudiandae quas
          expedita.
        </PageHeader.Description>
      </PageHeader>

      <PageHeader color='blue'>
        <Breadcrumbs isCurrent={isCurrent}>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeader.Header>
          <PageHeader.Title>Title</PageHeader.Title>
          <PageHeader.Subtitle>This is subtitle</PageHeader.Subtitle>
          <Badge label='Processing' variant='outline' />
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeader.Header>
        <PageHeader.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum
          amet natus doloribus laudantium exercitationem blanditiis velit
          laborum repudiandae quas expedita.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint
          officiis, nisi quos quibusdam, voluptatum amet natus doloribus
          laudantium exercitationem blanditiis velit laborum repudiandae quas
          expedita.
        </PageHeader.Description>
        <PageHeader.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum
          amet natus doloribus laudantium exercitationem blanditiis velit
          laborum repudiandae quas expedita.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint
          officiis, nisi quos quibusdam, voluptatum amet natus doloribus
          laudantium exercitationem blanditiis velit laborum repudiandae quas
          expedita.
        </PageHeader.Description>
      </PageHeader>
    </div>
  )
}

const meta = {
  title: 'Example/Page Header',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
