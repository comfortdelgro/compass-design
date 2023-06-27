import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMultilevelContext, {
  DropdownMultilevelContextType,
} from './dropdown-multilevel-context'
import {StyledDropdownMultilevelItem} from './dropdown-multilevel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DropdownMultilevelItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DropdownMultilevelItem = React.forwardRef<
  HTMLDivElement,
  DropdownMultilevelItemProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  const DropdownMultilevelItemRef = useDOMRef<HTMLDivElement>(ref)

  const contextValue = useContext(
    DropdownMultilevelContext,
  ) as DropdownMultilevelContextType

  return (
    <StyledDropdownMultilevelItem
      css={css}
      ref={DropdownMultilevelItemRef}
      {...delegated}
    >
      {children}
    </StyledDropdownMultilevelItem>
  )
})

export default DropdownMultilevelItem
