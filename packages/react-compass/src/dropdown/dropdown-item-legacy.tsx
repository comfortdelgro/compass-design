import React, {Key, Suspense, useContext, useEffect, useMemo} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {DropdownContext} from './dropdown-context'
import DropdownLoading from './dropdown-loading'
import {
  DropdownItemVariantProps,
  StyledColor,
  StyledContent,
  StyledFlagItem,
  StyledItemIcon,
  StyledOption,
} from './dropdown.styles'
import {textContent} from './utils'

interface Props extends StyledComponentProps {
  rightColor?: string
  type?: 'icon' | 'color'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  textValue?: string
  checkmark?: 'none' | 'checkbox' | 'tick'
  flagName?: string
  children: React.ReactNode
  key?: Key
}

const FlagComponent = React.lazy(() => import('./flags'))

export type DropdownItemProps = Props &
  DropdownItemVariantProps &
  Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props>

const DropdownItemLegacy = React.forwardRef<HTMLLIElement, DropdownItemProps>(
  (props, ref) => {
    const {
      children,
      flagName,
      type,
      rightIcon,
      leftIcon,
      rightColor,
      css = {},
      key,
      ...other
    } = props

    const {textValue, ...delegated} = other

    const value = key ?? ''

    const {
      selectedItem,
      disabledKeys = [],
      searchValue,
      open,
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
    }, [value, isDisabled, canDisplayed])

    useEffect(() => {
      if (focusKey && focusKey.toString() === value.toString()) {
        if (dropdownItemRef.current) {
          dropdownItemRef.current.scrollIntoView({block: 'nearest'})
        }
      }
    }, [focusKey, value])

    useEffect(() => {
      if (selectedKey && selectedKey.toString() === value.toString()) {
        setSelectedItem({
          value: value.toString(),
          displayValue: textValue || children,
        })
        if (dropdownItemRef.current) {
          dropdownItemRef.current.scrollIntoView({block: 'nearest'})
        }
      }
    }, [selectedKey, value])

    useEffect(() => {
      if (open && isSelected && dropdownItemRef.current) {
        dropdownItemRef.current.scrollIntoView({block: 'nearest'})
      }
    }, [open, isSelected])

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

    return canDisplayed ? (
      <StyledOption
        css={css}
        isFocused={isFocused}
        isSelected={isSelected && !isFocused}
        isDisabled={isDisabled}
        onClick={handleItemClick}
        ref={dropdownItemRef}
        {...delegated}
      >
        {flagName && (
          <StyledFlagItem>
            <Suspense fallback={<DropdownLoading />}>
              <FlagComponent iso={flagName} />
            </Suspense>
          </StyledFlagItem>
        )}
        {leftIcon && <StyledItemIcon>{leftIcon}</StyledItemIcon>}
        <StyledContent>{children}</StyledContent>
        {type === 'icon' && rightIcon && (
          <StyledItemIcon>{rightIcon}</StyledItemIcon>
        )}
        {type === 'color' && rightColor && (
          <StyledColor css={{$$bg: rightColor}} />
        )}
      </StyledOption>
    ) : null
  },
)

export default DropdownItemLegacy
