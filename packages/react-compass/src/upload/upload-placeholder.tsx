/* eslint-disable prettier/prettier */
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledUploadPlaceholder} from './upload.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type UploadPlaceholderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const UploadPlaceholder = React.forwardRef<
  HTMLDivElement,
  UploadPlaceholderProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  const uploadPlaceholderRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <StyledUploadPlaceholder
      css={css}
      ref={uploadPlaceholderRef}
      {...delegated}
    >
      {children}
    </StyledUploadPlaceholder>
  )
})

export default UploadPlaceholder
