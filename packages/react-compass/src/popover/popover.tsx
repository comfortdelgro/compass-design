import React, {useCallback, useEffect, useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledPopover, StyledPopoverContent} from './popover.style'

const OFFSET = 10

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
  offset?: number
  anchor: React.ReactNode
  attachToElement?: HTMLElement | null
  onClose?: () => void
}

export type PopoverProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const {
    children,
    anchor,
    isOpen,
    offset = OFFSET,
    css = {},
    direction = 'bottom-left',
    attachToElement,
    onClose = () => null,
    ...delegated
  } = props

  const [position, setPosition] = useState({
    top: '0',
    right: 'auto',
    bottom: 'auto',
    left: '0',
  })
  const popoverRef = useDOMRef<HTMLDivElement>(ref)
  const popoverContentRef = useDOMRef<HTMLDivElement>()

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      popoverContentRef.current &&
      !popoverContentRef.current.contains(event.target as Node)
    ) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  useEffect(() => {
    if (popoverContentRef.current && popoverRef.current) {
      if (isOpen) {
        const target = attachToElement || document.body
        updatePosition()
        target.appendChild(popoverContentRef.current)
      } else if (popoverContentRef.current.parentElement) {
        popoverContentRef.current.parentElement.removeChild(
          popoverContentRef.current,
        )
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (popoverContentRef.current && popoverRef.current) {
      updatePosition()
    }
  }, [popoverContentRef.current, popoverRef.current])

  const updatePosition = () => {
    if (popoverRef.current && popoverContentRef.current) {
      const target = attachToElement || document.body
      target.style.position = 'relative'

      const displayPosition = {
        ...position,
      }
      const anchorElement =
        (popoverRef.current.children[0] as HTMLElement) || popoverRef.current
      const offsetParent = anchorElement.offsetParent || target
      const element = popoverRef.current
      const bound = element.getBoundingClientRect()

      switch (direction) {
        case 'bottom-left':
        default:
          displayPosition.top = `${
            anchorElement.offsetTop + bound.height + offset
          }px`
          displayPosition.left = `${anchorElement.offsetLeft}px`
          displayPosition.bottom = 'auto'
          displayPosition.right = 'auto'
          break

        case 'bottom-center':
          displayPosition.top = `${
            anchorElement.offsetTop + bound.height + offset
          }px`
          displayPosition.left = `${
            anchorElement.offsetLeft + bound.width / 2
          }px`
          displayPosition.bottom = 'auto'
          displayPosition.right = 'auto'
          break

        case 'bottom-right':
          displayPosition.top = `${
            anchorElement.offsetTop + bound.height + offset
          }px`
          displayPosition.left = 'auto'
          displayPosition.bottom = 'auto'
          displayPosition.right = `${
            offsetParent.clientWidth - anchorElement.offsetLeft - bound.width
          }px`
          break

        case 'top-left':
          displayPosition.top = 'auto'
          displayPosition.left = `${anchorElement.offsetLeft}px`
          displayPosition.bottom = `${
            offsetParent.clientHeight - anchorElement.offsetTop + offset
          }px`
          displayPosition.right = 'auto'
          break

        case 'top-center':
          displayPosition.top = 'auto'
          displayPosition.left = `${
            anchorElement.offsetLeft + bound.width / 2
          }px`
          displayPosition.bottom = `${
            offsetParent.clientHeight - anchorElement.offsetTop + offset
          }px`
          displayPosition.right = 'auto'
          break

        case 'top-right':
          displayPosition.top = 'auto'
          displayPosition.left = 'auto'
          displayPosition.bottom = `${
            offsetParent.clientHeight - anchorElement.offsetTop + offset
          }px`
          displayPosition.right = `${
            offsetParent.clientWidth - anchorElement.offsetLeft - bound.width
          }px`
          break
      }

      setPosition(displayPosition)
    }
  }

  const handlePopoverBlur = () => {
    onClose()
  }

  const handleWrapperBlur = useCallback(() => {
    requestAnimationFrame(() => {
      if (
        popoverContentRef.current &&
        !popoverContentRef.current.contains(document.activeElement) &&
        popoverContentRef.current &&
        !popoverContentRef.current.contains(document.activeElement)
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
      <StyledPopoverContent
        ref={popoverContentRef}
        className={`cdg-popover-content ${direction}`}
        style={{
          top: position.top,
          left: position.left,
          right: position.right,
          bottom: position.bottom,
        }}
        onBlur={handleWrapperBlur}
        tabIndex={0}
      >
        {children}
      </StyledPopoverContent>
    </StyledPopover>
  )
})

export default Popover
