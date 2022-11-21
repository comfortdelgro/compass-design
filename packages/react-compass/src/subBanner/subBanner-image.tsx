/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledSubBannerImage} from './subBanner.styles'

type Props = StyledComponentProps

export type SubBannerImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const SubBannerImage = React.forwardRef<HTMLImageElement, SubBannerImageProps>(
  (props, ref) => {
    const {css = {}, ...delegated} = props
    const subBannerImageRef = useDOMRef<HTMLImageElement>(ref)
    return (
      <>
        <StyledSubBannerImage
          css={css}
          {...delegated}
          ref={subBannerImageRef}
        />
      </>
    )
  },
)

export default SubBannerImage
