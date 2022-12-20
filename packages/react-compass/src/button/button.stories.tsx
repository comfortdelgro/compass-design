import {
  faBars,
  faBell,
  faChevronDown,
  faClose,
  faDownload,
  faExclamationTriangle,
  faHamburger,
  faHeadset,
  faMapMarkerAlt,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons'
import {Icon} from '../icon'
import {Column, Row} from '../utils/components'
import Button from './index'

export const Variants: React.FC = () => (
  <Column>
    <Row>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button isDisabled>Disabled</Button>
    </Row>

    <h3>With Left Icons</h3>

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

    <h3>With Right Icons</h3>
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

    <h3>With both Left & Right Icons</h3>
    <Row>
      <Button
        variant='primary'
        leftIcon={<Icon icon={faChevronDown} />}
        rightIcon={<Icon icon={faMapMarkerAlt} />}
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

    <h3>With only Icons</h3>
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

    <h3>Loading</h3>
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

export const Sizes = () => (
  <Column>
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

    <h3>With Icons</h3>
    <Row>
      <Button size='lg' leftIcon={<Icon icon={faHamburger} />}>
        Big Mac
      </Button>
      <Button size='md' rightIcon={<Icon icon={faDownload} />}>
        Download
      </Button>
      <Button size='sm' rightIcon={<Icon icon={faChevronDown} />}>
        Dropdown
      </Button>
      <div style={{width: '300px', flexShrink: 0}}>
        <Button
          size='md'
          fullWidth
          leftIcon={<Icon icon={faHeadset} />}
          rightIcon={<Icon icon={faChevronDown} />}
        >
          Contact Support
        </Button>
      </div>
    </Row>
  </Column>
)
