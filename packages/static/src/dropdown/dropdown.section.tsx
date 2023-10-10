import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/dropdown.module.css'

export interface DropdownSectionBase {
  title?: React.ReactNode
  'aria-label'?: string
  children: React.ReactNode
  isClickable?: boolean
  onClick?: () => void
  isChecked?: boolean
  checkmark?: 'checkbox' | 'tick'
  css?: unknown
}

export type DropdownSectionProps = DropdownSectionBase &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase>

const DropdownSection = React.forwardRef<HTMLDivElement, DropdownSectionProps>(
  (props, ref) => {
    const {
      children,
      title,
      isClickable,
      css = {},
      onClick,
      ...delegated
    } = props

    const DropdownSectionRef = useDOMRef<HTMLDivElement>(ref)

    const handleOnClick = () => {
      if (!isClickable) {
        return
      }
      onClick?.()
    }

    return (
      <CssInjection css={css} childrenRef={DropdownSectionRef}>
        <div
          className={`${styles.dropdownSection}`}
          ref={DropdownSectionRef}
          {...delegated}
        >
          {title && (
            <div
              className={`${styles.dropdownSectionContent} ${
                isClickable ? styles.dropdownSectionContentClickable : ''
              }`}
              onClick={handleOnClick}
            >
              {title}
            </div>
          )}
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default DropdownSection
