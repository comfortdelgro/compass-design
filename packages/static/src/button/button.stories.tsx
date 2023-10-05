import {
  faBars,
  faBell,
  faChevronDown,
  faClose,
  faExclamationTriangle,
  faMapMarkerAlt,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons'
import type {Meta} from '@storybook/react'
import React from 'react'
import Icon from '../icon'
import Button from './index'

export const Variations: React.FC = () => (
  <div style={{width: '100%', height: '100%', padding: '2rem'}}>
    <h3>1. Variants</h3>
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      <Button css={{width: '250px'}} onClick={(e) => console.log('click', e)}>
        Primary
      </Button>
      <Button variant='primary' onPress={() => console.log('pressed')}>
        Primary
      </Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button isDisabled>Disabled</Button>
    </div>
    <h4>Disabled state</h4>
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
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
    <h3>2. Sizes</h3>
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      <Button size='lg'>Large</Button>
      <Button size='md'>Medium (Default)</Button>
      <Button size='sm'>Small</Button>

      <div style={{width: '300px', flexShrink: 0}}>
        <Button size='md' fullWidth>
          Medium (Block)
        </Button>
      </div>
    </div>
    <h3>3. Ripple effect when being clicked</h3>
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
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
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      <Button variant='primary' leftIcon={<Icon icon={faChevronDown} />}>
        Primary
      </Button>
      <Button variant='secondary' leftIcon={<Icon icon={faChevronDown} />}>
        Secondary
      </Button>
      <Button variant='danger' leftIcon={<Icon icon={faChevronDown} />}>
        Danger
      </Button>
      <Button variant='ghost' leftIcon={<Icon icon={faChevronDown} />}>
        Ghost
      </Button>
      <Button isDisabled leftIcon={<Icon icon={faChevronDown} />}>
        Disabled
      </Button>
    </div>

    <h3>5. Right Icons</h3>
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      <Button variant='primary' rightIcon={<Icon icon={faChevronDown} />}>
        Primary
      </Button>
      <Button variant='secondary' rightIcon={<Icon icon={faChevronDown} />}>
        Secondary
      </Button>
      <Button variant='danger' rightIcon={<Icon icon={faChevronDown} />}>
        Danger
      </Button>
      <Button variant='ghost' rightIcon={<Icon icon={faChevronDown} />}>
        Ghost
      </Button>
      <Button isDisabled rightIcon={<Icon icon={faChevronDown} />}>
        Disabled
      </Button>
    </div>

    <h3>6. both Left & Right Icons</h3>
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      <Button
        variant='primary'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
        css={{width: '350px'}}
      >
        Primary
      </Button>
      <Button
        variant='secondary'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Secondary
      </Button>
      <Button
        variant='danger'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Danger
      </Button>
      <Button
        variant='ghost'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Ghost
      </Button>
      <Button
        isDisabled
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Disabled
      </Button>
    </div>

    <h3>7. With only Icons</h3>
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      <Button variant='primary'>
        <Icon icon={faBars} />
      </Button>
      <Button variant='secondary'>
        <Icon icon={faClose} />
      </Button>
      <Button variant='danger'>
        <Icon icon={faExclamationTriangle} />
      </Button>
      <Button variant='ghost'>
        <Icon icon={faBell} />
      </Button>
      <Button isDisabled>
        <Icon icon={faUserEdit} />
      </Button>
    </div>
    <h3>8. Loading</h3>
    <div>
      <Button
        loading
        variant='primary'
        onClick={() => console.log('click loading')}
      >
        Primary
      </Button>
      <Button loading variant='secondary'>
        Secondary
      </Button>
      <Button loading variant='danger'>
        Danger
      </Button>
      <Button loading variant='ghost'>
        Ghost
      </Button>
      <Button loading isDisabled>
        Disabled
      </Button>
    </div>

    {/* <h4>Disabled state</h4>
    <div>
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
    <h3>2. Sizes</h3>
    <div>
      <Button size='lg'>Large</Button>
      <Button size='md'>Medium (Default)</Button>
      <Button size='sm'>Small</Button>

      <div style={{width: '300px', flexShrink: 0}}>
        <Button size='md' fullWidth>
          Medium (Block)
        </Button>
      </div>
    </div>
    <h3>3. Ripple effect when being clicked</h3>
    <div>
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
    <div>
      <Button variant='primary' leftIcon={<Icon icon={faChevronDown} />}>
        Primary
      </Button>
      <Button variant='secondary' leftIcon={<Icon icon={faChevronDown} />}>
        Secondary
      </Button>
      <Button variant='danger' leftIcon={<Icon icon={faChevronDown} />}>
        Danger
      </Button>
      <Button variant='ghost' leftIcon={<Icon icon={faChevronDown} />}>
        Ghost
      </Button>
      <Button isDisabled leftIcon={<Icon icon={faChevronDown} />}>
        Disabled
      </Button>
    </div>
    <h3>5. Right Icons</h3>
    <div>
      <Button variant='primary' rightIcon={<Icon icon={faChevronDown} />}>
        Primary
      </Button>
      <Button variant='secondary' rightIcon={<Icon icon={faChevronDown} />}>
        Secondary
      </Button>
      <Button variant='danger' rightIcon={<Icon icon={faChevronDown} />}>
        Danger
      </Button>
      <Button variant='ghost' rightIcon={<Icon icon={faChevronDown} />}>
        Ghost
      </Button>
      <Button isDisabled rightIcon={<Icon icon={faChevronDown} />}>
        Disabled
      </Button>
    </div>
    <h3>6. both Left & Right Icons</h3>
    <div>
      <Button
        variant='primary'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
        css={{width: '350px'}}
      >
        Primary
      </Button>
      <Button
        variant='secondary'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Secondary
      </Button>
      <Button
        variant='danger'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Danger
      </Button>
      <Button
        variant='ghost'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Ghost
      </Button>
      <Button
        isDisabled
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
      >
        Disabled
      </Button>
    </div>
    <h3>7. With only Icons</h3>
    <div>
      <Button variant='primary'>
        <Icon icon={faBars} />
      </Button>
      <Button variant='secondary'>
        <Icon icon={faClose} />
      </Button>
      <Button variant='danger'>
        <Icon icon={faExclamationTriangle} />
      </Button>
      <Button variant='ghost'>
        <Icon icon={faBell} />
      </Button>
      <Button isDisabled>
        <Icon icon={faUserEdit} />
      </Button>
    </div>
    <h3>8. Loading</h3>
    <div>
      <Button
        loading
        variant='primary'
        onClick={() => console.log('click loading')}
      >
        Primary
      </Button>
      <Button loading variant='secondary'>
        Secondary
      </Button>
      <Button loading variant='danger'>
        Danger
      </Button>
      <Button loading variant='ghost'>
        Ghost
      </Button>
      <Button loading isDisabled>
        Disabled
      </Button>
    </div>
    <h3>9. Act as a link</h3>
    <div>
      <Button href='/#page' variant='primary'>
        Primary
      </Button>
      <Button href='https://google.com' hrefExternal variant='secondary'>
        Google
      </Button>
      <Button href='/#page' variant='danger' hrefTarget='_blank'>
        Danger
      </Button>
      <Button href='/#page' variant='ghost'>
        Ghost
      </Button>
    </div>
    <h3>10. H5</h3>
    <div>
      <Button variant='primary' h5 onPress={() => console.log('pressed')}>
        Primary
      </Button>
      <Button variant='secondary' h5>
        Secondary
      </Button>
      <Button variant='danger' h5>
        Danger
      </Button>
      <Button isDisabled h5>
        Disabled
      </Button>
    </div>
    <h3>Square button</h3>
    <div>
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
    <div>
      <Button variant='primary' isSquare={true}>
        <Icon icon={faBars} />
      </Button>
      <Button variant='secondary' isSquare={true}>
        <Icon icon={faClose} />
      </Button>
      <Button variant='danger' isSquare={true}>
        <Icon icon={faExclamationTriangle} />
      </Button>
      <Button variant='ghost' isSquare={true}>
        <Icon icon={faBell} />
      </Button>
      <Button isDisabled isSquare={true}>
        <Icon icon={faUserEdit} />
      </Button>
    </div> */}
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
