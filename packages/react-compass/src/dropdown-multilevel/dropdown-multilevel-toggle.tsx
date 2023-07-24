import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMultilevelContext from './dropdown-multilevel-context'
import {StyledDropdownMultilevelToggle} from './dropdown-multilevel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DropdownMultilevelToggleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DropdownMultilevelToggle = React.forwardRef<
  HTMLDivElement,
  DropdownMultilevelToggleProps
>((props, ref) => {
  const {children, css = {}, onClick, ...delegated} = props
  const DropdownMultilevelToggleRef = useDOMRef<HTMLDivElement>(ref)

  const {open, setOpen} = useContext(DropdownMultilevelContext)

  const handleButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open)
    onClick?.(event)
  }

  return (
    <StyledDropdownMultilevelToggle
      css={css}
      ref={DropdownMultilevelToggleRef}
      onClick={handleButtonClick}
      {...delegated}
    >
      {children}
    </StyledDropdownMultilevelToggle>
  )
})

export default DropdownMultilevelToggle
