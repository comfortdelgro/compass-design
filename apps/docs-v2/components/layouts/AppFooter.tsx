import Compass from '@comfortdelgro/compass-icons/react/colorful/compass'
import {Box, Typography} from '@comfortdelgro/react-compass'
import Link from 'next/link'
import Container from './Container'

interface AppFooterProps {
  stackOverflowUrl?: string
}

export default function AppFooter(props: AppFooterProps) {
  return (
    <Box css={{padding: '$8 0', background: '#D9D2E9'}}>
      <Container css={{display: 'flex', justifyContent: 'space-between'}}>
        <Box
          css={{
            display: 'flex',
          }}
        >
          <Link href='/'>
            <Compass width={25} height={25} />
          </Link>
          <Typography.Body variant='body2' css={{marginLeft: 5}}>
            © 2023 CDG Zig. All rights reserved.
          </Typography.Body>
        </Box>
        <Box css={{display: 'flex'}}>
          <Typography.Body variant='body2' css={{marginRight: 10}}>
            Privacy
          </Typography.Body>
          <Typography.Body variant='body2'>Terms&Conditions</Typography.Body>
        </Box>
      </Container>
    </Box>
  )
}
