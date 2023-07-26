import {
  Box,
  Breadcrumbs,
  Column,
  Grid,
  Typography,
} from '@comfortdelgro/react-compass'
import {usePageProps} from 'contexts/PageProps'
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
    <Grid css={{padding: hasImage ? '$4 20px' : '0'}} spacing='sm'>
      <Grid.Item xs={12} sm={12} md={12} lg={6} xl={6}>
        <CommonHeaderTitle />
      </Grid.Item>

      {hasImage ? (
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          css={{
            '@max_1200': {
              display: 'none',
            },
          }}
        >
          <Box
            style={{
              backgroundColor: '#F3F2F1',
              borderRadius: '30px',
              height: '100%',
              width: '100%',
              backgroundImage: `url(${pageProps?.imgSrc})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></Box>
        </Grid.Item>
      ) : (
        <></>
      )}
    </Grid>
  )
}

export const CommonHeaderTitle = () => {
  const router = useRouter()
  const {pathname} = router
  const breadcrumbs = useMemo(
    () =>
      pathname
        .split('/')
        .filter((segment) => segment !== '')
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)),
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
          {breadcrumbs.map((title) => {
            return <Breadcrumbs.Item key={title}>{title}</Breadcrumbs.Item>
          })}
        </Breadcrumbs>
      ) : (
        <></>
      )}
      <Typography.Display
        css={{
          fontSize: '46px',
          fontWeight: 700,
        }}
      >
        {pageProps?.title}
      </Typography.Display>
      <Typography.Body
        css={{
          fontSize: '18px',
          fontWeight: 400,
          maxWidth: '450px',
        }}
      >
        {pageProps?.description}
      </Typography.Body>
    </Column>
  )
}
