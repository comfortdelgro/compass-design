/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSubBannerBottom} from './subBanner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SubBannerBottomProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubBannerBottom = React.forwardRef<HTMLDivElement, SubBannerBottomProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    return (
      <StyledSubBannerBottom css={css} ref={ref} {...delegated}>
        {children}
      </StyledSubBannerBottom>
    )
  },
)

export default SubBannerBottom
