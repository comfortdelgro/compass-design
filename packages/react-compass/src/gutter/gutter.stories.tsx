import {faCar} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'
import Box from '../box'
import Button from '../button'
import Icon from '../icon'
import Sidenav from '../sidenav'
import Gutter from './gutter'
import GutterContent from './gutter-content'
import GutterResizer from './gutter-resizer'

export const Default: React.FC = () => {
  return (
    <Box css={{display: 'flex', height: '100%'}}>
      <Gutter>
        <GutterContent>Sidenav</GutterContent>
        <GutterResizer />
      </Gutter>
      <div>Content</div>
    </Box>
  )
}

export const Advanced: React.FC = () => {
  return (
    <Box css={{display: 'flex', height: '100%'}}>
      <Gutter width={'25%'} maxWidth={'50%'} minWidth={'10%'}>
        <GutterContent>Sidenav</GutterContent>
        <GutterResizer
          showCollapseButton
          minCollapseWidth={'20%'}
          maxCollapseWidth={'30%'}
        />
      </Gutter>
      <div>Content</div>
    </Box>
  )
}

export const LeftSide: React.FC = () => {
  return (
    <Box css={{display: 'flex', height: '100%'}}>
      <div style={{flex: 1}}>Content</div>
      <Gutter>
        <GutterResizer />
        <GutterContent>Sidenav</GutterContent>
      </Gutter>
    </Box>
  )
}

export const BothSides: React.FC = () => {
  return (
    <Box css={{display: 'flex', height: '100%'}}>
      <Gutter width={'25%'} hasBothSides>
        <GutterContent>Left</GutterContent>
        <GutterResizer />
      </Gutter>
      <div style={{flex: 1}}>Content</div>
      <Gutter hasBothSides>
        <GutterResizer />
        <GutterContent>Right</GutterContent>
      </Gutter>
    </Box>
  )
}

export const Controlled: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box css={{display: 'flex', height: '100%'}}>
      <Gutter width={'25%'} maxWidth={'50%'} minWidth={'10%'}>
        <GutterContent>Left</GutterContent>
        <GutterResizer isCollapsed={isOpen} />
      </Gutter>
      <Button
        onPress={() => {
          setIsOpen((previousState) => !previousState)
        }}
        css={{height: 'fit-content'}}
      >
        Toggle
      </Button>
    </Box>
  )
}

export const UseWithOtherComponent: React.FC = () => {
  return (
    <Box css={{display: 'flex', height: '100%'}}>
      <Gutter
        maxWidth={'50%'}
        minWidth={'2%'}
        css={{padding: '0', paddingRight: '$2'}}
      >
        <GutterContent>
          <Sidenav expand={false} css={{width: '100%', height: '100%'}}>
            <Sidenav.Item>
              <Icon icon={faCar}></Icon>
              Item 1
            </Sidenav.Item>
            <Sidenav.Item>
              <Icon icon={faCar}></Icon>
              Item 2
            </Sidenav.Item>
            <Sidenav.Item>
              <Icon icon={faCar}></Icon>
              Item 3
            </Sidenav.Item>
            <Sidenav.Item>
              <Icon icon={faCar}></Icon>
              Item 4
            </Sidenav.Item>
            <Sidenav.Item>
              <Icon icon={faCar}></Icon>
              Item 5
            </Sidenav.Item>
          </Sidenav>
        </GutterContent>
        <GutterResizer showCollapseButton />
      </Gutter>
    </Box>
  )
}
