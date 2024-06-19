import AlignRight from '@comfortdelgro/compass-icons/react/align-right'
import CrossIcon from '@comfortdelgro/compass-icons/react/cross'
import {Box, Button, Drawer} from '@comfortdelgro/react-compass'
import {GITHUB_REPOSITORY} from 'constants/index'
import Link from 'next/link'
import {useState} from 'react'

export default function NavbarMobile() {
  const [isShowDrawer, setIsShowDrawer] = useState(false)

  return (
    <>
      <Button
        css={{
          width: 34,
          padding: 'var(--cdg-spacing-1)',
          span: {
            padding: 0,
          },
          svg: {
            width: 'fit-content !important',
          },
        }}
        isSquare
        type='button'
        onClick={() => setIsShowDrawer(true)}
      >
        <AlignRight />
      </Button>
      <Drawer
        css={{
          width: 312,
          article: {
            padding: 0,
          },
        }}
        open={isShowDrawer}
        onClose={() => setIsShowDrawer(false)}
        position='right'
      >
        <Drawer.Header css={{padding: 8}}>
          <Box />
          <Button
            css={{
              width: 32,
              padding: 'var(--cdg-spacing-1)',
              span: {
                padding: 0,
              },
              svg: {
                width: 'fit-content !important',
              },
            }}
            isSquare
            type='button'
            variant='ghost'
            onClick={() => setIsShowDrawer(false)}
          >
            <CrossIcon />
          </Button>
        </Drawer.Header>

        <Box
          css={{
            padding: 'var(--cdg-spacing-3)',
            display: 'flex',
            gap: 'var(--cdg-spacing-1)',
            flexDirection: 'column',
          }}
        >
          <Link href={GITHUB_REPOSITORY} target='_blank'>
            <Button variant='secondary' fullWidth>
              Github
            </Button>
          </Link>
          <Link href='/foundation/overview'>
            <Button variant='secondary' fullWidth>
              Document
            </Button>
          </Link>
          <Link
            href='https://comfortdelgro.github.io/compass-design/ladle/'
            target='_blank'
          >
            <Button variant='secondary' fullWidth>
              Ladle
            </Button>
          </Link>
        </Box>
      </Drawer>
    </>
  )
}
