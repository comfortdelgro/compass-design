/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledBannerDescription} from './styles/banner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type BannerDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>

const BannerDescription = React.forwardRef<
  HTMLDivElement,
  BannerDescriptionProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  const bannerDescriptionRef = useDOMRef<HTMLParagraphElement>(ref)
  return (
    <StyledBannerDescription
      css={css}
      ref={bannerDescriptionRef}
      {...delegated}
    >
      {children}
    </StyledBannerDescription>
  )
})

export default BannerDescription
