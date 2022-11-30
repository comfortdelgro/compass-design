<<<<<<< HEAD
import {
  faAmbulance,
  faBank,
  faCar,
  faHelicopter,
  faPlane,
  faTractor,
} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import Avatar from '../avatar'
import Icon from '../icon'
import {Row} from '../utils/components'
import Sidebar from './index'

export const Sidebars: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const items = [
    {id: 1, icon: faCar},
    {id: 2, icon: faAmbulance},
    {id: 3, icon: faPlane},
    {id: 4, icon: faHelicopter},
    {id: 5, icon: faTractor},
  ]

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number,
  ) => {
    e.preventDefault()
    setCurrentPage(id)
  }

  return (
    <Row css={{position: 'relative'}}>
      <Sidebar
        css={{height: '800px', position: 'absolute', top: '0px', zIndex: 2}}
        expand={false}
      >
        <Sidebar.Item>
          <div style={{width: '40px'}}>
            <Avatar label='M' />
          </div>
          <h2 style={{fontSize: '24px', marginLeft: '22px', color: '#323130'}}>
            Workbench
          </h2>
        </Sidebar.Item>
        <Sidebar.Divider />
        {items.map((item) => (
          <a
            onClick={(e) => {
              handleOnClick(e, item.id)
            }}
            key={item.id}
            href='#'
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            <Sidebar.Item isActive={currentPage === item.id}>
              <Icon icon={item.icon}></Icon>
              <span>Placeholder</span>
            </Sidebar.Item>
          </a>
        ))}
        <Sidebar.Divider />
        <Sidebar.Item css={{marginTop: 'auto'}}>
          <Icon icon={faBank}></Icon>
          <span>Placeholder</span>
        </Sidebar.Item>
      </Sidebar>
      <Sidebar
        css={{
          height: '800px',
          position: 'absolute',
          left: '200px',
          backgroundColor: '$primaryBg',
          top: '0px',
          zIndex: 1,
          '& .sidebar-item-active': {
            color: '$warning',
          },
        }}
        expand
      >
        {items.map((item) => (
          <a
            onClick={(e) => {
              handleOnClick(e, item.id)
            }}
            key={item.id}
            href='#'
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            <Sidebar.Item
              isActive={currentPage === item.id}
              css={{
                '&:hover': {
                  color: '$danger',
                },
              }}
            >
              <Icon icon={item.icon}></Icon>
              <span>Placeholder</span>
            </Sidebar.Item>
          </a>
        ))}
        <Sidebar.Divider />
        <Sidebar.Item css={{marginTop: 'auto'}}>
          <Icon icon={faBank}></Icon>
          <span>Placeholder</span>
        </Sidebar.Item>
      </Sidebar>
    </Row>
=======
import React from 'react'
import Button from '../button'
import {Column} from '../utils/components'
import Sidebar from './index'

export const Default: React.FC = () => {
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)
  return (
    <Column>
      <h3>Primary Sidebar</h3>
      <Button
        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
        onPress={() => setIsDefaultOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar
        isOpen={isDefaultOpen}
        handleClose={() => setIsDefaultOpen(false)}
      >
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>
    </Column>
  )
}

export const Variants: React.FC = () => {
  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)
  const [isSecondaryOpen, setIsSecondaryOpen] = React.useState(false)
  return (
    <Column>
      <h3>Primary Sidebar</h3>
      <Button
        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
        onPress={() => setIsPrimaryOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar
        variant='primary'
        isOpen={isPrimaryOpen}
        handleClose={() => setIsPrimaryOpen(false)}
      >
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>

      <h3>Secondary Sidebar</h3>
      <Button
        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
        onPress={() => setIsSecondaryOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar
        variant='secondary'
        isOpen={isSecondaryOpen}
        handleClose={() => setIsSecondaryOpen(false)}
      >
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>
    </Column>
>>>>>>> develop
  )
}
