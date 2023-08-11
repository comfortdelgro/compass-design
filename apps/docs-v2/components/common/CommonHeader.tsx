import {
  Box,
  Breadcrumbs,
  Column,
  Row,
  Typography,
} from '@comfortdelgro/react-compass'
import {usePageProps} from 'contexts/PageProps'
import _ from 'lodash'
import {useRouter} from 'next/router'
import {useMemo} from 'react'

export const CommonHeader = () => {
  const {pageProps} = usePageProps()

  const hasImage = Boolean(pageProps?.['imgSrc'])

  if (
    !pageProps?.backgroundColor &&
    !pageProps?.backgroundImage &&
    !pageProps?.imgSrc
  ) {
    return <></>
  }

  return (
    <Row css={{padding: hasImage ? '$4 20px' : '0', gap: '$4'}}>
      <CommonHeaderTitle />
      {hasImage ? (
        <Box
          css={{
            backgroundColor: '#F3F2F1',
            borderRadius: '30px',
            height: '100%',
            width: '100%',
            backgroundImage: `url(${pageProps?.imgSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '@max_1200': {
              display: 'none',
            },
          }}
        ></Box>
      ) : (
        <></>
      )}
    </Row>
  )
}

export const CommonHeaderTitle = () => {
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

  const {pageProps} = usePageProps()

  const hasImage = Boolean(pageProps?.['imgSrc'])

  return (
    <Column
      css={{
        backgroundColor: pageProps?.backgroundColor,
        backgroundImage: `url(${pageProps?.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: hasImage ? '30px' : 0,
        padding: '57px 45px',
      }}
    >
      {hasImage ? (
        <Breadcrumbs>
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
      ) : (
        <></>
      )}
      <Typography.Display
        css={{
          fontSize: '46px',
          fontWeight: 700,
          '@max_768': {
            fontSize: '32px',
          },
          color: pageProps?.textColor,
        }}
      >
        {pageProps?.title}
      </Typography.Display>
      <Typography.Body
        css={{
          fontSize: '18px',
          fontWeight: 400,
          maxWidth: '450px',
          color: pageProps?.textColor,
        }}
      >
        {pageProps?.description}
      </Typography.Body>
    </Column>
  )
}
