/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledBannerTitle} from './banner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type BannerTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const BannerTitle = React.forwardRef<HTMLHeadingElement, BannerTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const bannerTitleRef = useDOMRef<HTMLDivElement>(ref)
    const renderTitle = () => {
      if (typeof children === 'string') {
        return <>{children}</>
      }
      return children
    }

    return (
      <StyledBannerTitle css={css} ref={bannerTitleRef} {...delegated}>
        {renderTitle()}
      </StyledBannerTitle>
    )
  },
)

export default BannerTitle
