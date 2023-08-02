import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {MultipleDropdownContext} from './multiple-dropdown-context'
import {
  DropdownHeaderVariantProps,
  StyledDropdownHeader,
} from './multiple-dropdown.styles'
interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type MultipleDropdownHeaderProps = Props &
  DropdownHeaderVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MultipleDropdownHeader = React.forwardRef<
  HTMLDivElement,
  MultipleDropdownHeaderProps
>((props, ref) => {
  const {children, css = {}, onClick, ...delegated} = props
  const dropdownHeaderRef = useDOMRef<HTMLDivElement>(ref)
  const {onHeaderClick} = useContext(MultipleDropdownContext)

  const handleHeaderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onHeaderClick()
    onClick?.(event)
  }

  return (
    <StyledDropdownHeader
      ref={dropdownHeaderRef}
      css={css}
      {...delegated}
      onClick={handleHeaderClick}
    >
      {children}
    </StyledDropdownHeader>
  )
})

export default MultipleDropdownHeader
