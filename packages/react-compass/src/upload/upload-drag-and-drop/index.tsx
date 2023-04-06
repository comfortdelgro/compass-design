import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {
  convertFileSizeToReadableNumber,
  DEFAULT_FILE_ACCEPT,
  DEFAULT_FILE_LIMIT,
} from '../common'
import {
  StyledOrLetter,
  StyledUploadButton,
  StyledUploadContainer,
  StyledUploadContent,
  StyledUploadError,
  StyledUploadMaxSize,
  StyledUploadWrapper,
  UploadVariantProps,
} from './index.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isDisabled?: boolean
  getFile?: (selectedFiles: File[]) => void
  accept?: string
  fileSizeLimit?: number
  multiple?: boolean
}

export type UploadDragAndDropProps = Props &
  UploadVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const UploadDragAndDrop = React.forwardRef<
  HTMLDivElement,
  UploadDragAndDropProps
>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // VariantProps
    variant = 'field',
    // Component props
    getFile = () => {
      // Default
    },
    accept = DEFAULT_FILE_ACCEPT,
    fileSizeLimit = DEFAULT_FILE_LIMIT,
    multiple = false,
    // HTMLDiv Props
    ...delegated
  } = props

  const uploadRef = useDOMRef<HTMLDivElement>(ref)
  const uploadInputRef = React.useRef<HTMLInputElement>(null)
  const [error, setError] = React.useState<undefined | string>()

  const filesValidator = (files: FileList) => {
    if (files && files?.length > 0) {
      const isInvalidFileSize = Array.from(files).some(
        (file) => file.size > fileSizeLimit,
      )
      if (isInvalidFileSize) {
        setError('Sorry, your file exceeds our size limit.')
      } else {
        setError(undefined)
        getFile(Array.from(files))
      }
    }
  }

  // hanlder functions
  const hanldeDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    target.removeAttribute('style')
    e.preventDefault()
    e.stopPropagation()
    const dt = e.dataTransfer
    if (!dt) return
    const files = dt.files as unknown as FileList
    filesValidator(files)
  }

  // hanlder functions
  const hanldeDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.tagName !== 'LABEL') {
      console.log([e.target])
      target.style.border = '1px dashed #0142AF'
      target.style.backgroundColor = '#E6ECF7'
    }
    e.preventDefault()
    e.stopPropagation()
  }

  const hanldeDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    target.removeAttribute('style')
  }

  const handleFileFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    const target = event.target as HTMLInputElement
    const files = target?.files as unknown as FileList
    filesValidator(files)
  }

  const onLableClick = () => uploadInputRef.current?.click()

  return (
    <StyledUploadWrapper variant={variant} css={css} {...delegated}>
      <StyledUploadContainer
        variant={variant}
        ref={uploadRef}
        onDrop={hanldeDrop}
        onDragOver={hanldeDragOver}
        onDragLeave={hanldeDragLeave}
      >
        <input
          ref={uploadInputRef}
          type='file'
          accept={accept}
          multiple={multiple}
          onChange={handleFileFieldChange}
        />
        <StyledUploadButton onClick={onLableClick}>
          {variant === 'field' && (
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              style={{pointerEvents: 'none'}}
            >
              <path
                d='M12.2857 10.6249V12.375C12.2857 12.8581 11.9019 13.25 11.4286 13.25H4.57143C4.09812 13.25 3.71429 12.8581 3.71429 12.375V10.6249C3.71429 10.1418 3.33045 9.74993 2.85714 9.74993C2.38384 9.74993 2 10.1418 2 10.6249V12.375C2 13.8247 3.15125 15 4.57143 15H11.4286C12.8488 15 14 13.8247 14 12.375V10.6249C14 10.1418 13.6162 9.74993 13.1429 9.74993C12.6696 9.74993 12.2857 10.141 12.2857 10.6249ZM7.39464 1.25616L3.96607 4.75621C3.63098 5.09829 3.63152 5.652 3.96607 5.99353C4.30089 6.33533 4.8433 6.33533 5.17813 5.99353L7.14286 3.98852V9.74993C7.14286 10.2336 7.52616 10.6249 8 10.6249C8.47384 10.6249 8.85714 10.2336 8.85714 9.74993V3.98852L10.8227 5.99504C11.1575 6.33684 11.6999 6.33684 12.0347 5.99504C12.3696 5.65323 12.3696 5.09952 12.0347 4.75771L8.60616 1.25767C8.27054 0.914362 7.72946 0.914362 7.39464 1.25616Z'
                fill='#0142AF'
              />
            </svg>
          )}
          {variant === 'area' ? (
            <span style={{pointerEvents: 'none'}}>Browse Files</span>
          ) : (
            <span style={{pointerEvents: 'none'}}>Upload files</span>
          )}
        </StyledUploadButton>
        {variant === 'area' && <StyledOrLetter>or</StyledOrLetter>}
        {variant === 'area' ? (
          <StyledUploadContent>Drag&Drop files here</StyledUploadContent>
        ) : (
          <StyledUploadContent>or Drop Files</StyledUploadContent>
        )}
        {variant === 'area' && (
          <StyledUploadContent>
            <svg width='33' height='32' viewBox='0 0 33 32' fill='none'>
              <path
                d='M8.4335 25.3332C4.78837 25.3332 1.8335 22.6457 1.8335 19.3332C1.8335 16.7165 3.67462 14.4915 6.24266 13.6707C6.2367 13.5582 6.2335 13.4457 6.2335 13.3332C6.2335 9.64984 9.51516 6.6665 13.5668 6.6665C16.2847 6.6665 18.6543 8.01025 19.9239 10.0082C20.6206 9.54567 21.4639 9.33317 22.3668 9.33317C24.796 9.33317 26.7668 11.0873 26.7668 13.3332C26.7668 13.8415 26.6614 14.3248 26.4735 14.7748C29.1502 15.2665 31.1668 17.4207 31.1668 19.9998C31.1668 22.9457 28.5406 25.3332 25.3002 25.3332H8.4335ZM12.0543 16.2915C11.6281 16.6832 11.6281 17.3165 12.0543 17.6707C12.4852 18.0957 13.1818 18.0957 13.5714 17.6707L15.4002 16.079V21.6665C15.4002 22.2207 15.8906 22.6665 16.5002 22.6665C17.1097 22.6665 17.6002 22.2207 17.6002 21.6665V16.079L19.3877 17.6707C19.8185 18.0957 20.5152 18.0957 20.9047 17.6707C21.3722 17.3165 21.3722 16.6832 20.9047 16.2915L17.2381 12.9582C16.8485 12.5707 16.1518 12.5707 15.721 12.9582L12.0543 16.2915Z'
                fill='#0142AF'
              />
            </svg>
          </StyledUploadContent>
        )}
      </StyledUploadContainer>
      <StyledUploadMaxSize>
        Maximum size: {convertFileSizeToReadableNumber(fileSizeLimit)}
      </StyledUploadMaxSize>
      <StyledUploadError>{error}</StyledUploadError>
    </StyledUploadWrapper>
  )
})

export default UploadDragAndDrop
