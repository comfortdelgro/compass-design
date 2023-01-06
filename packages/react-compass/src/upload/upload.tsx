import {useId} from '@react-aria/utils'
import React from 'react'
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
  StyledUploadContainer,
  StyledUploadContent,
  StyledUploadError,
  StyledUploadMaxSize,
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
}

export type UploadProps = Props &
  UploadVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Upload = React.forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // VariantProps
    getFile,
    accept = DEFAULT_FILE_ACCEPT,
    fileSizeLimit = DEFAULT_FILE_LIMIT,
    multiple = false,
    // HTMLDiv Props
    ...delegated
  } = props

  const uploadRef = useDOMRef<HTMLDivElement>(ref)
  const uploadInputRef = React.useRef<HTMLInputElement>(null)
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([])
  const [error, setError] = React.useState<false | string>(false)
  const id = useId()
  // hanlder functions

  const handleFileFieldChange = (event: MouseEvent) => {
    event.preventDefault()
    const target = event.target as HTMLInputElement
    const file =
      target?.files !== null && (target?.files as unknown as FileList)[0]
    if (file) {
      if (file.size > fileSizeLimit) {
        setError('Sorry, your file exceeds our size limit.')
      } else {
        if (multiple) setSelectedFiles([...selectedFiles, file])
        if (!multiple) setSelectedFiles([file])
      }
    }
  }

  React.useEffect(() => {
    if (selectedFiles) {
      getFile?.(selectedFiles)
    }
  }, [selectedFiles])

  return (
    <StyledUploadWrapper css={css} ref={uploadRef} {...delegated}>
      <StyledUploadContainer>
        <input
          ref={uploadInputRef}
          type='file'
          accept={accept}
          id={id}
          multiple={multiple}
          onChange={(event) => {
            handleFileFieldChange(event as unknown as MouseEvent)
          }}
        />
        <StyledBrowseFile htmlFor={id}>
          <span>Browse file</span>
        </StyledBrowseFile>
        <StyledUploadContent
          fileSelected={selectedFiles.length > 0 && !multiple}
        >
          {selectedFiles.length > 0 && !multiple
            ? selectedFiles[0]?.name
            : 'No file chosen'}
        </StyledUploadContent>
      </StyledUploadContainer>

      <StyledUploadMaxSize>
        Maximum size: {convertFileSizeToReadableNumber(fileSizeLimit)}
      </StyledUploadMaxSize>
      <StyledUploadError>{error}</StyledUploadError>
    </StyledUploadWrapper>
  )
})

export default Upload as typeof Upload & {DragAndDrop: typeof UploadDragAndDrop}
