import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {DropdownContext} from './dropdown-context'
import {
  DropdownHeaderVariantProps,
  StyledDropdownHeader,
} from './dropdown.styles'
interface Props extends StyledComponentProps {
  children: React.ReactNode
}

export type DropdownItemProps = Props &
  DropdownHeaderVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export type DropdownHeaderProps = Props

const DropdownHeader = React.forwardRef<HTMLDivElement, DropdownItemProps>(
  (props, ref) => {
    const {children, css = {}, onClick, ...delegated} = props
    const dropdownHeaderRef = useDOMRef<HTMLDivElement>(ref)
    const {onHeaderClick} = useContext(DropdownContext)

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
  },
)
export default DropdownHeader
