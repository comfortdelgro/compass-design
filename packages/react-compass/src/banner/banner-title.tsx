/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledBannerTitle} from './banner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type BannerTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const BannerTitle = React.forwardRef<HTMLHeadingElement, BannerTitleProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props

    const renderTitle = () => {
      if (typeof children === 'string') {
        return <>{children}</>
      }
      return children
    }

    return (
      <StyledBannerTitle css={css} ref={ref} {...delegated}>
        {renderTitle()}
      </StyledBannerTitle>
    )
  },
)

export default BannerTitle
