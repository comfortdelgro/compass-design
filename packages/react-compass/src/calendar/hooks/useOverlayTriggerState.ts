import {OverlayTriggerProps} from '../types'
import {useControlledState} from './useControlledState'

export interface OverlayTriggerState {
  readonly isOpen: boolean
  setOpen(isOpen: boolean): void
  open(): void
  close(): void
  toggle(): void
}

export function useOverlayTriggerState(
  props: OverlayTriggerProps,
): OverlayTriggerState {
  const [isOpen, setOpen] = useControlledState(
    props.isOpen,
    props.defaultOpen || false,
    props.onOpenChange,
  )

  return {
    isOpen,
    setOpen,
    open() {
      setOpen(true)
    },
    close() {
      setOpen(false)
    },
    toggle() {
      setOpen(!isOpen)
    },
  }
}
