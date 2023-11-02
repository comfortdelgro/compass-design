import React, {useMemo} from 'react'
import {useIsDarkTheme} from '../theme'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  convertFileSizeToReadableNumber,
  DEFAULT_FILE_ACCEPT,
  DEFAULT_FILE_LIMIT,
} from './common'
import styles from './styles/upload.module.css'
import UploadDragAndDrop from './upload-drag-and-drop'

interface Props {
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
  onError?: (error: string) => void
  customErrorMessages?: React.ReactNode
  css?: unknown
}

export type UploadProps = Props &
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
    onError,
    customErrorMessages,
    className,
    // HTMLDiv Props
    ...delegated
  } = props
  const isDarkTheme = useIsDarkTheme()
  const uploadRef = useDOMRef<HTMLDivElement>(ref)
  const uploadInputRef = React.useRef<HTMLInputElement>(null)
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([])
  const [error, setError] = React.useState<undefined | string>(undefined)
  // hanlder functions

  const filesValidator = (files: FileList) => {
    if (files && files.length > 0) {
      const isInvalidFileSize = Array.from(files).some(
        (file) => file.size > fileSizeLimit,
      )

      const acceptedTypes = accept.split(',').map((type) => type.trim())

      const invalidFileTypeFiles = Array.from(files).filter((file) => {
        const fileExtension = file.name.split('.').pop() || ''
        const fileType = file.type

        // Check if the file type matches any accepted types or wildcard MIME types
        return !acceptedTypes.some((acceptedType) => {
          if (acceptedType.endsWith('/*')) {
            // Check if the file type starts with the accepted type prefix (e.g., 'image/', 'video/')
            const acceptedTypePrefix = acceptedType.substring(
              0,
              acceptedType.length - 2,
            )
            return fileType.startsWith(acceptedTypePrefix)
          } else {
            // Check if the file extension matches the accepted type
            const acceptedExtension = acceptedType.split('.').pop() || ''
            return acceptedExtension === fileExtension
          }
        })
      })

      if (isInvalidFileSize) {
        setError('Sorry, your file exceeds our size limit.')
        onError && onError('file size error')
      } else if (invalidFileTypeFiles.length > 0) {
        const invalidFileNames = invalidFileTypeFiles
          .map((file) => file.name)
          .join(', ')
        setError(
          `Sorry, the following file(s) have an invalid file type: ${invalidFileNames}`,
        )
        onError && onError('file type error')
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

  const onOpenUploadClick = () =>
    !isDisabled ? uploadInputRef.current?.click() : null

  const handleErrorMessage = (error: string | undefined) => {
    if (!customErrorMessages || !error) {
      return error
    }
    return customErrorMessages
  }
  //  classes
  const uploadWrapperClasses = useMemo(() => {
    return [
      styles.uploadWrapper,
      isDisabled && styles.isDisabled,
      isDarkTheme && styles.isDarkTheme,
      className,
      'cdg-upload-wrapper',
    ]
      .filter(Boolean)
      .join(' ')
  }, [className, isDarkTheme, isDisabled])
  const browseFileClasses = useMemo(() => {
    return [
      styles.browseFile,
      isDisabled && styles.browseFileIsDisabled,
      isDarkTheme && styles.browseFileIsDarkTheme,
    ]
      .filter(Boolean)
      .join(' ')
  }, [isDarkTheme, isDisabled])
  const uploadContentClasses = useMemo(() => {
    return [
      styles.uploadContent,
      isDisabled && styles.uploadContentIsDisabled,
      isDarkTheme && styles.uploadContentIsDarkTheme,
      selectedFiles.length > 0 && styles.fileSelected,
    ]
      .filter(Boolean)
      .join(' ')
  }, [isDarkTheme, isDisabled, selectedFiles.length])

  return (
    <CssInjection css={css} childrenRef={uploadRef}>
      <div ref={uploadRef} className={uploadWrapperClasses} {...delegated}>
        {label && (
          <>
            <label className={`${styles.label}`}>
              <span className='cdg-label'> {label}</span>
              <span className={`cdg-isRequired-Sign ${styles.isRequiredSign}`}>
                {isRequired ? ' *' : ''}
              </span>
            </label>
          </>
        )}
        <div className={`${styles.uploadContainer}`}>
          <input
            ref={uploadInputRef}
            type='file'
            accept={accept}
            multiple={multiple}
            onChange={handleFileFieldChange}
          />
          <button
            onClick={onOpenUploadClick}
            type='button'
            role='button'
            className={browseFileClasses}
          >
            <span className={`${styles.browseFileSpan}`}>Browse file</span>
          </button>
          <div onClick={onOpenUploadClick} className={uploadContentClasses}>
            {selectedFiles.length > 0 ? (
              <p className={`${styles.uploadContentText}`}>
                {selectedFiles.map((file) => file.name).join(', ')}
              </p>
            ) : (
              placeholder
            )}
          </div>
        </div>
        <div className={`${styles.helperText}`}>
          {helperText
            ? helperText
            : `Maximum size: ${convertFileSizeToReadableNumber(fileSizeLimit)}`}
        </div>
        <div className={`${styles.uploadError}`}>
          {handleErrorMessage(error)}
        </div>
      </div>
    </CssInjection>
  )
})

export default Upload as typeof Upload & {
  DragAndDrop: typeof UploadDragAndDrop
}
