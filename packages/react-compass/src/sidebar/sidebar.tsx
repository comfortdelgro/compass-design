import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import SidebarActions from './sidebar-actions'
import SidebarContent from './sidebar-content'
import SidebarTitle from './sidebar-title'
import {
  SidebarVariantProps,
  StyledSidebar,
  StyledSidebarCloseIcon,
  StyledSidebarHeader,
  StyledSidebarWrapper,
} from './sidebar.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
  position?: 'left' | 'right'
}

export type SidebarProps = Props &
  SidebarVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const {
    children,
    // StyledComponentProps
    css = {},
    // VariantProps
    variant = 'primary',
    position = 'left',
    // Component props
    isOpen = false,
    handleClose,
    // HTMLDiv Props
    ...delegated
  } = props

  const sidebarRef = useDOMRef<HTMLDivElement>(ref)

  // Pick title actions component
  const {child: SidebarActionsElement} = pickChild<typeof SidebarActions>(
    children,
    SidebarActions,
  )
  const {child: SidebarContentElement} = pickChild<typeof SidebarContent>(
    children,
    SidebarContent,
  )
  const {child: SidebarTitleElement} = pickChild<typeof SidebarTitle>(
    children,
    SidebarTitle,
  )

  React.useEffect(() => {
    /**
     * Close the sidebar if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef?.current?.contains(event.target as Node)
      ) {
        event.preventDefault()
        handleClose?.()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [sidebarRef])

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <StyledSidebarWrapper css={css}>
          <StyledSidebar
            variant={variant}
            position={position}
            ref={sidebarRef}
            {...delegated}
          >
            {variant == 'primary' && (
              <StyledSidebarHeader>
                {SidebarTitleElement}
                <StyledSidebarCloseIcon onClick={() => handleClose?.()}>
                  <svg viewBox='0 0 384 512'>
                    <path
                      fill='currentColor'
                      d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
                    />
                  </svg>
                </StyledSidebarCloseIcon>
              </StyledSidebarHeader>
            )}
            {SidebarContentElement}
            {SidebarActionsElement}
          </StyledSidebar>
        </StyledSidebarWrapper>
      )}
    </>
  )
})

export default Sidebar as typeof Sidebar & {
  Actions: typeof SidebarActions
  Content: typeof SidebarContent
  Title: typeof SidebarTitle
}
