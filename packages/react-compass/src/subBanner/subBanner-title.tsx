/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSubBannerTitle} from './subBanner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SubBannerTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const SubBannerTitle = React.forwardRef<
  HTMLHeadingElement,
  SubBannerTitleProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  const renderTitle = () => {
    if (typeof children === 'string') {
      return <>{children}</>
    }
    return children
  }

  return (
    <StyledSubBannerTitle css={css} ref={ref} {...delegated}>
      {renderTitle()}
    </StyledSubBannerTitle>
  )
})

export default SubBannerTitle
