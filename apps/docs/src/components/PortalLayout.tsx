import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Icon,
  Layout,
  Navbar,
  PageHeader,
  Sidenav,
} from '@comfortdelgro/react-compass'
import {
  faAmbulance,
  faBank,
  faCar,
  faHelicopter,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const PortalLayout: React.FC = () => {
  const isCurrent = (i: number) => {
    return false
  }

  return (
    <Layout className='layout-demo' direction='row' css={{height: '700px'}}>
      <Layout
        css={{
          position: 'relative',
          overflow: 'visible',
          zIndex: '1',
          width: '72px',
        }}
      >
        <Sidenav css={{height: '100%'}}>
          <Sidenav.Item>
            <Avatar label='M' />
            <h2
              style={{fontSize: '24px', marginLeft: '22px', color: '#323130'}}
            >
              Workbench
            </h2>
          </Sidenav.Item>
          <Sidenav.Divider />
          <Sidenav.Item>
            <Icon icon={faAmbulance}></Icon>
            <span>Menu</span>
          </Sidenav.Item>
          <Sidenav.Item>
            <Icon icon={faBank}></Icon>
            <span>Menu</span>
          </Sidenav.Item>
          <Sidenav.Item>
            <Icon icon={faCar}></Icon>
            <span>Menu</span>
          </Sidenav.Item>
          <Sidenav.Item>
            <Icon icon={faHelicopter}></Icon>
            <span>Menu</span>
          </Sidenav.Item>
        </Sidenav>
      </Layout>
      <Layout flex={1}>
        <Navbar>
          <Navbar.Brand>Workbench Title</Navbar.Brand>
          <Navbar.Links>
            <a href='#'>
              <Button>Home</Button>
            </a>
            <a href='#'>
              <Button>Services</Button>
            </a>
            <a href='#'>
              <Button>Products</Button>
            </a>
          </Navbar.Links>
        </Navbar>
        <Layout flex={1}>
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
              <Button css={{marginLeft: 'auto'}} variant='secondary'>
                Call to action
              </Button>
              <Button variant='secondary'>Call to action</Button>
              <Button variant='secondary'>Call to action</Button>
            </PageHeader.Header>
            <PageHeader.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos
              quibusdam, voluptatum amet natus doloribus laudantium
              exercitationem blanditiis velit laborum repudiandae quas
              expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos
              quibusdam, voluptatum amet natus doloribus laudantium
              exercitationem blanditiis velit laborum repudiandae quas expedita.
            </PageHeader.Description>
            <PageHeader.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos
              quibusdam, voluptatum amet natus doloribus laudantium
              exercitationem blanditiis velit laborum repudiandae quas
              expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos
              quibusdam, voluptatum amet natus doloribus laudantium
              exercitationem blanditiis velit laborum repudiandae quas expedita.
            </PageHeader.Description>
          </PageHeader>
        </Layout>
      </Layout>
    </Layout>
  )
}
