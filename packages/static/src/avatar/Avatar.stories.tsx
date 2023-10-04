import {Meta} from '@storybook/react'
import Avatar from './index'

const images = [
  'https://i.pravatar.cc/150?img=32',
  'https://i.pravatar.cc/150?img=31',
  'https://i.pravatar.cc/150?u=a048581f4e29026701d',
  'https://i.pravatar.cc/150?img=60',
  'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  'https://i.pravatar.cc/150?img=31',
  'https://i.pravatar.cc/150?img=32',
] as const

const nameList = [
  'Leonhard Euler',
  'Isaac Newton',
  'Alan Turing',
  'David Hilbert',
  'Edwin Hubble',
  'Ada Lovelace',
  'Max Planck',
  'Leonhard Euler',
  'Isaac Newton',
  'Alan Turing',
  'David Hilbert',
  'Edwin Hubble',
  'Ada Lovelace',
  'Max Planck',
]

export const Individual: React.FC = () => (
  <div style={{padding: '20px'}}>
    <h3>1. Image Avatar</h3>
    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        image={images[0]}
        style={{width: '120px', height: '120px'}}
      />
      <Avatar label='Albert Einstein' image={images[0]} size='lg' />
      <Avatar label='Albert Einstein' image={images[1]} size='md' />
      <Avatar label='Albert Einstein' image={images[2]} size='sm' />
      <Avatar label='Albert Einstein' image={images[3]} size='xs' />
      <Avatar label='Albert Einstein' image={images[4]} size='xxs' />
    </div>

    <h3>2. Letter Avatar</h3>

    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        style={{width: '120px', height: '120px'}}
      />
      <Avatar label='Albert Einstein' size='lg' />
      <Avatar label='Albert Einstein' size='md' />
      <Avatar label='Albert Einstein' size='sm' />
      <Avatar label='Albert Einstein' size='xs' />
      <Avatar label='Albert Einstein' size='xxs' />
    </div>

    <h3>3. Icon Avatar</h3>

    {/* <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='lg' />
    <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='md' />
    <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='sm' />
    <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='xs' />
    <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='xxs' /> */}
  </div>
)

export const Grouped: React.FC = () => (
  <div style={{padding: '20px'}}>
    <h3>1. Extra Extra Small</h3>
    <Avatar.Group display={5} size='xxs'>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} image={avatar} />
      })}
    </Avatar.Group>

    <h3>2. Extra Small</h3>
    <Avatar.Group display={5} size='xs'>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} image={avatar} />
      })}
    </Avatar.Group>

    <h3>3. Small</h3>
    <Avatar.Group display={5} size='sm'>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} image={avatar} />
      })}
    </Avatar.Group>

    <h3>4. Medium</h3>
    <Avatar.Group display={5} size='md'>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} image={avatar} />
      })}
    </Avatar.Group>

    <h3>5. Large</h3>
    <Avatar.Group display={5} size='lg'>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} image={avatar} />
      })}
    </Avatar.Group>
  </div>
)

const meta = {
  title: 'Example/Avatar',
  component: Individual,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Individual>

export default meta
