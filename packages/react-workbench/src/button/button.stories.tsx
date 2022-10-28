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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Column, Row} from '../utils/components'
import Button from './button'

export const Variants: React.FC = () => (
  <Column>
    <Row>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button disabled>Disabled</Button>
    </Row>

    <h3>With Left Icons</h3>
    <Row>
      <Button variant='primary' leftIcon={faChevronDown}>
        Primary
      </Button>
      <Button variant='secondary' leftIcon={faChevronDown}>
        Secondary
      </Button>
      <Button variant='danger' leftIcon={faChevronDown}>
        Danger
      </Button>
      <Button variant='ghost' leftIcon={faChevronDown}>
        Ghost
      </Button>
      <Button disabled leftIcon={faChevronDown}>
        Disabled
      </Button>
    </Row>

    <h3>With Right Icons</h3>
    <Row>
      <Button variant='primary' rightIcon={faChevronDown}>
        Primary
      </Button>
      <Button variant='secondary' rightIcon={faChevronDown}>
        Secondary
      </Button>
      <Button variant='danger' rightIcon={faChevronDown}>
        Danger
      </Button>
      <Button variant='ghost' rightIcon={faChevronDown}>
        Ghost
      </Button>
      <Button disabled rightIcon={faChevronDown}>
        Disabled
      </Button>
    </Row>

    <h3>With both Left & Right Icons</h3>
    <Row>
      <Button
        variant='primary'
        leftIcon={faChevronDown}
        rightIcon={faMapMarkerAlt}
      >
        Primary
      </Button>
      <Button
        variant='secondary'
        leftIcon={faChevronDown}
        rightIcon={faMapMarkerAlt}
      >
        Secondary
      </Button>
      <Button
        variant='danger'
        leftIcon={faChevronDown}
        rightIcon={faMapMarkerAlt}
      >
        Danger
      </Button>
      <Button
        variant='ghost'
        leftIcon={faChevronDown}
        rightIcon={faMapMarkerAlt}
      >
        Ghost
      </Button>
      <Button disabled leftIcon={faChevronDown} rightIcon={faMapMarkerAlt}>
        Disabled
      </Button>
    </Row>

    <h3>With only Icons</h3>
    <Row>
      <Button variant='primary' size='lg'>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Button variant='secondary'>
        <FontAwesomeIcon icon={faClose} />
      </Button>
      <Button variant='danger'>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </Button>
      <Button variant='ghost'>
        <FontAwesomeIcon icon={faBell} />
      </Button>
      <Button disabled>
        <FontAwesomeIcon icon={faUserEdit} />
      </Button>
    </Row>

    <h3>With only Icons + Icon Only Option</h3>

    <Row>
      <Button variant='primary' iconOnly>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Button variant='secondary' iconOnly>
        <FontAwesomeIcon icon={faClose} />
      </Button>
      <Button variant='danger' iconOnly>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </Button>
      <Button variant='ghost' iconOnly>
        <FontAwesomeIcon icon={faBell} />
      </Button>
      <Button disabled iconOnly>
        <FontAwesomeIcon icon={faUserEdit} />
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
      <Button loading disabled>
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

      <div style={{width: '300px'}}>
        <Button size='md' block>
          Medium (Block)
        </Button>
      </div>
    </Row>

    <h3>With Icons</h3>
    <Row>
      <Button size='lg' leftIcon={faHamburger}>
        Big Mac
      </Button>
      <Button size='md' rightIcon={faDownload}>
        Download
      </Button>
      <Button size='sm' rightIcon={faChevronDown}>
        Dropdown
      </Button>
      <div style={{width: '300px'}}>
        <Button block size='md' leftIcon={faHeadset} rightIcon={faChevronDown}>
          Contact Support
        </Button>
      </div>
    </Row>
  </Column>
)
