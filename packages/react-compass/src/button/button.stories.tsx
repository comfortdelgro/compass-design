import {
  faBars,
  faBell,
  faChevronDown,
  faClose,
  faExclamationTriangle,
  faMapMarkerAlt,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Icon} from '../icon'
import {Column, Row} from '../utils/components'
import Button from './index'

export const Variations: React.FC = () => (
  <Column>
    <h3>1. Variants</h3>
    <Row>
      <Button variant='primary' onPress={() => console.log('pressed')}>
        Primary
      </Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button isDisabled>Disabled</Button>
    </Row>
    <h3>2. Sizes</h3>
    <Row>
      <Button size='lg'>Large</Button>
      <Button size='md'>Medium (Default)</Button>
      <Button size='sm'>Small</Button>

      <div style={{width: '300px', flexShrink: 0}}>
        <Button size='md' fullWidth>
          Medium (Block)
        </Button>
      </div>
    </Row>

    <h3>3. Ripple effect when being clicked</h3>
    <Row>
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
    </Row>

    <h3>4. Left Icons</h3>

    <Row>
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
    </Row>

    <h3>5. Right Icons</h3>
    <Row>
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
    </Row>

    <h3>6. both Left & Right Icons</h3>
    <Row>
      <Button
        variant='primary'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
<<<<<<< HEAD
=======
        css={{width: '350px'}}
>>>>>>> parent of ba232931 ([yagin][fix comment PR])
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
    </Row>

    <h3>7. With only Icons</h3>
    <Row>
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
    </Row>

    <h3>8. Loading</h3>
    <Row>
      <Button loading variant='primary'>
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
    </Row>
  </Column>
)
