import {useButton} from '@react-aria/button'
import type {AriaButtonProps} from '@react-types/button'
import React from 'react'
import {StyledHeaderList} from '../dropdown.styles'

interface Props extends AriaButtonProps {
  title: string
}

const Header: React.FC<Props> = ({title, ...props}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const {buttonProps} = useButton(props, buttonRef)

  return (
    <StyledHeaderList>
      <span>{title}</span>
      <button {...buttonProps}>Clear</button>
    </StyledHeaderList>
  )
}

export default Header
