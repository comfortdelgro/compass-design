import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/preview.module.css'

interface Props {
  css?: unknown
  imageSrc?: string
  children?: React.ReactNode
}

export type FilePreviewProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FilePreview = React.forwardRef<HTMLDivElement, FilePreviewProps>(
  (props, ref) => {
    const {css = {}, imageSrc, children, className, ...htmlProps} = props
    const previewRef = useDOMRef<HTMLDivElement>(ref)
    const [failed, setFailed] = React.useState(false)

    const previewClasses = React.useMemo(
      () =>
        [
          styles.preview,
          !!imageSrc && !failed
            ? styles.previewImageLoadedTrue
            : styles.previewImageLoadedFalse,
          'cdg-file-preview',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [className, failed, imageSrc],
    )

    return (
      <CssInjection css={css} childrenRef={previewRef}>
        <div ref={previewRef} className={previewClasses} {...htmlProps}>
          <div
            className={`${styles.imagePreviewWrapper} cdg-file-preview-image-wrapper`}
          >
            {imageSrc && !failed ? (
              <img
                alt='preview'
                src={imageSrc}
                onError={() => setFailed(true)}
                className={`${styles.previewImage} cdg-file-preview-image`}
              />
            ) : imageSrc && failed ? (
              <Fallback />
            ) : null}
          </div>
          {children}
        </div>
      </CssInjection>
    )
  },
)

const Fallback = () => (
  <svg width='36' height='36' viewBox='0 0 36 36' fill='none'>
    <path
      d='M5.26855 0C3.69355 0 2.45605 1.29375 2.45605 2.86875V33.1875C2.45605 34.7625 3.69355 36 5.26855 36H31.0311C32.6061 36 33.8998 34.7625 33.8998 33.1875V11.475L23.2686 0H5.26855Z'
      fill='#009EDA'
    />
    <path
      d='M33.8996 11.4749V12.0374H26.6996C26.6996 12.0374 23.1558 11.3062 23.2121 8.2124C23.2121 8.2124 23.3808 11.4749 26.6433 11.4749H33.8996Z'
      fill='#0C81AE'
    />
    <path
      opacity='0.5'
      d='M23.2686 0V8.2125C23.2686 9.1125 23.8873 11.475 26.6998 11.475H33.8998L23.2686 0Z'
      fill='white'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M8.08105 30.2064V18.4502H19.8373V30.2064H8.08105ZM18.6561 19.6314H9.2623V26.7189H18.6561V19.6314ZM13.2561 24.3564L15.4498 21.3752L16.1811 22.5564L16.9123 22.3314L17.4748 25.4814H10.1061L12.0748 23.6252L13.2561 24.3564ZM11.1186 22.2752C10.6123 22.2752 10.1623 21.9377 10.1623 21.4314C10.1623 20.9814 10.6123 20.5877 11.1186 20.5877C11.6248 20.5877 12.0186 20.9814 12.0186 21.4314C12.0186 21.9377 11.6248 22.2752 11.1186 22.2752Z'
      fill='white'
    />
  </svg>
)

export default FilePreview
