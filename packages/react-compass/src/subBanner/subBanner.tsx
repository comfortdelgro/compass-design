/* eslint-disable prettier/prettier */
import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import SubBannerBottom from './subBanner-bottom'
import SubBannerDescription from './subBanner-description'
import SubBannerImage from './subBanner-image'
import SubBannerTitle from './subBanner-title'
import {
  StyledBottomContentContainer,
  StyledSubBanner,
  SubBannerVariantProps,
} from './subBanner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  variant?: 'Primary' | 'Secondary'
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
      variant = 'Primary',
      // HTMLDiv Props
      ...delegated
    } = props

    const subBannerRef = useDOMRef<HTMLDivElement>(ref)
    const {child: SubBannerImageElement, rest: childrenWithoutImageElement} =
      pickChild<typeof SubBannerImage>(children, SubBannerImage)

    const {child: SubBannerTitleElement, rest: childrenWithoutTitleElement} =
      pickChild<typeof SubBannerTitle>(children, SubBannerTitle)

    const {
      child: SubBannerDescriptionElement,
      rest: childrenWithoutDescriptionElement,
    } = pickChild<typeof SubBannerDescription>(children, SubBannerDescription)

    const variantProps = {variant} as SubBannerVariantProps

    return (
      <>
        <StyledSubBanner
          css={css}
          ref={subBannerRef}
          {...variantProps}
          {...delegated}
        >
          {SubBannerImageElement}
          <SubBannerBottom>
            <StyledBottomContentContainer>
              {SubBannerTitleElement}
              {SubBannerDescriptionElement}
            </StyledBottomContentContainer>
          </SubBannerBottom>
        </StyledSubBanner>
      </>
    )
  },
)

export default SubBanner as typeof SubBanner & {
  Image: typeof SubBannerImage
  Title: typeof SubBannerTitle
  Description: typeof SubBannerDescription
  Bottom: typeof SubBannerBottom
}
