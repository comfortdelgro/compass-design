import ArrowDown from '@comfortdelgro/compass-icons/react/arrow-down'
import Cross from '@comfortdelgro/compass-icons/react/cross'
import Exclamation from '@comfortdelgro/compass-icons/react/exclamation-filled'
import MapMarker from '@comfortdelgro/compass-icons/react/map-marker'
import Menu from '@comfortdelgro/compass-icons/react/menu'
import Notification from '@comfortdelgro/compass-icons/react/notification-filled'
import Pencil from '@comfortdelgro/compass-icons/react/pencil-filled'
import type {Meta} from '@storybook/react'
import React from 'react'
import Button from './index'
import styles from './styles/stories.module.css'

const Style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1.5rem',
  marginBottom: '2rem',
}

export const Variations: React.FC = () => (
  <div style={{width: '100%', height: '100%', padding: '2rem'}}>
    <h3>1. Variants</h3>
    <div style={{...Style}}>
      <Button variant='primary' onPress={() => console.log('pressed')}>
        Primary
      </Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button isDisabled>Disabled</Button>
    </div>
    <h4>Disabled state</h4>
    <div style={{...Style}}>
      <Button variant='primary' isDisabled>
        Primary
      </Button>
      <Button variant='secondary' isDisabled>
        Secondary
      </Button>
      <Button variant='danger' isDisabled>
        Danger
      </Button>
      <Button variant='ghost' isDisabled>
        Ghost
      </Button>
    </div>
    <h4>Custom style</h4>
    <h5>Custom style using css prop</h5>
    <div style={{...Style}}>
      <Button
        css={{
          width: 250,
          opacity: 0.9,
          backgroundColor: 'red',
          '.cdg-button-content-children': {color: 'purple'},
        }}
        onClick={(e) => console.log('click', e)}
      >
        Custom width and background color
      </Button>
    </div>
    <h5>Custom style using css module</h5>
    <div style={{...Style}}>
      <Button
        onClick={(e) => console.log('click', e)}
        className={styles.myButton}
      >
        Custom width and background color
      </Button>
    </div>
    <h3>2. Sizes</h3>
    <div style={{...Style}}>
      <Button size='lg'>Large</Button>
      <Button size='md'>Medium (Default)</Button>
      <Button size='sm'>Small</Button>

      <div style={{width: '300px', flexShrink: 0}}>
        <Button size='md' fullWidth>
          Medium (Block)
        </Button>
      </div>
    </div>
    <h4>Full width</h4>
    <div style={{...Style}}>
      <Button fullWidth onClick={(e) => console.log('click', e)}>
        Full Width (100%)
      </Button>
    </div>
    <h3>3. Ripple effect when being clicked</h3>
    <div style={{...Style}}>
      <Button
        ripple
        type='submit'
        variant='primary'
        onClick={() => console.log('clicked')}
        onPress={() => console.log('pressed')}
      >
        Primary
      </Button>
      <Button ripple variant='secondary'>
        Secondary
      </Button>
      <Button ripple variant='danger'>
        Danger
      </Button>
      <Button ripple variant='ghost'>
        Ghost
      </Button>
    </div>
    <h3>4. Left Icons</h3>
    <div style={{...Style}}>
      <Button variant='primary' leftIcon={<ArrowDown />}>
        Primary
      </Button>
      <Button variant='secondary' leftIcon={<ArrowDown />}>
        Secondary
      </Button>
      <Button variant='danger' leftIcon={<ArrowDown />}>
        Danger
      </Button>
      <Button variant='ghost' leftIcon={<ArrowDown />}>
        Ghost
      </Button>
      <Button isDisabled leftIcon={<ArrowDown />}>
        Disabled
      </Button>
    </div>

    <h3>5. Right Icons</h3>
    <div style={{...Style}}>
      <Button variant='primary' rightIcon={<ArrowDown />}>
        Primary
      </Button>
      <Button variant='secondary' rightIcon={<ArrowDown />}>
        Secondary
      </Button>
      <Button variant='danger' rightIcon={<ArrowDown />}>
        Danger
      </Button>
      <Button variant='ghost' rightIcon={<ArrowDown />}>
        Ghost
      </Button>
      <Button isDisabled rightIcon={<ArrowDown />}>
        Disabled
      </Button>
    </div>

    <h3>6. both Left & Right Icons</h3>
    <div style={{...Style}}>
      <Button
        variant='primary'
        leftIcon={<ArrowDown />}
        rightIcon={<MapMarker />}
      >
        Primary
      </Button>
      <Button
        variant='secondary'
        leftIcon={<ArrowDown />}
        rightIcon={<MapMarker />}
      >
        Secondary
      </Button>
      <Button
        variant='danger'
        leftIcon={<ArrowDown />}
        rightIcon={<MapMarker />}
      >
        Danger
      </Button>
      <Button
        variant='ghost'
        leftIcon={<ArrowDown />}
        rightIcon={<MapMarker />}
      >
        Ghost
      </Button>
      <Button isDisabled leftIcon={<ArrowDown />} rightIcon={<MapMarker />}>
        Disabled
      </Button>
    </div>

    <h3>7. With only Icons</h3>
    <div style={{...Style}}>
      <Button variant='primary'>
        <Menu />
      </Button>
      <Button variant='secondary'>
        <Cross />
      </Button>
      <Button variant='danger'>
        <Exclamation />
      </Button>
      <Button variant='ghost'>
        <Notification />
      </Button>
      <Button isDisabled>
        <Pencil />
      </Button>
    </div>
    <h3>8. Loading</h3>
    <div style={{...Style}}>
      <Button loading variant='primary' />
      <Button loading variant='secondary' />
      <Button loading variant='danger' />
      <Button loading variant='ghost' />
      <Button loading isDisabled />
    </div>

    <h3>9. Act as a link</h3>
    <div style={{...Style}}>
      <Button href='/#page' variant='primary' leftIcon={<ArrowDown />}>
        Click me
      </Button>
      <Button href='https://google.com' hrefExternal variant='secondary'>
        Google
      </Button>
      <Button href='/#page' variant='danger' hrefTarget='_blank'>
        Hit me
      </Button>
      <Button href='/#page' variant='ghost'>
        Beat me
      </Button>
    </div>

    <h4>Square button</h4>
    <div style={{...Style}}>
      <Button
        variant='primary'
        onPress={() => console.log('pressed')}
        isSquare={true}
      >
        Primary
      </Button>
      <Button variant='secondary' isSquare={true}>
        Secondary
      </Button>
      <Button variant='danger' isSquare={true}>
        Danger
      </Button>
      <Button isDisabled isSquare={true}>
        Disabled
      </Button>
    </div>
    <div style={{...Style}}>
      <Button variant='primary' isSquare={true}>
        <Menu />
      </Button>
      <Button variant='secondary' isSquare={true}>
        <Cross />
      </Button>
      <Button variant='danger' isSquare={true}>
        <Exclamation />
      </Button>
      <Button variant='ghost' isSquare={true}>
        <Notification />
      </Button>
      <Button isDisabled isSquare={true}>
        <Pencil />
      </Button>
    </div>
  </div>
)

const meta = {
  title: 'Example/Button',
  component: Variations,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variations>

export default meta
