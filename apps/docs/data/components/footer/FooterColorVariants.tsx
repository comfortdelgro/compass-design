import Button from '@comfortdelgro/react-compass/button'
import {Footer, FooterInfo} from '@comfortdelgro/react-compass/footer'
import Icon from '@comfortdelgro/react-compass/icon'
import Link from '@comfortdelgro/react-compass/link'
import {faCamera, faGlobe} from '@fortawesome/free-solid-svg-icons'

type FooterColor = 'black' | 'white' | 'blue'

interface MyFooterProps {
  color?: FooterColor
}

const MyFooter: React.FC<MyFooterProps> = ({color = 'white'}) => {
  return (
    <Footer
      color={color}
      css={{
        '& a': {
          color: '$gray70',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '400',
        },
      }}
    >
      <Footer.Header
        className='top-items'
        css={{
          '& .logo': {
            fontSize: '30px',
            color: '$cdgBlue',
            margin: 0,
          },
        }}
      >
        <h1 className='logo'>zig</h1>
        <div
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
        >
          <Icon
            icon={faGlobe}
            style={{width: '22px', height: '22px', marginRight: '8px'}}
          ></Icon>
          <p style={{margin: 0}}>English</p>
        </div>
      </Footer.Header>
      <Footer.Nav
        className='center-items'
        gridNumber={6}
        css={{
          '& .footer-nav-title': {
            fontSize: '16px',
            fontWeight: 500,
            margin: 0,
          },
        }}
      >
        <div>
          <h3 className='footer-nav-title' style={{fontWeight: 'bold'}}>
            About us
          </h3>
          <Link href='#'>Profile</Link>
          <Link href='#'>Milestones</Link>
          <Link href='#'>Careers</Link>
        </div>
        <div>
          <h3 className='footer-nav-title' style={{fontWeight: 'bold'}}>
            About us
          </h3>
          <Link href='#'>Profile</Link>
          <Link href='#'>Milestones</Link>
          <Link href='#'>Careers</Link>
        </div>
        <div>
          <h3 className='footer-nav-title' style={{fontWeight: 'bold'}}>
            About us
          </h3>
          <Link href='#'>Profile</Link>
          <Link href='#'>Milestones</Link>
          <Link href='#'>Careers</Link>
        </div>
        <div>
          <h3 className='footer-nav-title' style={{fontWeight: 'bold'}}>
            About us
          </h3>
          <Link href='#'>Profile</Link>
          <Link href='#'>Milestones</Link>
          <Link href='#'>Careers</Link>
        </div>
        <div>
          <h3 className='footer-nav-title' style={{fontWeight: 'bold'}}>
            About us
          </h3>
          <Link href='#'>Profile</Link>
          <Link href='#'>Milestones</Link>
          <Link href='#'>Careers</Link>
        </div>
        <div>
          <h3 className='footer-nav-title' style={{fontWeight: 'bold'}}>
            About us
          </h3>
          <Link href='#'>Profile</Link>
          <Link href='#'>Milestones</Link>
          <Link href='#'>Careers</Link>
        </div>
      </Footer.Nav>
      <FooterInfo
        css={{
          '& span': {fontSize: '14px', fontWeight: 600, lineHeight: '21px'},
        }}
      >
        <div>
          <FooterInfo.Social>
            <Icon icon={faCamera} />
            <Icon icon={faCamera} />
            <Icon icon={faCamera} />
          </FooterInfo.Social>
          <span>383 Sin Ming Dr</span>
          <br />
          <span>Singapore 575717</span>
        </div>
        <FooterInfo.Download>
          <Button
            variant='secondary'
            css={{width: '136px', background: 'black'}}
          >
            {' '}
            Appstore
          </Button>
          <Button
            variant='secondary'
            css={{width: '136px', background: 'black'}}
          >
            {' '}
            Google Play
          </Button>
        </FooterInfo.Download>
      </FooterInfo>
      <Footer.Policy>
        <p style={{margin: 0, lineHeight: '21px'}}>
          2022 ComfortDelGroTaxi. All rights reserved
        </p>
        <div
          style={{
            display: 'flex',
            width: 'fit-content',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <Link href='#'>Privacy</Link>
          <Link href='#'>Accessibility</Link>
          <Link href='#'>Terms</Link>
        </div>
      </Footer.Policy>
    </Footer>
  )
}

function FooterColorVariants() {
  return (
    <>
      <h1>White</h1>
      <br />
      <MyFooter color='white' />
      <br />
      <h1>Black</h1>
      <br />
      <MyFooter color='black' />
      <br />
      <h1>Blue</h1>
      <br />
      <MyFooter color='blue' />
    </>
  )
}

export default FooterColorVariants
