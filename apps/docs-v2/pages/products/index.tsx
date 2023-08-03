import {Box, Column, Typography} from '@comfortdelgro/react-compass'
import AppFooter from 'components/layouts/AppFooter'
import ProductsBackground from 'components/products/ProductsBackground'
import ProductServices from 'components/products/ProductServices'
import Head from 'next/head'

const Products = () => {
  return (
    <>
      <Head>
        <title>Products - React Compass</title>
      </Head>
      <Column
        css={{
          position: 'relative',
          background:
            'linear-gradient(90deg, rgba(231,234,247,1) 0%, rgba(235,228,241,1) 100%)',
        }}
      >
        <ProductsBackground />
        <Box
          css={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 16px',
          }}
        >
          <Typography.Header
            variant='header1'
            css={{
              width: 'fit-content',
              color: '$white',
              marginTop: '41px',
              textAlign: 'center',
            }}
          >
            Some of our zig portals
          </Typography.Header>
          <Typography.Header
            variant='header5'
            css={{
              width: 'fit-content',
              color: '$white',
              margin: '16px 0',
              textAlign: 'center',
            }}
          >
            Take your pick—we've got you covered.
          </Typography.Header>
          <Box
            css={{
              maxWidth: '135px',
              width: '100%',
              height: '4px',
              backgroundColor: '$warningBg',
            }}
          />
          <ProductServices />
        </Box>
        <Box
          css={{
            backgroundColor: '#E2DEEB',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '65px 16px',
            marginTop: '30px',
            width: '100%',
          }}
        >
          <Typography.Display
            css={{fontSize: '32px', width: 'fit-content', textAlign: 'center'}}
          >
            We are evolving
          </Typography.Display>
          <Typography.Body
            css={{
              fontSize: '18px',
              color: '$gray90',
              width: 'fit-content',
              textAlign: 'center',
              maxWidth: '1024px',
            }}
          >
            Explore, experiment, and be inspired by the possibilities in the
            Evolving Section. Join us on this transformative journey as we pave
            the way for new breakthroughs and create delightful experiences for
            our users.
          </Typography.Body>
        </Box>
      </Column>
      <AppFooter />
    </>
  )
}

export default Products
