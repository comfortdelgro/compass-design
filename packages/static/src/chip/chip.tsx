import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/chip.module.css'

export interface Props {
  children?: React.ReactNode
  hasCloseButton?: boolean
  isErrored?: boolean
  onClose?: (event: React.MouseEvent<HTMLDivElement>) => void
  css?: unknown
}

const Chip = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    hasCloseButton = false,
    isErrored = false,
    onClose,
    css,
    ...delegated
  } = props

  const chipRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={chipRef}>
      <div
        ref={chipRef}
        className={` ${styles.chip} ${isErrored ? styles.isErrored : ''}`}
        {...delegated}
      >
        {children}
        {hasCloseButton && (
          <div
            className={`${styles['close-icon-container']}`}
            onClick={onClose}
          >
            <svg width='10' height='10' viewBox='0 0 10 10'>
              <g clipPath='url(#clip0_5299_13653)'>
                <path
                  d='M9.11731 7.88215C9.45908 8.22392 9.45908 8.77759 9.11731 9.11936C8.94779 9.29024 8.72359 9.375 8.49938 9.375C8.27518 9.375 8.05153 9.28956 7.88092 9.11867L4.99966 6.23892L2.11867 9.11799C1.94779 9.29024 1.72386 9.375 1.49993 9.375C1.276 9.375 1.05235 9.29024 0.881328 9.11799C0.539557 8.77622 0.539557 8.22255 0.881328 7.88078L3.76313 4.99897L0.881328 2.11854C0.539557 1.77677 0.539557 1.2231 0.881328 0.881328C1.2231 0.539557 1.77677 0.539557 2.11854 0.881328L4.99966 3.7645L7.88146 0.882695C8.22323 0.540925 8.7769 0.540925 9.11867 0.882695C9.46044 1.22446 9.46044 1.77813 9.11867 2.1199L6.23687 5.00171L9.11731 7.88215Z'
                  fill='currentColor'
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </CssInjection>
  )
})

export default Chip
