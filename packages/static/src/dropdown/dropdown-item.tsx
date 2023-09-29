import React, {Key, useContext, useEffect, useMemo} from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {DropdownContext} from './dropdown-context'
import {textContent} from './utils'

import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/dropdown.module.css'

const Tick = () => (
  <svg width='10' height='10' viewBox='0 0 10 10' fill='none'>
    <path
      d='M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z'
      fill='currentColor'
    />
  </svg>
)

const BlueTick = () => (
  <svg width='16' height='17' viewBox='0 0 16 17' fill='none'>
    <path
      d='M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z'
      fill='currentColor'
    />
  </svg>
)

interface Props {
  rightColor?: string
  type?: 'icon' | 'color'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  value?: Key
  textValue?: React.ReactNode
  checkmark?: 'none' | 'checkbox' | 'tick'
  flagName?: string
  children: React.ReactNode
  css?: unknown
}

export type DropdownItemProps = Props &
  Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props>

const DropdownItem = React.forwardRef<HTMLLIElement, DropdownItemProps>(
  (props, ref) => {
    const {
      children,
      value = '',
      flagName,
      type,
      rightIcon,
      leftIcon,
      rightColor,
      css = {},
      checkmark = 'none',
      ...other
    } = props

    const {textValue, ...delegated} = other

    const {
      isPositioned,
      open,
      selectedItem,
      disabledKeys = [],
      searchValue,
      focusKey,
      selectedKey,
      setSelectedItem,
      setDropdownItemKeys,
      onItemClick,
    } = useContext(DropdownContext)

    const dropdownItemRef = useDOMRef<HTMLLIElement>(ref)

    const isSelected = useMemo(
      () => selectedItem?.value.toString() === value.toString(),
      [selectedItem, value],
    )

    const isFocused = useMemo(
      () => focusKey?.toString() === value.toString(),
      [focusKey, value],
    )

    const isDisabled = useMemo(
      () =>
        disabledKeys.findIndex(
          (disabledKey) => disabledKey.toString() === value.toString(),
        ) !== -1,
      [disabledKeys, value],
    )

    const canDisplayed = useMemo(() => {
      return (
        !searchValue ||
        textContent(children as React.ReactElement)
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      )
    }, [searchValue, children])

    useEffect(() => {
      if (!isDisabled) {
        setDropdownItemKeys?.((keys) => {
          const index = keys.findIndex(
            (keyItem) => keyItem.value.toString() === value.toString(),
          )
          if (index === -1) {
            keys.push({value, visibility: true})
          } else {
            keys[index] = {
              value,
              visibility: canDisplayed,
            }
          }

          return keys
        })
      }
    }, [value, isDisabled, canDisplayed, setDropdownItemKeys])

    useEffect(() => {
      if (selectedKey && selectedKey.toString() === value.toString()) {
        setSelectedItem({
          value: value.toString(),
          displayValue: textValue || children,
        })
      }
    }, [children, selectedKey, setSelectedItem, textValue, value])

    useEffect(() => {
      if (isPositioned && (isFocused || (isSelected && isFocused))) {
        if (dropdownItemRef.current) {
          setTimeout(() => {
            dropdownItemRef.current.scrollIntoView({block: 'nearest'})
          })
        }
      }
    }, [isPositioned, isFocused, isSelected, dropdownItemRef])

    useEffect(() => {
      if (isSelected && isPositioned) {
        if (dropdownItemRef.current) {
          setTimeout(() => {
            dropdownItemRef.current.scrollIntoView({block: 'nearest'})
          })
        }
      }
    }, [isPositioned, open, isSelected, dropdownItemRef])

    const handleItemClick = () => {
      if (isDisabled) {
        return
      }
      onItemClick({
        value: value.toString(),
        displayValue: textValue || children,
        flagName: flagName ?? '',
      })
    }

    const dropdownOptionClassName = useMemo(() => {
      let className = `${styles.dropdownOption}`
      if (isFocused && !isSelected) {
        className += ` ${styles.dropdownItemIsFocused}`
      }
      if (isSelected && !isFocused) {
        className += ` ${styles.dropdownItemIsSelected}`
      }
      if (isSelected && isFocused) {
        className += ` ${styles.dropdownItemIsSelectedFocused}`
      }
      if (isDisabled) {
        className += ` ${styles.dropdownItemIsDisabled}`
      }

      return className
    }, [isDisabled, isFocused, isSelected])

    const dropdownItemRightIconClassName = useMemo(() => {
      let className = `${styles.dropdownItemRightIcon}`
      if (isSelected) {
        className += ` ${styles.dropdownItemRightIconSelected}`
      }

      if (checkmark === 'checkbox') {
        className += ` ${styles.dropdownItemRightIconCheckMarkCheckbox}`
      } else if (checkmark === 'tick') {
        className += ` ${styles.dropdownItemRightIconCheckMarkTick}`
      }

      return className
    }, [checkmark, isSelected])

    return canDisplayed ? (
      <CssInjection css={css} childrenRef={dropdownItemRef}>
        <li
          className={`${dropdownOptionClassName} cdg-dropdown-item`}
          onClick={handleItemClick}
          ref={dropdownItemRef}
          role='option'
          aria-selected={isSelected}
          {...delegated}
        >
          {leftIcon && (
            <div className={`${styles.dropdownItemIcon}`}>{leftIcon}</div>
          )}
          <div className={`${styles.dropdownItemContent}`}>{children}</div>
          {type === 'icon' && rightIcon && (
            <div className={`${styles.dropdownItemIcon}`}>{rightIcon}</div>
          )}
          {type === 'color' && rightColor && (
            <div
              className={`${styles.dropdownItemColor} ${
                isSelected ? styles.dropdownItemSelected : ''
              }`}
              style={{background: rightColor}}
            >
              <svg
                className={styles.dropdownItemColor}
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.7893 3.08716C14.1555 3.45337 14.1555 4.0481 13.7893 4.41431L6.28931 11.9143C5.9231 12.2805 5.32837 12.2805 4.96216 11.9143L1.21216 8.16431C0.845947 7.7981 0.845947 7.20337 1.21216 6.83716C1.57837 6.47095 2.1731 6.47095 2.53931 6.83716L5.6272 9.92212L12.4651 3.08716C12.8313 2.72095 13.426 2.72095 13.7922 3.08716H13.7893Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          )}
          {checkmark !== 'none' && (
            <div className={dropdownItemRightIconClassName}>
              {checkmark === 'checkbox' ? (
                <div className={styles.dropdownItemRightIconContent}>
                  <Tick />
                </div>
              ) : checkmark === 'tick' ? (
                <BlueTick />
              ) : null}
            </div>
          )}
        </li>
      </CssInjection>
    ) : null
  },
)

export default DropdownItem
