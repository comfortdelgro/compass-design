import React from 'react'
import {StyledHelperText} from '../dropdown/dropdown.styles'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  convertFileSizeToReadableNumber,
  DEFAULT_FILE_ACCEPT,
  DEFAULT_FILE_LIMIT,
} from './common'
import UploadDragAndDrop from './upload-drag-and-drop'
import {
  StyledBrowseFile,
  StyledLabel,
  StyledUploadContainer,
  StyledUploadContent,
  StyledUploadError,
  StyledUploadWrapper,
  UploadVariantProps,
} from './upload.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isDisabled?: boolean
  getFile?: (selectedFiles: File[]) => void
  accept?: string
  fileSizeLimit?: number
  multiple?: boolean
  placeholder?: string
  helperText?: React.ReactNode
  isRequired?: boolean
  label?: string
}

export type UploadProps = Props &
  UploadVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Upload = React.forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // VariantProps
    getFile = () => {
      // Default
    },
    accept = DEFAULT_FILE_ACCEPT,
    fileSizeLimit = DEFAULT_FILE_LIMIT,
    multiple = false,
    placeholder = 'No file chosen',
    helperText,
    label,
    isRequired = false,
    isDisabled = false,
    // HTMLDiv Props
    ...delegated
  } = props

  const uploadRef = useDOMRef<HTMLDivElement>(ref)
  const uploadInputRef = React.useRef<HTMLInputElement>(null)
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([])
  const [error, setError] = React.useState<undefined | string>()
  // hanlder functions

  const filesValidator = (files: FileList) => {
    if (files && files?.length > 0) {
      const isInvalidFileSize = Array.from(files).some(
        (file) => file.size > fileSizeLimit,
      )
      if (isInvalidFileSize) {
        setError('Sorry, your file exceeds our size limit.')
      } else {
        setError(undefined)
        setSelectedFiles(Array.from(files))
        getFile(Array.from(files))
      }
    }
  }

  const handleFileFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    const target = event.target as HTMLInputElement
    const files = target?.files as unknown as FileList
    filesValidator(files)
  }

  const onLableClick = () => !isDisabled && uploadInputRef.current?.click()

  return (
    <StyledUploadWrapper
      css={css}
      ref={uploadRef}
      isDisabled={isDisabled}
      {...delegated}
    >
      {label && (
        <>
          <StyledLabel>
            <span className='cdg-label'> {label}</span>
            <span className='cdg-isRequired-Sign'>
              {isRequired ? ' *' : ''}
            </span>
          </StyledLabel>
        </>
      )}
      <StyledUploadContainer>
        <input
          ref={uploadInputRef}
          type='file'
          accept={accept}
          multiple={multiple}
          onChange={handleFileFieldChange}
        />
        <StyledBrowseFile onClick={onLableClick}>
          <span>Browse file</span>
        </StyledBrowseFile>
        <StyledUploadContent fileSelected={selectedFiles.length > 0}>
          {selectedFiles.length > 0 ? (
            <p>{selectedFiles.map((file) => file.name).join(', ')}</p>
          ) : (
            placeholder
          )}
        </StyledUploadContent>
      </StyledUploadContainer>
      <StyledHelperText>
        {helperText
          ? helperText
          : `Maximum size: ${convertFileSizeToReadableNumber(fileSizeLimit)}`}
      </StyledHelperText>
      <StyledUploadError>{error}</StyledUploadError>
    </StyledUploadWrapper>
  )
})

export default Upload as typeof Upload & {
  DragAndDrop: typeof UploadDragAndDrop
}
