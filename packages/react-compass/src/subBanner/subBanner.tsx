/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import SubBannerDescription from './subBanner-description'
import SubBannerImage from './subBanner-Image'
import SubBannerTitle from './subBanner-title'
import {StyledSubBanner} from './subBanner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SubBannerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubBanner = React.forwardRef<HTMLDivElement, SubBannerProps>(
  (props, ref) => {
    const {
      children,
      // styled component props
      css = {},
      // HTMLDiv Props
      ...delegated
    } = props

    const subBannerRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <>
        <StyledSubBanner css={css} ref={subBannerRef} {...delegated}>
          {children}
        </StyledSubBanner>
      </>
    )
  },
)

export default SubBanner as typeof SubBanner & {
  Image: typeof SubBannerImage
  Title: typeof SubBannerTitle
  Description: typeof SubBannerDescription
}
