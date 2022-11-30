import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import BannerDescription from './banner-description'
import BannerImage from './banner-image'
import BannerTitle from './banner-title'
import {
  BannerVariantProps,
  StyledBanner,
  StyledContentContainer,
} from './banner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'full'
}

export type BannerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Banner = React.forwardRef<HTMLDivElement, BannerProps>((props, ref) => {
  const {
    // children props
    children,
    // styled component props
    css = {},
    // VariantProps
    size = 'md',
    // HTMLDiv Props
    ...delegated
  } = props

  const bannerRef = useDOMRef<HTMLDivElement>(ref)
  const {child: BannerImageElement} = pickChild<typeof BannerImage>(
    children,
    BannerImage,
  )

  const {child: BannerTitleElement} = pickChild<typeof BannerTitle>(
    children,
    BannerTitle,
  )

  const {child: BannerDescriptionElement} = pickChild<typeof BannerDescription>(
    children,
    BannerDescription,
  )

  const variantProps = {size} as BannerVariantProps

  return (
    <>
      <StyledBanner css={css} ref={bannerRef} {...variantProps} {...delegated}>
        {BannerImageElement}
        <StyledContentContainer>
          {BannerTitleElement}
          {BannerDescriptionElement}
        </StyledContentContainer>
      </StyledBanner>
    </>
  )
})

export default Banner as typeof Banner & {
  Image: typeof BannerImage
  Title: typeof BannerTitle
  Description: typeof BannerDescription
}
