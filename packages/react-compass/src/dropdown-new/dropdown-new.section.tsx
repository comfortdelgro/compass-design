import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownItemVariantProps,
  StyledDropdownSection,
  StyledSectionContent,
} from './dropdown-new.styles'

export interface DropdownSectionBase extends StyledComponentProps {
  title?: React.ReactNode
  'aria-label'?: string
  children: React.ReactNode
  isClickable?: boolean
  onClick?: () => void
  isChecked?: boolean
  checkmark?: 'checkbox' | 'tick'
}

export type DropdownSectionProps = DropdownSectionBase &
  DropdownItemVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase>

const DropdownSection = React.forwardRef<HTMLDivElement, DropdownSectionProps>(
  (props, ref) => {
    const {children, title, isClickable, css = {}, onClick} = props

    const DropdownSectionRef = useDOMRef<HTMLDivElement>(ref)

    const handleOnClick = () => {
      if (!isClickable) {
        return
      }
      onClick?.()
    }

    return (
      <StyledDropdownSection css={css} ref={DropdownSectionRef}>
        {title && (
          <StyledSectionContent
            isClickable={!!isClickable}
            onClick={handleOnClick}
          >
            {title}
          </StyledSectionContent>
        )}
        {children}
      </StyledDropdownSection>
    )
  },
)

export default DropdownSection
