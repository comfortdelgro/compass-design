import React from 'react'
import Spinner from '../spinner'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/state.module.css'

interface Props {
  css?: unknown
  fileName: string
  imageIcon?: React.ReactNode
  onIconPress?: () => void
  isLoading?: boolean
  icon?: React.ReactNode
}

export type FileStateProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FileState = React.forwardRef<HTMLDivElement, FileStateProps>(
  (props, ref) => {
    const {
      css = {},
      icon = <Close />,
      imageIcon,
      isLoading,
      className,
      onIconPress,
      fileName,
    } = props
    const stateRef = useDOMRef<HTMLDivElement>(ref)

    const stateClasses = React.useMemo(
      () =>
        [styles.state, 'cdg-file-state', className].filter(Boolean).join(' '),
      [className],
    )

    return (
      <CssInjection css={css} childrenRef={stateRef}>
        <div ref={stateRef} className={stateClasses}>
          <div className={`${styles.name} cdg-file-state-name`}>
            {imageIcon && (
              <div
                className={`${styles.image} cdg-file-state-image`}
                onClick={onIconPress}
              >
                {imageIcon}
              </div>
            )}
            {fileName}
          </div>
          <div className={`${styles.icon} cdg-file-state-icon`}>
            {isLoading ? <Loading /> : icon}
          </div>
        </div>
      </CssInjection>
    )
  },
)

const Loading = () => <Spinner label={false} className={styles.loading} />

const Close = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'
      fill='currentColor'
    />
  </svg>
)

export default FileState
