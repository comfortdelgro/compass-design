import {faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Icon} from '../icon'
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
                  <Icon icon={faXmark} />
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
