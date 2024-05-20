import Cross from '@comfortdelgro/compass-icons/react/cross'
import HeartFilled from '@comfortdelgro/compass-icons/react/filled/heart-filled'
import type {Meta} from '@storybook/react'
import React from 'react'
import Button from '../button'
import Announcement from './index'

const Style: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1.5rem',
  marginBottom: '2rem',
}

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
    <HeartFilled width={22} />
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
      <HeartFilled width={22} />
    </div>
    <Button variant='ghost' css={{width: 24, height: 24, span: {padding: 0}}}>
      <Cross width={22} />
    </Button>
  </div>
)

const Body = () => (
  <>
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
  </>
)

const Right = () => (
  <Button variant='secondary' css={{background: 'white'}}>
    Button
  </Button>
)

export const Variant: React.FC = () => (
  <div style={Style}>
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
  </div>
)

export const Align: React.FC = () => (
  <div style={Style}>
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
  </div>
)

const meta = {
  title: 'Example/Announcement',
  component: Variant,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variant>

export default meta
