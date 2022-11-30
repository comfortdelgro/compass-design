/* eslint-disable prettier/prettier */
import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import SubBannerDescription from './subBanner-description'
import SubBannerImage from './subBanner-image'
import SubBannerTitle from './subBanner-title'
import {
  StyledBottomContentContainer,
  StyledSubBanner,
  StyledSubBannerBottom,
  SubBannerVariantProps,
} from './subBanner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export type SubBannerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubBanner = React.forwardRef<HTMLDivElement, SubBannerProps>(
  (props, ref) => {
    const {
      children,
      // styled component props
      css = {},
      // VariantProps
      variant = 'primary',
      // HTMLDiv Props
      ...delegated
    } = props

    const subBannerRef = useDOMRef<HTMLDivElement>(ref)
    const {child: SubBannerImageElement} = pickChild<typeof SubBannerImage>(
      children,
      SubBannerImage,
    )

    const {child: SubBannerTitleElement} = pickChild<typeof SubBannerTitle>(
      children,
      SubBannerTitle,
    )

    const {child: SubBannerDescriptionElement} = pickChild<
      typeof SubBannerDescription
    >(children, SubBannerDescription)

    const variantProps = {variant} as SubBannerVariantProps

    return (
      <>
        {variant == 'primary' ? (
          <StyledSubBanner
            css={css}
            ref={subBannerRef}
            {...variantProps}
            {...delegated}
          >
            {SubBannerImageElement}
            <StyledSubBannerBottom>
              <StyledBottomContentContainer>
                {SubBannerTitleElement}
                {SubBannerDescriptionElement}
              </StyledBottomContentContainer>
            </StyledSubBannerBottom>
          </StyledSubBanner>
        ) : (
          <StyledSubBanner
            css={css}
            ref={subBannerRef}
            {...variantProps}
            {...delegated}
          >
            {SubBannerImageElement}

            <StyledBottomContentContainer>
              {SubBannerTitleElement}
              {SubBannerDescriptionElement}
            </StyledBottomContentContainer>
          </StyledSubBanner>
        )}
      </>
    )
  },
)

export default SubBanner as typeof SubBanner & {
  Image: typeof SubBannerImage
  Title: typeof SubBannerTitle
  Description: typeof SubBannerDescription
}
