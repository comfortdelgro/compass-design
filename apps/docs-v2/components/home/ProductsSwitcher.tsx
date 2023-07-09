import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Highlighter from '../action/Highlighter'

function ProductItem({
  'aria-label': label,
  name,
  description,
}: {
  'aria-label': string
  name: React.ReactNode
  description: React.ReactNode
}) {
  return (
    <Box
      component='span'
      sx={{
        display: 'flex',
        p: 2,
        flexDirection: {xs: 'column', md: 'row'},
        alignItems: {md: 'center'},
      }}
    >
      <span>
        <Typography
          component='span'
          color='text.primary'
          variant='body2'
          fontWeight='bold'
          display='block'
        >
          {name}
        </Typography>
        <Typography
          component='span'
          color='text.secondary'
          variant='body2'
          fontWeight='regular'
          display='block'
          sx={{my: 0.5}}
        >
          {description}
        </Typography>
      </span>
    </Box>
  )
}

function ProductsSwitcher({
  productIndex,
  setProductIndex,
}: {
  productIndex: number
  setProductIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  const productElements = [
    <ProductItem
      aria-label='Go to core components page'
      name='React Compass Core'
      description='Foundational components for shipping features faster.'
    />,
    <ProductItem
      aria-label='Go to templates page'
      name='Templates'
      description='Professionally designed UI layouts to jumpstart your next project.'
    />,
    <ProductItem
      aria-label='Go to design-kits page'
      name='Design kits'
      description='Bring our components to your favorite design tool.'
    />,
  ]
  return (
    <React.Fragment>
      <Box
        sx={{
          display: {md: 'none'},
          maxWidth: 'calc(100vw - 40px)',
          minHeight: {xs: 200, sm: 166},
          '& > div': {pr: '32%'},
        }}
      >
        {productElements.map((elm, index) => (
          <Highlighter
            key={index}
            disableBorder
            onClick={() => setProductIndex(index)}
            selected={productIndex === index}
            sx={{
              width: '100%',
              transition: '0.3s',
              transform: productIndex !== index ? 'scale(0.9)' : 'scale(1)',
            }}
          >
            {elm}
          </Highlighter>
        ))}
      </Box>
      <Stack
        spacing={1}
        sx={{display: {xs: 'none', md: 'flex'}, maxWidth: 500}}
      >
        {productElements.map((elm, index) => (
          <Highlighter
            key={index}
            disableBorder
            onClick={() => setProductIndex(index)}
            selected={productIndex === index}
          >
            {elm}
          </Highlighter>
        ))}
      </Stack>
    </React.Fragment>
  )
}

export default ProductsSwitcher
