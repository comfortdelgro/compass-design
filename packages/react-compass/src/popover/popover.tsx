import React, {useCallback} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledPopover, StyledPopoverContent} from './popover.style'

export type PopoverDirection =
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'top-right'
  | 'top-left'
  | 'top-center'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  direction?: PopoverDirection
  isOpen: boolean
  anchor: React.ReactNode
  onClose?: () => void
}

export type PopoverProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const {
    children,
    anchor,
    isOpen,
    css = {},
    direction = 'bottom-right',
    onClose = () => {},
    ...delegated
  } = props

  const popoverRef = useDOMRef<HTMLDivElement>(ref)

  const handlePopoverBlur = () => {
    onClose()
  }

  const handleWrapperBlur = useCallback(() => {
    requestAnimationFrame(() => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(document.activeElement)
      ) {
        handlePopoverBlur()
      }
    })
  }, [popoverRef, handlePopoverBlur])

  return (
    <StyledPopover
      className='cdg-popover'
      ref={popoverRef}
      css={css}
      {...delegated}
      onBlur={handleWrapperBlur}
      tabIndex={0}
    >
      {anchor}
      {isOpen && (
        <StyledPopoverContent className={`cdg-popover-content ${direction}`}>
          {children}
        </StyledPopoverContent>
      )}
    </StyledPopover>
  )
})

export default Popover
