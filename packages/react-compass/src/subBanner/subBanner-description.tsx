/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {StyledSubBannerDescription} from './subBanner.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type SubBannerDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubBannerDescription = React.forwardRef<
  HTMLDivElement,
  SubBannerDescriptionProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  return (
    <StyledSubBannerDescription css={css} ref={ref} {...delegated}>
      {children}
    </StyledSubBannerDescription>
  )
})

export default SubBannerDescription
