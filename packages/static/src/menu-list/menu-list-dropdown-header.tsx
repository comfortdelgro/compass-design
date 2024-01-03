import React, {SyntheticEvent, useContext} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import {MenuListContext} from './menu-list-context'
import styles from './styles/menu-list-dropdown-item.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
  leftIcon?: React.ReactNode | false
  rightIcon?: React.ReactNode | true
  onPress?: (e: SyntheticEvent) => void
}

export type MenuListDropdownHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>

const MenuListDropdownHeader = React.forwardRef<
  HTMLButtonElement,
  MenuListDropdownHeaderProps
>((props, ref) => {
  const {
    // ComponentProps
    children,
    leftIcon,
    rightIcon,
    onPress: onPressProp,
    className = '',
    // StyledComponentProps
    css = {},
    // Html props
    ...delegated
  } = props

  const {isOpen, toggleOpen} = useContext(MenuListContext)

  const buttonRef = useDOMRef<HTMLButtonElement>(ref)

  // toggle menu list when click by mouse or by keyboard
  const handleOnClick = (e: SyntheticEvent) => {
    if (onPressProp) {
      onPressProp(e)
    }
    if (toggleOpen) {
      toggleOpen()
    }
  }

  const renderLeftIcon = () => {
    const classes = [
      styles.menuListDropdownChevronDownLeftIcon,
      isOpen && `${styles.rotatedIcon} cdg-menu-list-rotated-icon`,
      'cdg-menu-list-dropdown-chevron-down-left-icon',
    ]
      .filter(Boolean)
      .join(' ')

    if (leftIcon === undefined) {
      return (
        <div className={classes}>
          <ChevronIcon />
        </div>
      )
    } else if (leftIcon === false) {
      return null
    } else {
      return <div className={classes}>{leftIcon}</div>
    }
  }

  const renderRightIcon = () => {
    const classes = [
      styles.menuListDropdownChevronDownRightIcon,
      isOpen && `${styles.rotatedIcon} cdg-menu-list-rotated-icon`,
      'cdg-menu-list-dropdown-chevron-down-right-icon',
    ]
      .filter(Boolean)
      .join(' ')

    if (rightIcon === true) {
      return (
        <div className={classes}>
          <ChevronIcon />
        </div>
      )
    } else if (rightIcon === undefined) {
      return null
    } else {
      return <div className={classes}>{rightIcon}</div>
    }
  }

  const renderTitle = () => {
    if (typeof children === 'string') {
      return (
        <h2
          className={`${styles.menuListDropdownTitle} cdg-menu-list-dropdown-title`}
        >
          {children}
        </h2>
      )
    }
    return children
  }

  const rootClasses = [
    styles.menuListDropdownHeader,
    className,
    'cdg-menu-list-dropdown-header',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={buttonRef}>
      <button
        className={rootClasses}
        ref={buttonRef}
        onClick={handleOnClick}
        aria-expanded={isOpen}
        {...delegated}
      >
        {renderLeftIcon()}
        {renderTitle()}
        {renderRightIcon()}
      </button>
    </CssInjection>
  )
})

export default MenuListDropdownHeader

interface ChevronIconProps {
  className?: string
}

const ChevronIcon = (props: ChevronIconProps) => {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.15244 6.82759C5.62099 7.28332 6.38193 7.28332 6.85048 6.82759L11.6485 2.16093C11.9933 1.82551 12.0945 1.32603 11.9071 0.888532C11.7197 0.451032 11.2849 0.166656 10.7976 0.166656L1.20159 0.170303C0.718038 0.170303 0.279471 0.454678 0.0920492 0.892178C-0.0953726 1.32968 0.00958361 1.82916 0.350691 2.16457L5.14869 6.83124L5.15244 6.82759Z'
        fill='currentColor'
      />
    </svg>
  )
}
