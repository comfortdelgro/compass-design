import Compass from '@comfortdelgro/compass-icons/react/colorful/compass'
import {Box, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/Container'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box
      css={{
        padding: 'var(--cdg-spacing-6) 0',
        background: 'var(--cdg-color-gray20)',
      }}
    >
      <Container
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link href='/'>
            <Compass width={25} height={25} />
          </Link>
          <Typography.Body variant='body2' css={{marginLeft: 5}}>
            © {new Date().getFullYear()} CDG Zig. All rights reserved.
          </Typography.Body>
        </Box>
        <Box css={{display: 'flex'}}>
          <Typography.Body variant='body2' css={{marginRight: 10}}>
            Privacy
          </Typography.Body>
          <Typography.Body variant='body2' css={{whiteSpace: 'nowrap'}}>
            Terms & Conditions
          </Typography.Body>
        </Box>
      </Container>
    </Box>
  )
}
