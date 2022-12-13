/* eslint-disable prettier/prettier */
import React from 'react'
import Button from '../button'
import {pickChild} from '../utils/pick-child'
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
    const {children, css = {}, onClick, ...delegated} = props
    const uploadButtonRef = useDOMRef<HTMLDivElement>(ref)
    // Pick upload button child component
    const {child: UploadButtonElement, rest: NotButtonElements} = pickChild<
      typeof Button
    >(children, Button)
    return (
      <StyledUploadButton
        css={css}
        ref={uploadButtonRef}
        onClick={!UploadButtonElement ? onClick : () => null}
        {...delegated}
      >
        {UploadButtonElement &&
          React.cloneElement(UploadButtonElement as unknown as JSX.Element, {
            onPress: onClick,
          })}
        {NotButtonElements}
      </StyledUploadButton>
    )
  },
)

export default UploadButton
