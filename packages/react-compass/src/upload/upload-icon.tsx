/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledUploadIcon} from './upload.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type UploadIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const UploadIcon = React.forwardRef<HTMLDivElement, UploadIconProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const uploadIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledUploadIcon css={css} ref={uploadIconRef} {...delegated}>
        {children}
      </StyledUploadIcon>
    )
  },
)

export default UploadIcon
