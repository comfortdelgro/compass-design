import React from 'react'
import Dropdown from '../dropdown'
import TextField from '../textfield'
import {Column} from '../utils/components'
import Button from './../button'
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
        <Sidebar.Content style={{gap: '16px'}}>
          <TextField name='title' />
          <TextField name='subtitle' />
          <Dropdown.ComboBox
            label='Favorite Animal'
            placeholder='Choose an animal'
          >
            <Dropdown.Item key='dog'>Dog</Dropdown.Item>
            <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
            <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
            <Dropdown.Item key='snake'>Snake</Dropdown.Item>
          </Dropdown.ComboBox>
          <p style={{height: '1000px', flexShrink: '0'}}>Sample content</p>
        </Sidebar.Content>
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

export const Position: React.FC = () => {
  const [isLeftOpen, setIsLeftOpen] = React.useState(false)
  const [isRightOpen, setIsRightOpen] = React.useState(false)
  return (
    <Column>
      <h3>Left Sidebar</h3>
      <Button
        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
        onPress={() => setIsLeftOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar isOpen={isLeftOpen} handleClose={() => setIsLeftOpen(false)}>
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>
          <TextField name='title' />
          <TextField name='subtitle' />
          <Dropdown.ComboBox
            label='Favorite Animal'
            placeholder='Choose an animal'
          >
            <Dropdown.Item key='dog'>Dog</Dropdown.Item>
            <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
            <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
            <Dropdown.Item key='snake'>Snake</Dropdown.Item>
          </Dropdown.ComboBox>
        </Sidebar.Content>
        <Sidebar.Actions>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>

      <h3>Right Sidebar</h3>
      <Button
        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
        onPress={() => setIsRightOpen(true)}
      >
        Open sidebar
      </Button>
      <Sidebar
        isOpen={isRightOpen}
        handleClose={() => setIsRightOpen(false)}
        position='right'
      >
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>
          <TextField name='title' />
          <TextField name='subtitle' />
          <Dropdown.ComboBox
            label='Favorite Animal'
            placeholder='Choose an animal'
          >
            <Dropdown.Item key='dog'>Dog</Dropdown.Item>
            <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
            <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
            <Dropdown.Item key='snake'>Snake</Dropdown.Item>
          </Dropdown.ComboBox>
        </Sidebar.Content>
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
  )
}
