import {Announcement, Button, Column, Icon} from '@comfortdelgro/react-compass'
import {faClose, faImage} from '@fortawesome/free-solid-svg-icons'

const Left = () => (
  <div
    style={{
      width: '48px',
      height: '48px',
      background: '#FFF',
      borderRadius: '99999px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Icon icon={faImage} width={22} />
  </div>
)

const Header = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <div
      style={{
        width: '48px',
        height: '48px',
        background: '#FFF',
        borderRadius: '99999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon icon={faImage} width={22} />
    </div>
    <Button variant='ghost' css={{width: 24, height: 24, span: {padding: 0}}}>
      <Icon icon={faClose} width={22} />
    </Button>
  </div>
)

const Body = () => (
  <div>
    <h5
      style={{
        margin: 0,
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '24px',
      }}
    >
      Stay up to date with the latest news and updates
    </h5>
    <p
      style={{
        margin: 0,
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>
)

const Right = () => (
  <Button variant='secondary' css={{background: 'white'}}>
    Button
  </Button>
)

const Variant: React.FC = () => {
  return (
    <Column>
      <Announcement.Banner>
        <Announcement.Banner.Left>
          <Left />
        </Announcement.Banner.Left>
        <Announcement.Banner.Body>
          <Body />
        </Announcement.Banner.Body>
        <Announcement.Banner.Right>
          <Right />
        </Announcement.Banner.Right>
      </Announcement.Banner>

      <Announcement.Banner variant='primary-dark'>
        <Announcement.Banner.Left>
          <Left />
        </Announcement.Banner.Left>
        <Announcement.Banner.Body>
          <Body />
        </Announcement.Banner.Body>
        <Announcement.Banner.Right>
          <Right />
        </Announcement.Banner.Right>
      </Announcement.Banner>

      <Announcement.Banner variant='gray-light'>
        <Announcement.Banner.Left>
          <Left />
        </Announcement.Banner.Left>
        <Announcement.Banner.Body>
          <Body />
        </Announcement.Banner.Body>
        <Announcement.Banner.Right>
          <Right />
        </Announcement.Banner.Right>
      </Announcement.Banner>

      <Announcement.Card css={{width: '300px'}}>
        <Announcement.Card.Header>
          <Header />
        </Announcement.Card.Header>
        <Announcement.Card.Body>
          <Body />
        </Announcement.Card.Body>
        <Announcement.Card.Footer>
          <Right />
        </Announcement.Card.Footer>
      </Announcement.Card>

      <Announcement.Card variant='primary-dark' css={{width: '300px'}}>
        <Announcement.Card.Header>
          <Header />
        </Announcement.Card.Header>
        <Announcement.Card.Body>
          <Body />
        </Announcement.Card.Body>
        <Announcement.Card.Footer>
          <Right />
        </Announcement.Card.Footer>
      </Announcement.Card>

      <Announcement.Card variant='gray-light' css={{width: '300px'}}>
        <Announcement.Card.Header>
          <Header />
        </Announcement.Card.Header>
        <Announcement.Card.Body>
          <Body />
        </Announcement.Card.Body>
        <Announcement.Card.Footer>
          <Right />
        </Announcement.Card.Footer>
      </Announcement.Card>
    </Column>
  )
}

export default Variant
