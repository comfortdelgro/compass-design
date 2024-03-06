import React, {useContext} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {MultipleDropdownContext} from './multiple-dropdown-context'

interface Props {
  children: React.ReactNode
  css?: unknown
}

export type MultipleDropdownHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MultipleDropdownHeader = React.forwardRef<
  HTMLDivElement,
  MultipleDropdownHeaderProps
>((props, ref) => {
  const {children, css = {}, onClick} = props
  const dropdownHeaderRef = useDOMRef<HTMLDivElement>(ref)
  const {onHeaderClick} = useContext(MultipleDropdownContext)

  const handleHeaderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onHeaderClick()
    onClick?.(event)
  }

  return (
    <CssInjection css={css} childrenRef={dropdownHeaderRef}>
      <div ref={dropdownHeaderRef} onClick={handleHeaderClick}>
        {children}
      </div>
    </CssInjection>
  )
})

export default MultipleDropdownHeader
