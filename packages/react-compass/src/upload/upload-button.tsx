/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledUploadButton} from './upload.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type UploadButtonProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const UploadButton = React.forwardRef<HTMLDivElement, UploadButtonProps>(
  (props, ref) => {
    const {children, css = {}, ...delegated} = props
    const uploadButtonRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledUploadButton css={css} ref={uploadButtonRef} {...delegated}>
        {children}
      </StyledUploadButton>
    )
  },
)

export default UploadButton
