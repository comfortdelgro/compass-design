import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import UploadButton from './upload-button'
import UploadIcon from './upload-icon'
import UploadPlaceholder from './upload-placeholder'
import {
  StyledOrLetter,
  StyledUploadContainer,
  StyledUploadContent,
  StyledUploadError,
  StyledUploadFileName,
  StyledUploadMaxSize,
  StyledUploadWrapper,
  UploadVariantProps,
} from './upload.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isDisabled?: boolean
  getFile?: (selectedFiles: File[]) => void
  fileExtenstions?: string
  fileSizeLimit?: number
  multiple?: boolean
}

export type UploadProps = Props &
  UploadVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Upload = React.forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
  const {
    children,
    // StyledComponentProps
    css = {},
    // VariantProps
    variant = 'click',
    // Component props
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getFile = () => {},
    fileExtenstions = 'audio/*,video/*,image/*, .docs, .docx, .pdf',
    fileSizeLimit = 9999999999,
    multiple = false,
    // HTMLDiv Props
    ...delegated
  } = props

  const uploadRef = useDOMRef<HTMLDivElement>(ref)
  const uploadInputRef = React.useRef<HTMLInputElement>(null)
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([])
  const [error, setError] = React.useState<false | string>(false)

  // Pick upload button child component
  const {child: UploadButtonElement} = pickChild<typeof UploadButton>(
    children,
    UploadButton,
  )

  // Pick upload placeholder child component
  const {child: UploadPlaceholderElement} = pickChild<typeof UploadPlaceholder>(
    children,
    UploadPlaceholder,
  )

  // Pick upload Icon child component
  const {child: UploadIconElement} = pickChild<typeof UploadIcon>(
    children,
    UploadIcon,
  )

  // hanlder functions
  const hanldeDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const dt = e.dataTransfer
    if (!dt) return
    const files = dt.files as unknown as FileList
    if (multiple) setSelectedFiles([...selectedFiles, files[0] as File])
    if (!multiple) setSelectedFiles([files[0] as File])
  }

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

  const convertFileSizeToReadableNumber = () => {
    const kb = 1024
    const mb = kb * 1024
    const gb = mb * 1024
    const tb = gb * 1024
    const pb = tb * 1024
    if (fileSizeLimit >= kb && fileSizeLimit < mb) {
      const size = (Math.round((fileSizeLimit / kb) * 100) / 100).toFixed(2)
      return `${size} KB`
    } else if (fileSizeLimit >= mb && fileSizeLimit < gb) {
      const size = (Math.round((fileSizeLimit / mb) * 100) / 100).toFixed(2)
      return `${size} MB`
    } else if (fileSizeLimit >= gb && fileSizeLimit < tb) {
      const size = (Math.round((fileSizeLimit / gb) * 100) / 100).toFixed(2)
      return `${size} GB`
    } else if (fileSizeLimit >= tb && fileSizeLimit < pb) {
      const size = (Math.round((fileSizeLimit / tb) * 100) / 100).toFixed(2)
      return `${size} TB`
    } else if (fileSizeLimit >= pb) {
      const size = (Math.round((fileSizeLimit / pb) * 100) / 100).toFixed(2)
      return `${size} PB`
    } else {
      return `${fileSizeLimit} Bytes`
    }
  }

  const renderFileInputElement = () => {
    return (
      <input
        ref={uploadInputRef}
        type='file'
        accept={fileExtenstions}
        id='inputFileField'
        multiple={multiple}
        onChange={(event) => {
          handleFileFieldChange(event as unknown as MouseEvent)
        }}
      />
    )
  }

  // Event listener to drag & drop

  React.useEffect(() => {
    if (variant == 'click') return
    const dropArea = document.getElementById('drop-files-area') as HTMLElement
    dropArea.addEventListener('drop', hanldeDrop, false)
    return () => {
      dropArea.removeEventListener('drop', hanldeDrop, false)
    }
  }, [selectedFiles])

  React.useEffect(() => {
    if (selectedFiles) {
      getFile(selectedFiles)
    }
  }, [selectedFiles])

  return (
    <StyledUploadWrapper
      variant={variant}
      css={css}
      ref={uploadRef}
      id='drop-files-area'
      {...delegated}
    >
      <StyledUploadContainer>
        {renderFileInputElement()}
        {variant == 'dropSecondary' && UploadIconElement}
        {UploadButtonElement &&
          variant !== 'dropSecondary' &&
          React.cloneElement(UploadButtonElement as unknown as JSX.Element, {
            onClick: () => {
              uploadInputRef.current && uploadInputRef.current.click()
              setError(false)
            },
          })}
        <StyledUploadContent>
          {selectedFiles && variant == 'click' && !multiple ? (
            <>
              <StyledUploadFileName>
                {selectedFiles[0]?.name}
              </StyledUploadFileName>
            </>
          ) : (
            UploadPlaceholderElement
          )}
        </StyledUploadContent>

        {UploadButtonElement && variant == 'dropSecondary' && (
          <StyledOrLetter>OR</StyledOrLetter>
        )}
        {UploadButtonElement &&
          variant == 'dropSecondary' &&
          React.cloneElement(UploadButtonElement as unknown as JSX.Element, {
            onClick: () => {
              uploadInputRef.current && uploadInputRef.current.click()
              setError(false)
            },
          })}
      </StyledUploadContainer>
      <StyledUploadMaxSize>
        Maximum size: {convertFileSizeToReadableNumber()}
      </StyledUploadMaxSize>
      <StyledUploadError>{error}</StyledUploadError>
    </StyledUploadWrapper>
  )
})

export default Upload as typeof Upload & {
  Button: typeof UploadButton
  Placeholder: typeof UploadPlaceholder
  Icon: typeof UploadIcon
}
