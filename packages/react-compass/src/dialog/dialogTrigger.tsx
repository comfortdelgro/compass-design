import {OverlayContainer} from '@react-aria/overlays'
import {useOverlayTriggerState} from '@react-stately/overlays'
import React from 'react'
import Button from '../button'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  label?: string
}

export type DialogTriggerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogTrigger = React.forwardRef<HTMLDivElement, DialogTriggerProps>(
  (props, ref) => {
    // let {overlayProps} = useOverlay()
    const {
      // StyledComponentProps
      css = {},
      // children
      children,
      // ComponentProps
      label = '',
      // AriaButtonProps
      ...ariaSafeProps
    } = props

    const dialogRef = useDOMRef<HTMLDivElement>(ref)
    const state = useOverlayTriggerState({})
    console.log('children of trigger', children)

    return (
      <>
        <Button onPress={() => state.open()}>{label}</Button>
        {state.isOpen && (
          <OverlayContainer>
            {React.cloneElement(children as unknown as JSX.Element, {
              onClose: () => state.close(),
            })}
          </OverlayContainer>
        )}
      </>
    )
  },
)

export default DialogTrigger
