import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
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
    const {children, css = {}, ...delegated} = props
    const dropdownHeaderRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledDropdownHeader ref={dropdownHeaderRef} css={css} {...delegated}>
        {children}
      </StyledDropdownHeader>
    )
  },
)
export default DropdownHeader
