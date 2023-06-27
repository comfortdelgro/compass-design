import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import React, {useContext} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMultilevelContext, {
  DropdownMultilevelContextType,
} from './dropdown-multilevel-context'
import {StyledDropdownMultilevelMenu} from './dropdown-multilevel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DropdownMultilevelMenuProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DropdownMultilevelMenu = React.forwardRef<
  HTMLDivElement,
  DropdownMultilevelMenuProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props
  const DropdownMultilevelMenuRef = useDOMRef<HTMLDivElement>(ref)

  const contextValue = useContext(
    DropdownMultilevelContext,
  ) as DropdownMultilevelContextType

  // ====================================== FLOATING ======================================
  const {refs, floatingStyles, context} = useFloating({
    open: contextValue.open,
    onOpenChange: contextValue.setOpen,
    middleware: [offset(8), flip()],
    whileElementsMounted: autoUpdate,
  })

  const dismiss = useDismiss(context)

  const {getReferenceProps, getFloatingProps} = useInteractions([dismiss])

  return (
    <StyledDropdownMultilevelMenu css={css} {...delegated}>
      <div
        className='Popover'
        ref={refs.setFloating}
        style={{
          ...floatingStyles,
          ...{
            zIndex: 60,
          },
        }}
        {...getFloatingProps}
      >
        {children}
      </div>
    </StyledDropdownMultilevelMenu>
  )
})

export default DropdownMultilevelMenu
