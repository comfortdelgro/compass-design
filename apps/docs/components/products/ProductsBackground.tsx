import {Box} from '@comfortdelgro/react-compass'
import {getStaticPath} from 'utils'

const ProductsBackground = () => {
  return (
    <Box
      css={{
        height: '385px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundImage: `url(${getStaticPath(
          '/static/images/product-background.png',
        )})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1,
      }}
    ></Box>
  )
}

export default ProductsBackground
