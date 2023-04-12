import {CSS} from '@stitches/react'
import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {SizeUnit} from './constant'
import {
  StyledUploadError,
  StyledUploadInput,
  StyledUploadSize,
  StyledUploadTitle,
  StyledUploadWrapper,
  UploadVariantProps,
} from './upload.styles'
export interface FileTypeItem {
  accept: string
  label: string
  type: string[]
}

interface Props {
  fileType: FileTypeItem
  children?: React.ReactNode
  maxFileSize?: number // in Megabyte
  title?: string
  value?: string | File
  fileValueName?: string
  customDescription?: string
  customError?: string
  onFileChange?: (data: File | null, error?: string) => void
  placeholder?: string
  css?: CSS
}

export interface FileTypeItem {
  accept: string
  label: string
  type: string[]
}

interface Props {
  fileType: FileTypeItem
  children?: React.ReactNode
  maxFileSize?: number // in Megabyte
  title?: string
  value?: string | File
  fileValueName?: string
  customDescription?: string
  customError?: string
  onFileChange?: (data: File | null, error?: string) => void
  placeholder?: string
  css?: CSS
}

export type Upload2Props = Props &
  UploadVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Upload2 = React.forwardRef<HTMLDivElement, Upload2Props>((props, ref) => {
  const {
    // styled component prop
    css = {},

    // component props
    fileType,
    maxFileSize = 0,
    title,
    value = undefined,
    fileValueName,
    customDescription,
    customError,
    onFileChange,
    placeholder = 'No file choosen',

    // htmldiv props
    ...delegated
  } = props
  const [fileError, setFileError] = useState<string>()
  const [fileName, setFileName] = useState<string>()
  const inputRef = useRef<HTMLInputElement>(null)
  const uploadRef = useDOMRef<HTMLDivElement>(ref)

  const handleFileSelected = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files || !evt.target.files[0]) {
      return
    }

    const file = evt.target.files[0]
    const reader = new FileReader()
    setFileName(file.name)
    if (!handleValidate(file)) {
      evt.target.value = ''
      return
    } else {
      if (evt.target.files && evt.target.files[0]) {
        reader.readAsDataURL(file)
        reader.onload = () => {
          onFileChange && onFileChange(file)
        }
      }
    }
  }

  const handleValidate = (file: File) => {
    let result = true
    let message = ''
    if (!fileType.type.includes(file.type)) {
      message = 'Sorry, you have upload an inccorect file type.'
      result = false
    }

    if (file.size / SizeUnit / SizeUnit > maxFileSize) {
      message = `Sorry, you have upload a file that exceed ${maxFileSize} MB.`
      result = false
    }

    if (!result) {
      setFileError(message)
      onFileChange && onFileChange(null, message)
    } else {
      setFileError('')
    }

    return result
  }

  useEffect(() => {
    if (value) {
      setFileName(fileValueName)
    } else {
      setFileName('')
      inputRef.current!.value = ''
    }
  }, [value, fileValueName])

  useEffect(() => {
    if (customError && !!inputRef && !!inputRef.current) {
      inputRef.current.value = ''
    }
  }, [customError])

  return (
    <StyledUploadWrapper css={css} ref={uploadRef} {...delegated}>
      {title ? <StyledUploadTitle>{title}</StyledUploadTitle> : null}
      <StyledUploadInput data-invalid={!!fileError || !!customError}>
        <span>Browse file</span>
        <span data-file={!!fileName}>{fileName ? fileName : placeholder}</span>
        <input
          type='file'
          onChange={handleFileSelected}
          accept={fileType.accept}
          title={fileValueName}
          ref={inputRef}
        />
      </StyledUploadInput>
      <StyledUploadSize>
        {customDescription
          ? customDescription
          : `Only ${fileType.label} files are accepted. Maximum size: ${maxFileSize} MB`}
      </StyledUploadSize>
      {fileError || customError ? (
        <StyledUploadError>{fileError || customError}</StyledUploadError>
      ) : (
        ''
      )}
    </StyledUploadWrapper>
  )
})

export default Upload2

export interface FileTypeItem {
  accept: string
  label: string
  type: string[]
}
