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
    // Component props
    isOpen = false,
    handleClose,
    // HTMLDiv Props
    ...delegated
  } = props

  const sidebarRef = useDOMRef<HTMLDivElement>(ref)

  // Pick title actions component
  const {child: SidebarActionsElement, rest: childrenWithoutActionsElement} =
    pickChild<typeof SidebarActions>(children, SidebarActions)
  const {child: SidebarContentElement, rest: childrenWithoutContentElement} =
    pickChild<typeof SidebarContent>(children, SidebarContent)
  const {child: SidebarTitleElement, rest: childrenWithoutTitleElement} =
    pickChild<typeof SidebarTitle>(children, SidebarTitle)

  React.useEffect(() => {
    /**
     * Close the sidebar if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      event.preventDefault()
      if (
        sidebarRef.current &&
        !sidebarRef?.current?.contains(event.target as Node)
      ) {
        handleClose?.()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', (event) => {
      handleClickOutside(event as unknown as MouseEvent)
    })
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', (event) => {
        handleClickOutside(event as unknown as MouseEvent)
      })
    }
  }, [sidebarRef])

  return (
    <>
      {isOpen && (
        <StyledSidebarWrapper css={css}>
          <StyledSidebar
            variant={variant}
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
