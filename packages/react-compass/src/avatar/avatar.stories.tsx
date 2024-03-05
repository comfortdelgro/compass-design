import {faBug} from '@fortawesome/free-solid-svg-icons/faBug'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Meta} from '@storybook/react'
import Status from './../status'
import Avatar from './index'

const images = [
  'https://i.pravatar.cc/160?img=32',
  'https://i.pravatar.cc/160?img=31',
  'https://i.pravatar.cc/160?u=a048581f4e29026701d',
  'https://i.pravatar.cc/160?img=60',
  'https://i.pravatar.cc/160?u=a042581f4e29026704d',
  'https://i.pravatar.cc/160?img=31',
  'https://i.pravatar.cc/160?img=32',
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

export const ImageAvatar: React.FC = () => (
  <div style={{padding: '20px'}}>
    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        image={images[0]}
        style={{width: '160px', height: '160px'}}
      />
      <Avatar label='Albert Einstein' image={images[0]} size='lg' />
      <Avatar label='Albert Einstein' image={images[1]} size='md' />
      <Avatar label='Albert Einstein' image={images[2]} size='sm' />
      <Avatar label='Albert Einstein' image={images[3]} size='xs' />
      <Avatar label='Albert Einstein' image={images[4]} size='xxs' />
    </div>
  </div>
)

export const Individual: React.FC = () => (
  <div style={{padding: '20px'}}>
    <h3>1. Image Avatar</h3>
    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        image={images[0]}
        style={{width: '160px', height: '160px'}}
      />
      <Avatar label='Albert Einstein' image={images[0]} size='lg' />
      <Avatar label='Albert Einstein' image={images[1]} size='md' />
      <Avatar label='Albert Einstein' image={images[2]} size='sm' />
      <Avatar label='Albert Einstein' image={images[3]} size='xs' />
      <Avatar label='Albert Einstein' image={images[4]} size='xxs' />
    </div>
    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        image={images[0]}
        status={
          <Status
            type='online'
            size='4xl'
            style={{bottom: '8px', right: '8px'}}
          ></Status>
        }
        style={{width: '160px', height: '160px'}}
      />
      <Avatar
        label='Albert Einstein'
        image={images[0]}
        size='lg'
        status={<Status type='offline' size='md'></Status>}
      />
      <Avatar
        label='Albert Einstein'
        image={images[1]}
        size='md'
        status={<Status type='verified' size='sm'></Status>}
      />
      <Avatar
        label='Albert Einstein'
        image={images[2]}
        size='sm'
        status={<Status type='zig' size='xs'></Status>}
      />
    </div>

    <h3>2. Letter Avatar</h3>

    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        style={{width: '160px', height: '160px'}}
      />
      <Avatar label='Albert Einstein' size='lg' />
      <Avatar label='Albert Einstein' size='md' />
      <Avatar label='Albert Einstein' size='sm' />
      <Avatar label='Albert Einstein' size='xs' />
      <Avatar label='Albert Einstein' size='xxs' />
    </div>
    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        status={
          <Status
            type='verified'
            size='4xl'
            style={{bottom: '8px', right: '8px'}}
          ></Status>
        }
        style={{width: '160px', height: '160px'}}
      />
      <Avatar
        label='Albert Einstein'
        size='lg'
        status={<Status type='verified' size='md'></Status>}
      />
      <Avatar
        label='Albert Einstein'
        size='md'
        status={<Status type='verified' size='sm'></Status>}
      />
      <Avatar
        label='Albert Einstein'
        size='sm'
        status={<Status type='verified' size='xs'></Status>}
      />
    </div>

    <h3>3. Icon Avatar</h3>
    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        style={{width: '160px', height: '160px'}}
      />
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        size='lg'
      />
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        size='md'
      />
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        size='sm'
      />
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        size='xs'
      />
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        size='xxs'
      />
    </div>
    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        style={{width: '160px', height: '160px'}}
        status={
          <Status
            type='online'
            size='4xl'
            style={{bottom: '8px', right: '8px'}}
          ></Status>
        }
      />
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        size='lg'
        status={<Status type='offline' size='md'></Status>}
      />
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        size='md'
        status={<Status type='verified' size='sm'></Status>}
      />
      <Avatar
        label='Albert Einstein'
        icon={<FontAwesomeIcon icon={faBug} />}
        size='sm'
        status={<Status type='zig' size='xs'></Status>}
      />
    </div>
  </div>
)

export const WithStatus: React.FC = () => (
  <div style={{padding: '20px'}}>
    <h3>1. Image Avatar</h3>
    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        label='Albert Einstein'
        image={images[0]}
        style={{width: '160px', height: '160px'}}
        status={
          <Status
            type='online'
            size='4xl'
            style={{bottom: '8px', right: '8px'}}
          ></Status>
        }
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
        style={{width: '160px', height: '160px'}}
      />
      <Avatar label='Albert Einstein' size='lg' />
      <Avatar label='Albert Einstein' size='md' />
      <Avatar label='Albert Einstein' size='sm' />
      <Avatar label='Albert Einstein' size='xs' />
      <Avatar label='Albert Einstein' size='xxs' />
    </div>

    <h3>3. Icon Avatar</h3>
    <div style={{display: 'flex', gap: '8px'}}>
      <Avatar
        icon={<FontAwesomeIcon icon={faBug} />}
        style={{width: '160px', height: '160px'}}
      />
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='lg' />
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='md' />
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='sm' />
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='xs' />
      <Avatar icon={<FontAwesomeIcon icon={faBug} />} size='xxs' />
    </div>
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
    <Avatar.Group display={5} size='md'>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} />
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

export const WithAddMore: React.FC = () => (
  <div style={{padding: '20px'}}>
    <h3>1. Extra Extra Small</h3>
    <Avatar.Group display={5} size='xxs' useAddMore={true}>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} image={avatar} />
      })}
    </Avatar.Group>

    <h3>2. Extra Small</h3>
    <Avatar.Group display={5} size='xs' useAddMore={true}>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} image={avatar} />
      })}
    </Avatar.Group>

    <h3>3. Small</h3>
    <Avatar.Group display={5} size='sm' useAddMore={true}>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} image={avatar} />
      })}
    </Avatar.Group>

    <h3>4. Medium</h3>
    <Avatar.Group display={5} size='md' useAddMore={true}>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} />
      })}
    </Avatar.Group>

    <h3>5. Large</h3>
    <Avatar.Group display={5} size='lg' useAddMore={true}>
      {images.map((avatar, index) => {
        return <Avatar label={nameList[index]} image={avatar} />
      })}
    </Avatar.Group>
  </div>
)

const meta = {
  title: 'Example/Avatar',
  component: ImageAvatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ImageAvatar>

export default meta
