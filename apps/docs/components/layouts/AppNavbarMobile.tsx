import AlignRight from '@comfortdelgro/compass-icons/react/align-right'
import {Box, Button, Drawer, Icon} from '@comfortdelgro/react-compass'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {GITHUB_REPOSITORY} from 'constants/index'
import Link from 'next/link'
import {useState} from 'react'

export default function AppNavbarMobile(props: any) {
  const [isShowDrawer, setIsShowDrawer] = useState(false)

  return (
    <>
      <Button
        css={{padding: '$1'}}
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
        <Box
          padding='7px $3'
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'sticky',
            top: 0,
            zIndex: 99,
            background: '$background',
          }}
        >
          <Button
            variant='ghost'
            onClick={() => setIsShowDrawer(false)}
            css={{padding: '$1'}}
          >
            <Icon icon={faClose} />
          </Button>
        </Box>

        <Box
          css={{
            padding: '$3',
            display: 'flex',
            gap: '$1',
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
