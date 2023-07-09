import {Box, Grid, Typography} from '@comfortdelgro/react-compass'
import Container from 'components/layouts/Container'
import * as React from 'react'
import GradientText from '../typography/GradientText'
import CoreShowcase from './CoreShowcase'
import DesignKits, {PrefetchDesignKitImages} from './DesignKits'
import ProductsSwitcher from './ProductsSwitcher'
import StoreTemplatesBanner, {
  PrefetchStoreTemplateImages,
} from './StoreTemplatesBanner'

function ProductSuite() {
  const [productIndex, setProductIndex] = React.useState(0)
  return (
    <Box css={{background: '#f4f6f9', padding: '4rem 0'}}>
      <Container>
        <Grid spacing='sm' alignItems='center' style={{height: '100%'}}>
          <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box>
              <Typography.Header variant='header1' css={{fontWeight: 'bold'}}>
                Every component you need is{' '}
                <GradientText>ready for production</GradientText>
              </Typography.Header>
              <Typography.Body variant='body2'>
                Build at an accelerated pace without sacrificing flexibility or
                control.
              </Typography.Body>
            </Box>
            <ProductsSwitcher
              productIndex={productIndex}
              setProductIndex={setProductIndex}
            />
          </Grid.Item>
          <Grid.Item xs={12} sm={12} md={6} lg={6} xl={6}>
            <PrefetchStoreTemplateImages />
            <PrefetchDesignKitImages />
            <CoreShowcase />
            <StoreTemplatesBanner />
            <DesignKits />
          </Grid.Item>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductSuite
