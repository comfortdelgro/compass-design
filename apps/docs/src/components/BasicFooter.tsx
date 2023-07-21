import {
  Button,
  Footer,
  FooterInfo,
  Icon,
  Link,
} from '@comfortdelgro/react-compass'
import {faCamera, faGlobe} from '@fortawesome/free-solid-svg-icons'

interface BasicFooterProps {
  color?: 'white' | 'black' | 'blue'
}

export const BasicFooter = (props: BasicFooterProps) => {
  const {color = 'white'} = props

  const logoColor = color === 'white' ? '$cdgBlue' : '$whiteText'

  const buttonVariant = color === 'white' ? 'secondary' : 'primary'

  const linkColor = color === 'white' ? '$gray70' : '$whiteText'

  return (
    <Footer
      color={color}
      css={{
        '& a': {
          color: linkColor,
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
            color: {logoColor},
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
            variant={buttonVariant}
            css={{width: '136px', background: 'black'}}
            className={`${color !== 'white'? `c-hKssGC-hYGuEl-variant-primary`:``}`}
          >
            {' '}
            Appstore
          </Button>
          <Button
            variant={buttonVariant}
            css={{width: '136px', background: 'black'}}
            className={`${color !== 'white'? `c-hKssGC-hYGuEl-variant-primary`:``}`}
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
