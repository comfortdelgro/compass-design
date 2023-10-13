import Button from '@comfortdelgro/react-compass/button'
import {Footer, FooterInfo} from '@comfortdelgro/react-compass/footer'
import Icon from '@comfortdelgro/react-compass/icon'
import Link from '@comfortdelgro/react-compass/link'
import {faCamera, faGlobe} from '@fortawesome/free-solid-svg-icons'

type FooterColor = 'black' | 'white' | 'blue'

interface MyFooterProps {
  color?: FooterColor
}

const zigLogo = (
  <svg
    width='72'
    height='64'
    viewBox='0 0 72 64'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M23.9184 43.5045V51.4606H0V44.2043L13.5522 27.2439H0.301967V19.2808H23.9184V27.2369L11.3504 43.5045H23.9184Z'
      fill='currentColor'
    />
    <path
      d='M36.3957 51.4564H26.7816V19.2849H36.3957V51.4564Z'
      fill='currentColor'
    />
    <path
      d='M72 46.8758C72 51.4032 71.6743 54.2931 70.2022 56.8556C67.8605 60.6734 62.358 64 54.894 64C44.3797 64 40.4024 57.6743 39.804 53.3639H50.2639C51.571 56.3644 54.9486 56.3644 55.5483 56.3644C56.6919 56.3644 62.9018 56.2552 62.9018 48.1284V47.2019H62.7941C61.8673 48.9471 59.253 51.5095 54.5124 51.5095C46.2865 51.5095 39.2588 45.293 39.2588 35.5861C39.2588 25.2299 46.6682 19.2793 54.5124 19.2793C57.89 19.2793 61.2144 20.4787 62.8487 23.0971H62.9577V19.2807H72V46.8758ZM55.5483 43.058C59.9059 43.058 62.9577 39.8952 62.9577 35.533C62.9577 30.6781 59.6333 27.7336 55.6028 27.7336C51.7346 27.7336 48.3025 30.8419 48.3025 35.2601C48.3025 40.1135 51.7891 43.058 55.5483 43.058Z'
      fill='currentColor'
    />
    <path
      d='M31.5879 15.7023C35.9194 15.7023 39.4307 12.1872 39.4307 7.85114C39.4307 3.51507 35.9194 0 31.5879 0C27.2565 0 23.7451 3.51507 23.7451 7.85114C23.7451 12.1872 27.2565 15.7023 31.5879 15.7023Z'
      fill='currentColor'
    />
  </svg>
)

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
        <h1
          className='logo'
          style={{color: color === 'white' ? '#0142AF' : '#ffffff'}}
        >
          {zigLogo}
        </h1>
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
