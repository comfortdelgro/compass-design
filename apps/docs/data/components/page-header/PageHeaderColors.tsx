import {
  Badge,
  Breadcrumbs,
  Button,
  PageHeader,
} from '@comfortdelgro/react-compass-old'

function ColorFeature() {
  return (
    <PageHeader color={'blue'}>
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
        <Button>Call to action</Button>
      </PageHeader.Header>
    </PageHeader>
  )
}

export default ColorFeature
