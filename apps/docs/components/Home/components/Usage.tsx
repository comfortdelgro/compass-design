import {
  Box,
  Divider,
  Typography,
  useIsDarkTheme,
} from '@comfortdelgro/react-compass'
import Container from 'components/Container'
import HighlightedCode from 'components/HighlightedCode'
import {getStaticPath} from 'utils'
import Card from './Card'
import ShowcaseContainer from './ShowcaseContainer'

export const coreCode = `
// _app.tsx
import type { AppProps } from 'next/app'
import '@comfortdelgro/react-compass/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
`

const preflightCode = `
// _app.tsx
import type { AppProps } from 'next/app'
import {Preflight} from '@comfortdelgro/react-compass'

import '@comfortdelgro/react-compass/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Preflight />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
`

function Usage() {
  const isDarkTheme = useIsDarkTheme()
  return (
    <Box
      css={{
        padding: '4rem 0',
        background: isDarkTheme ? 'var(--colors-gray90)' : '#ECE2EF',
      }}
    >
      <Container>
        <Box>
          <Typography.Header>Usage</Typography.Header>
          <Typography.Body
            variant='body2'
            css={{padding: 'var(--cdg-spacing-5) 0 var(--cdg-spacing-3) 0'}}
          >
            There are three parts of the package: CSS, Javascript, and Icon or
            Image resource. We are fetching icon and images from cdn by default.
          </Typography.Body>
        </Box>
        <Box css={{paddingTop: 'var(cdg-spacing-4)'}}>
          <div className='cdg-card-row'>
            <Card
              title='Latest updates'
              description='Check out our latest updates'
              textLink='Latest updates'
              urlLink='https://github.com/comfortdelgro/compass-design/releases'
              target='_blank'
              image={getStaticPath('/static/images/home/lastest-updated.png')}
            />
            <Card
              title='Github'
              description='Check out our github repo.'
              textLink='Get started'
              urlLink='https://github.com/comfortdelgro/compass-design'
              target='_blank'
              image={getStaticPath('/static/images/home/github.png')}
            />
          </div>
        </Box>
        <Divider css={{padding: 'var(--cdg-spacing-4)'}} />
        <Box css={{paddingTop: 'var(--cdg-spacing-8)'}}>
          <Typography.Header css={{paddingBottom: 'var(--cdg-spacing-3)'}}>
            Add compass-design style into your SSR app
          </Typography.Header>
          <ShowcaseContainer
            code={
              <HighlightedCode
                copyButtonHidden
                component={Box}
                code={coreCode}
                language='jsx'
              />
            }
          />
        </Box>
        <Box css={{padding: 'var(--cdg-spacing-8) 0px'}}>
          <Typography.Header css={{paddingBottom: 'var(--cdg-spacing-3)'}}>
            Add Preflight component for better CSS resets according to design
            guidelines.
          </Typography.Header>
          <ShowcaseContainer
            code={
              <HighlightedCode
                copyButtonHidden
                component={Box}
                code={preflightCode}
                language='jsx'
              />
            }
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Usage
