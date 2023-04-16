import {AriaToggleProps, useToggle} from '@react-aria/toggle'
import {useToggleState} from '@react-stately/toggle'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledToggle, ToggleVariantProps} from './toggle.styles'

interface Props extends AriaToggleProps, StyledComponentProps {
  size?: 'sm' | 'lg'
}

export type ToggleProps = Props & ToggleVariantProps

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
  const {size = 'sm', css = {}} = props
  const state = useToggleState(props)
  const toggleRef = useDOMRef<HTMLInputElement>(ref)
  const {inputProps} = useToggle(props, state, toggleRef)

  const onClick = () => {
    if (!inputProps.disabled) {
      state.toggle()
    }
  }

  return (
    <StyledToggle
      css={css}
      size={size}
      active={state.isSelected}
      disabled={!!inputProps.disabled}
      onClick={onClick}
    >
      <input {...inputProps} ref={toggleRef} style={{display: 'none'}} />
      <div className='toggle-circle' />
    </StyledToggle>
  )
})

export default Toggle
