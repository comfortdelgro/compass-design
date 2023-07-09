import Compass from '@comfortdelgro/compass-icons/react/colorful/compass'
import Facebook from '@comfortdelgro/compass-icons/react/colorful/facebook'
import Twitter from '@comfortdelgro/compass-icons/react/colorful/twitter'
import Youtube from '@comfortdelgro/compass-icons/react/colorful/youtube'
import {Box, Typography} from '@comfortdelgro/react-compass'
import Link from 'next/link'
import Container from './Container'

interface AppFooterProps {
  stackOverflowUrl?: string
}

export default function AppFooter(props: AppFooterProps) {
  return (
    <Box css={{padding: '$8 0'}}>
      <Container>
        <Box
          css={{
            display: 'flex',
          }}
        >
          <Link href='/'>
            <Compass width={40} height={40} />
          </Link>
          <Typography.Header css={{marginLeft: 5}} variant='header3'>
            React Compass
          </Typography.Header>
          <Box css={{display: 'flex'}}>
            <Box css={{padding: '0 $1'}}>
              <Facebook />
            </Box>
            <Box css={{padding: '0 $1'}}>
              <Youtube />
            </Box>
            <Box css={{padding: '0 $1'}}>
              <Twitter />
            </Box>
          </Box>
        </Box>
        <Typography.Label variant='label2'>
          Copyright © {new Date().getFullYear()}
        </Typography.Label>
      </Container>
    </Box>
  )
}
