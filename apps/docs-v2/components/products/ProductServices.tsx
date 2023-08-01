import {Box, Button, Grid, Row, Typography} from '@comfortdelgro/react-compass'
import {useMemo} from 'react'
import {
  AdminPortalLogo,
  CarbyPortalLogo,
  CMSLogo,
  ComfortConnectLogo,
  FMSLogo,
  FNBLogo,
  TEMLogo,
  ZigStoreLogo,
} from './ProductLogos'

const ProductService = () => {
  const lorem = 'Lorem ipsum dola sign lewded saedh kdkroe krtyer'

  const products = useMemo<ProductCard[]>(() => {
    return [
      {
        icon: <ZigStoreLogo />,
        title: 'Zig Store',
        description: lorem,
        link: '/',
      },
      {
        icon: <ComfortConnectLogo />,
        title: 'Comfort Connect',
        description: lorem,
        link: '/',
      },
      {
        icon: <CMSLogo />,
        title: 'CMS',
        description: lorem,
        link: '/',
      },
      {
        icon: <CarbyPortalLogo />,
        title: 'Carby Portal',
        description: lorem,
        link: '/',
      },
      {
        icon: <AdminPortalLogo />,
        title: 'Admin Portal',
        description: lorem,
        link: '/',
      },
      {
        icon: <FMSLogo />,
        title: 'FMS',
        description: lorem,
        link: '/',
      },
      {
        icon: <FNBLogo />,
        title: 'FnB',
        description: lorem,
        link: '/',
      },
      {
        icon: <TEMLogo />,
        title: 'Tem',
        description: lorem,
        link: '/',
      },
    ]
  }, [])

  return (
    <Grid
      css={{
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: '$gray10',
        padding: '0 0 24px 24px',
        marginTop: '24px',
        borderRadius: '24px',
        boxShadow:
          '0px 3.200000047683716px 7.199999809265137px 0px rgba(0, 0, 0, 0.13), 0px 0.6000000238418579px 1.7999999523162842px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      {products.map((product) => (
        <Grid.Item
          key={product.title}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          css={{
            padding: '24px 24px 0 0',
            '@media (min-width: 1920px)': {
              flexBasis: '25%',
            },
          }}
        >
          <ProductCard {...product} />
        </Grid.Item>
      ))}
    </Grid>
  )
}

interface ProductCard {
  icon?: React.ReactNode
  title?: string
  description?: string
  link?: string
}

const ProductCard = (props: ProductCard) => {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '$4',
        padding: '$4 $4',
        backgroundColor: '$cdgBlue10',
        borderRadius: '12px',
        border: '1px solid $cdgBlue20',
      }}
    >
      <Row css={{gap: '24px'}}>
        {props.icon}
        <Typography.Body variant='body1' css={{fontWeight: '$normal'}}>
          {props.title}
        </Typography.Body>
      </Row>
      <Typography.Body variant='body3'>
        Lorem ipsum dola sign lewded saedh kdkroe krtyer
      </Typography.Body>
      <Button css={{width: 'fit-content'}} href={props.link} hrefExternal>
        Try now
      </Button>
    </Box>
  )
}

export default ProductService
