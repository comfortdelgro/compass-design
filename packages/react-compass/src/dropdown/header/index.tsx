import {useButton} from '@react-aria/button'
import type {AriaButtonProps} from '@react-types/button'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledHeaderList} from '../dropdown.styles'

interface Props extends AriaButtonProps {
  title: string
}

const Header = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const buttonRef = useDOMRef<HTMLButtonElement>(ref)
  const {buttonProps} = useButton(props, buttonRef)

  return (
    <StyledHeaderList>
      <span>{props.title}</span>
      <button {...buttonProps}>Clear</button>
    </StyledHeaderList>
  )
})

export default Header
