import Github from '@comfortdelgro/compass-icons/react/github'
import {Box, Breadcrumbs, Button} from '@comfortdelgro/react-compass'
import _ from 'lodash'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useMemo} from 'react'

export default function EditPage(props: {sourceLocation: string}) {
  const {sourceLocation} = props
  const router = useRouter()
  const {pathname} = router
  const breadcrumbs = useMemo(
    () =>
      pathname
        .split('/')
        .filter((segment) => !_.isEmpty(segment))
        .map((segment) => _.capitalize(segment)),
    [pathname],
  )
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'var(--cdg-spacing-4)',
      }}
    >
      <Breadcrumbs css={{ol: {margin: 0}}}>
        {breadcrumbs.map((title, index) => {
          let routeTo
          if (title === 'Foundation') {
            routeTo = '/foundation/overview'
          } else {
            routeTo = `/${breadcrumbs
              .slice(0, index + 1)
              .join('/')
              .toLowerCase()}`
          }
          return (
            <Breadcrumbs.Item key={title} href={routeTo}>
              {title}
            </Breadcrumbs.Item>
          )
        })}
      </Breadcrumbs>
      <Link
        href={`https://github.com/comfortdelgro/compass-design/edit/main/apps${sourceLocation}`}
        target='_blank'
      >
        <Button variant='ghost' size='sm' leftIcon={<Github />}>
          Edit page
        </Button>
      </Link>
    </Box>
  )
}
