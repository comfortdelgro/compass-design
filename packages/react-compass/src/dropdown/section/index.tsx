import React from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {DropdownItemProps} from '../item'
import {DropdownItemVariantProps, StyledDropdownSection} from './section.styles'

export type ItemElement = React.ReactElement<DropdownItemProps>
export type ItemRenderer = () => ItemElement

export interface DropdownSectionBase extends StyledComponentProps {
  title?: React.ReactNode
  'aria-label'?: string
  children: ItemElement | ItemElement[] | ItemRenderer
  isClickable?: boolean
  onClick?: (title: React.ReactNode) => void
  isChecked?: boolean
  checkmark?: 'checkbox' | 'tick'
}

export type DropdownSectionProps = DropdownSectionBase &
  DropdownItemVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase>

const DropdownSection = React.forwardRef<HTMLDivElement, DropdownSectionProps>(
  (props, ref) => {
    const {children} = props

    // const handleOnClick = (title: React.ReactNode) => {
    //   if (isClickable) {
    //     onClick?.(title)
    //   }
    // }

    const DropdownSectionRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <StyledDropdownSection
        // isClickable={true}
        // css={css}
        ref={DropdownSectionRef}
        // onClick={handleOnClick}
      >
        {children}
      </StyledDropdownSection>
    )
  },
)

export default DropdownSection
