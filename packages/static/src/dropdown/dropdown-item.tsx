import Color from 'colorjs.io'
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
  <svg
    width='16'
    height='17'
    viewBox='0 0 16 17'
    fill='none'
    className={`${styles.dropdownItemRightIconContentSvg}`}
  >
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
      className,
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

    const rootClasses = useMemo(() => {
      return [
        styles.dropdownOption,
        isFocused && !isSelected && styles.dropdownItemIsFocused,
        isSelected && !isFocused && styles.dropdownItemIsSelected,
        isSelected && isFocused && styles.dropdownItemIsSelectedFocused,
        isDisabled && styles.dropdownItemIsDisabled,
        className,
        'cdg-dropdown-item',
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, isDisabled, isFocused, isSelected])

    const rightIconClasses = useMemo(() => {
      return [
        styles.dropdownItemRightIcon,
        isSelected && styles.dropdownItemRightIconSelected,
        checkmark === 'checkbox' &&
          styles.dropdownItemRightIconCheckMarkCheckbox,
        checkmark === 'tick' && styles.dropdownItemRightIconCheckMarkTick,
        'cdg-dropdown-item-right-icon',
      ]
        .filter(Boolean)
        .join(' ')
    }, [checkmark, isSelected])

    const colorClasses = useMemo(() => {
      return [
        styles.dropdownItemColor,
        isSelected && styles.dropdownItemSelected,
        'cdg-dropdown-item-color',
      ]
        .filter(Boolean)
        .join(' ')
    }, [isSelected])

    return canDisplayed ? (
      <CssInjection css={css} childrenRef={dropdownItemRef}>
        <li
          {...delegated}
          className={rootClasses}
          onClick={handleItemClick}
          ref={dropdownItemRef}
          role='option'
          aria-selected={isSelected}
        >
          {leftIcon && (
            <div
              className={`${styles.dropdownItemIcon} cdg-dropdown-item-left-icon`}
            >
              {leftIcon}
            </div>
          )}
          <div
            className={`${styles.dropdownItemContent} cdg-dropdown-item-content`}
          >
            {children}
          </div>
          {type === 'icon' && rightIcon && (
            <div
              className={`${styles.dropdownItemIcon} cdg-dropdown-item-right-icon`}
            >
              {rightIcon}
            </div>
          )}
          {type === 'color' && rightColor && (
            <div className={colorClasses} style={{background: rightColor}}>
              <svg width='16' height='16' fill='none'>
                <path
                  d='M15.0265 2.97978C15.4357 3.39649 15.4357 4.0699 15.0265 4.48661L6.64506 13.0209C6.23581 13.4376 5.57446 13.4376 5.16521 13.0209L0.973587 8.75375C0.564469 8.33704 0.564469 7.66363 0.973587 7.24692C1.38277 6.8302 2.04608 6.8302 2.45533 7.24692L5.87567 10.7573L13.5466 2.97978C13.9559 2.5624 14.6172 2.5624 15.0265 2.97978Z'
                  fill={
                    new Color(rightColor).luminance > 0.3
                      ? '#000000'
                      : '#ffffff'
                  }
                />
              </svg>
            </div>
          )}
          {checkmark !== 'none' && (
            <div className={rightIconClasses}>
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
