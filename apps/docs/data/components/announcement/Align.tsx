import {Announcement, Button, Column, Icon} from '@comfortdelgro/react-compass'
import {faImage} from '@fortawesome/free-solid-svg-icons'

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

const Align: React.FC = () => {
  return (
    <Column>
      <Announcement.Banner>
        <Announcement.Banner.Left>
          <Left />
        </Announcement.Banner.Left>
        <Announcement.Banner.Body align='left'>
          <Body />
        </Announcement.Banner.Body>
        <Announcement.Banner.Right>
          <Right />
        </Announcement.Banner.Right>
      </Announcement.Banner>

      <Announcement.Banner>
        <Announcement.Banner.Left>
          <Left />
        </Announcement.Banner.Left>
        <Announcement.Banner.Body align='center'>
          <Body />
        </Announcement.Banner.Body>
        <Announcement.Banner.Right>
          <Right />
        </Announcement.Banner.Right>
      </Announcement.Banner>

      <Announcement.Banner>
        <Announcement.Banner.Left>
          <Left />
        </Announcement.Banner.Left>
        <Announcement.Banner.Body align='right'>
          <Body />
        </Announcement.Banner.Body>
        <Announcement.Banner.Right>
          <Right />
        </Announcement.Banner.Right>
      </Announcement.Banner>
    </Column>
  )
}

export default Align
