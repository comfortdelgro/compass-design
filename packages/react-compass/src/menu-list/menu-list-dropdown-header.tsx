import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {AriaButtonProps, useButton} from '@react-aria/button'
import type {PressEvent} from '@react-types/shared'
import React, {useContext} from 'react'
import Icon, {IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {MenuListContext} from './menu-list-context'
import {StyledMenuListDropdownHeader} from './menu-list-dropdown-header.styles'
interface Props extends AriaButtonProps, StyledComponentProps {
  children?: React.ReactNode
  leftIcon?: IconProp | false
  rightIcon?: IconProp | true
}

export type MenuListDropdownHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>

const MenuListDropdownHeader = React.forwardRef<
  HTMLButtonElement,
  MenuListDropdownHeaderProps
>((props, ref) => {
  const {
    children,
    leftIcon,
    rightIcon,
    onPress: onPressProp,
    css = {},
    ...ariaSafeProps
  } = props

  const {isOpen, toggleOpen} = useContext(MenuListContext)

  const buttonRef = useDOMRef<HTMLButtonElement>(ref)

  const handleOnClick = (e: PressEvent) => {
    if (onPressProp) {
      onPressProp(e)
    }
    if (toggleOpen) {
      toggleOpen()
    }
  }

  const {buttonProps} = useButton(
    {onPress: handleOnClick, ...ariaSafeProps},
    buttonRef,
  )

  const renderLeftIcon = () => {
    if (leftIcon === undefined) {
      return (
        <Icon
          className={`menu-list-dropdown-chevron-down-left-icon ${
            isOpen ? 'rotated-icon' : ''
          }`}
          icon={faChevronDown}
        />
      )
    } else if (leftIcon === false) {
      return null
    } else {
      return (
        <Icon
          className={`menu-list-dropdown-chevron-down-left-icon ${
            isOpen ? 'rotated-icon' : ''
          }`}
          icon={leftIcon}
        />
      )
    }
  }

  const renderRightIcon = () => {
    if (rightIcon === true) {
      return (
        <Icon
          className={`menu-list-dropdown-chevron-down-right-icon ${
            isOpen ? 'rotated-icon' : ''
          }`}
          icon={faChevronDown}
        />
      )
    } else if (rightIcon === undefined) {
      return null
    } else {
      return (
        <Icon
          className={`menu-list-dropdown-chevron-down-right-icon ${
            isOpen ? 'rotated-icon' : ''
          }`}
          icon={rightIcon}
        />
      )
    }
  }

  const renderTitle = () => {
    if (typeof children === 'string') {
      return <h2 className='menu-list-dropdown-title'>{children}</h2>
    }
    return children
  }

  return (
    <StyledMenuListDropdownHeader
      className='menu-list-dropdown-header'
      ref={ref}
      css={css}
      {...buttonProps}
    >
      {renderLeftIcon()}
      {renderTitle()}
      {renderRightIcon()}
    </StyledMenuListDropdownHeader>
  )
})

export default MenuListDropdownHeader
