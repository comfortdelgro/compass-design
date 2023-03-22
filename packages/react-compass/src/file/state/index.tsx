import React from 'react'
import Spinner from '../../spinner'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {
  StateVariantProps,
  StyledFileNameWrapper,
  StyledIcon,
  StyledImage,
  StyledState,
} from './index.styles'

interface Props extends StyledComponentProps {
  fileName: string
  imageIcon?: React.ReactNode
  onIconPress?: () => void
  isLoading?: boolean
  icon?: React.ReactNode
}

export type FileStateProps = Props & StateVariantProps

const FileState = React.forwardRef<HTMLDivElement, FileStateProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      icon = 'close',
      imageIcon,
      isLoading,
      onIconPress,
      fileName,
    } = props
    const stateRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledState ref={stateRef} css={css}>
        <StyledFileNameWrapper>
          {imageIcon && (
            <StyledImage onClick={onIconPress}>{imageIcon}</StyledImage>
          )}
          {fileName}
        </StyledFileNameWrapper>
        <StyledIcon>{isLoading ? <Loading /> : icon}</StyledIcon>
      </StyledState>
    )
  },
)

const Loading = () => (
  <Spinner
    label={false}
    css={{
      '.ring': {
        width: '16px',
        height: '16px',
        div: {
          width: '16px',
          height: '16px',
          borderWidth: '4px',
        },
      },
    }}
  />
)

export default FileState
