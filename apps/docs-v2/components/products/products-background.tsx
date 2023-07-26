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
        background:
          'linear-gradient(90deg, rgba(133,138,213,1) 0%, rgba(168,150,166,1) 69%, rgba(198,128,218,1) 100%)',
        zIndex: 1,
      }}
    ></Box>
  )
}

export default ProductsBackground
