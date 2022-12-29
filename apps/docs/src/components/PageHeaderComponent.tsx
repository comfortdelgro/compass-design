import {
  Badge,
  Breadcrumbs,
  Button,
  PageHeader,
  SubHeader,
} from '@comfortdelgro/react-compass'

export function PageHeaderComponent() {
  return (
    <>
      <PageHeader color='white'>
        <Breadcrumbs isCurrent={() => false}>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeader.Header>
          <PageHeader.Title>Title</PageHeader.Title>
          <PageHeader.Subtitle>This is subtitle</PageHeader.Subtitle>
          <Badge label='Processing' variant='outline' />
          <Button css={{marginLeft: 'auto'}} variant='secondary'>
            Call to action
          </Button>
          <Button variant='secondary'>Call to action</Button>
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
    </>
  )
}

export const SubHeaderComponent = () => {
  return (
    <>
      <SubHeader>
        <SubHeader.Header>
          <SubHeader.Title>Title</SubHeader.Title>
        </SubHeader.Header>
        <SubHeader.Description>Description.</SubHeader.Description>
      </SubHeader>
    </>
  )
}

export const MiniPageHeader = ({
  color = 'white',
}: {
  color: 'white' | 'blue'
}) => {
  return (
    <PageHeader color={color}>
      <Breadcrumbs isCurrent={() => false}>
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
      </PageHeader.Header>
    </PageHeader>
  )
}
