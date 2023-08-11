import {Box, Button, Grid, Row, Typography} from '@comfortdelgro/react-compass'
import {products} from 'constants/products'
const ProductServices = () => {
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
          '0px 3px 7px 0px rgba(0, 0, 0, 0.13), 0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
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

export default ProductServices
