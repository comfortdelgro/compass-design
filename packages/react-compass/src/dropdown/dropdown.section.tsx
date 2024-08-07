import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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
  css?: CSS
}

export type DropdownSectionProps = DropdownSectionBase &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase>

const DropdownSection = React.forwardRef<HTMLDivElement, DropdownSectionProps>(
  (props, ref) => {
    const {
      children,
      title,
      isClickable,
      className,
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

    const rootClasses = classNames(
      styles.dropdownSection,
      className,
      'cdg-dropdown-section',
    )

    const titleClasses = classNames(
      styles.dropdownSectionContent,
      isClickable && styles.dropdownSectionContentClickable,
      'cdg-dropdown-section-title',
    )

    return (
      <CssInjection css={css} childrenRef={DropdownSectionRef}>
        <div {...delegated} className={rootClasses} ref={DropdownSectionRef}>
          {title && (
            <div className={titleClasses} onClick={handleOnClick}>
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
