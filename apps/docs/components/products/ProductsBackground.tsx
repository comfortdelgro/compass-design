import {Box} from '@comfortdelgro/react-compass'

const ProductsBackground = () => {
  return (
    <Box
      css={{
        height: '385px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundImage: `url(/static/images/product-background.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1,
      }}
    ></Box>
  )
}

export default ProductsBackground
