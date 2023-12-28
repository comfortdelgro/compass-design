'use client'

import {Meta} from '@storybook/react'
import React from 'react'
import Button from './../button'
import Sidebar from './index'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

// export const Default: React.FC = () => {
//   const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)
//   return (
//     <div style={{...style}}>
//       <h3>Primary Sidebar</h3>
//       <Button
//         css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
//         onPress={() => setIsDefaultOpen(true)}
//       >
//         Open sidebar
//       </Button>
//       <Sidebar
//         isOpen={isDefaultOpen}
//         handleClose={() => setIsDefaultOpen(false)}
//       >
//         <Sidebar.Title>My title</Sidebar.Title>
//         <Sidebar.Content style={{gap: '16px'}}>
//           <TextField name='title' />
//           <TextField name='subtitle' />
//           <Dropdown.ComboBox
//             label='Favorite Animal'
//             placeholder='Choose an animal'
//           >
//             <Dropdown.Item key='dog'>Dog</Dropdown.Item>
//             <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
//             <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
//             <Dropdown.Item key='snake'>Snake</Dropdown.Item>
//           </Dropdown.ComboBox>
//           <p style={{height: '1000px', flexShrink: '0'}}>Sample content</p>
//         </Sidebar.Content>
//         <Sidebar.Actions>
//           <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
//             Action
//           </Button>
//           <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
//             Action
//           </Button>
//         </Sidebar.Actions>
//       </Sidebar>
//     </div>
//   )
// }

// export const Position: React.FC = () => {
//   const [isLeftOpen, setIsLeftOpen] = React.useState(false)
//   const [isRightOpen, setIsRightOpen] = React.useState(false)
//   return (
//     <div style={{...style}}>
//       <h3>Left Sidebar</h3>
//       <Button
//         css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
//         onPress={() => setIsLeftOpen(true)}
//       >
//         Open sidebar
//       </Button>
//       <Sidebar isOpen={isLeftOpen} handleClose={() => setIsLeftOpen(false)}>
//         <Sidebar.Title>My title</Sidebar.Title>
//         <Sidebar.Content>
//           <TextField name='title' />
//           <TextField name='subtitle' />
//           <Dropdown.ComboBox
//             label='Favorite Animal'
//             placeholder='Choose an animal'
//           >
//             <Dropdown.Item key='dog'>Dog</Dropdown.Item>
//             <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
//             <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
//             <Dropdown.Item key='snake'>Snake</Dropdown.Item>
//           </Dropdown.ComboBox>
//         </Sidebar.Content>
//         <Sidebar.Actions>
//           <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
//             Action
//           </Button>
//           <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
//             Action
//           </Button>
//         </Sidebar.Actions>
//       </Sidebar>

//       <h3>Right Sidebar</h3>
//       <Button
//         css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}
//         onPress={() => setIsRightOpen(true)}
//       >
//         Open sidebar
//       </Button>
//       <Sidebar
//         isOpen={isRightOpen}
//         handleClose={() => setIsRightOpen(false)}
//         position='right'
//       >
//         <Sidebar.Title>My title</Sidebar.Title>
//         <Sidebar.Content>
//           <TextField name='title' />
//           <TextField name='subtitle' />
//           <Dropdown.ComboBox
//             label='Favorite Animal'
//             placeholder='Choose an animal'
//           >
//             <Dropdown.Item key='dog'>Dog</Dropdown.Item>
//             <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
//             <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
//             <Dropdown.Item key='snake'>Snake</Dropdown.Item>
//           </Dropdown.ComboBox>
//         </Sidebar.Content>
//         <Sidebar.Actions>
//           <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
//             Action
//           </Button>
//           <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>
//             Action
//           </Button>
//         </Sidebar.Actions>
//       </Sidebar>
//     </div>
//   )
// }

export const Variants: React.FC = () => {
  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)
  const [isSecondaryOpen, setIsSecondaryOpen] = React.useState(false)
  return (
    <div style={{...style}}>
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
    </div>
  )
}
const meta = {
  title: 'Example/Sidebar',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
