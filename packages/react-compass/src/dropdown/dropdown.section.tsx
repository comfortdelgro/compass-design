import React, {useEffect, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownSectionVariantProps,
  StyledDropdownSection,
  StyledSectionContent,
} from './dropdown.styles'

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
  DropdownSectionVariantProps &
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

    const [clonedChildren, setClonedChildren] = useState<React.ReactNode>(null)

    // clone children to assign value prop if not exists. the value would be equal to the key prop
    // This is to support the legacy code where users don't pass value prop and use key prop instead
    useEffect(() => {
      const clonedChildren = React.Children.map(children, (child) => {
        const clonedChild = React.cloneElement(child as React.ReactElement)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (!clonedChild?.props?.value) {
          return React.cloneElement(clonedChild, {
            value: clonedChild.key || '',
          })
        } else {
          return clonedChild
        }
      })
      setClonedChildren(clonedChildren)
    }, [children])

    const handleOnClick = () => {
      if (!isClickable) {
        return
      }
      onClick?.()
    }

    return (
      <StyledDropdownSection css={css} ref={DropdownSectionRef} {...delegated}>
        {title && (
          <StyledSectionContent
            isClickable={!!isClickable}
            onClick={handleOnClick}
          >
            {title}
          </StyledSectionContent>
        )}
        {clonedChildren}
      </StyledDropdownSection>
    )
  },
)

export default DropdownSection
