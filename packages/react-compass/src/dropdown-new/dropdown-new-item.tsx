import React, {
  Key,
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {DropdownContext} from './dropdown-new-context'
import {
  StyledColor,
  StyledContent,
  StyledFlagItem,
  StyledItemIcon,
  StyledLoading,
  StyledOption,
} from './dropdown-new.styles'
import {textContent} from './utils'

interface Props extends StyledComponentProps {
  rightColor?: string
  type?: 'icon' | 'color'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  value: Key
  textValue?: string
  checkmark?: 'none' | 'checkbox' | 'tick'
  flagName?: string
  children: React.ReactNode
}

const FlagComponent = React.lazy(() => import('./flags'))

const LoadingIcon = () => {
  return (
    <StyledLoading>
      <div className='spinner'>
        <div className='spinner-1' />
        <div className='spinner-2' />
        <div className='spinner-3' />
        <div />
      </div>
    </StyledLoading>
  )
}

export type DropdownItemProps = Props

const DropdownNewItem: React.FC<DropdownItemProps> = (
  props: DropdownItemProps,
) => {
  const {children, value, flagName, type, rightIcon, leftIcon, rightColor} =
    props
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

  const ref = useRef<HTMLLIElement>(null)

  const isSeleted = useMemo(
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
      if (ref.current) {
        ref.current.scrollIntoView({block: 'nearest'})
      }
    }
  }, [focusKey, value])

  useEffect(() => {
    if (selectedKey && selectedKey.toString() === value.toString()) {
      setSelectedItem({value: value.toString(), displayValue: children})
      if (ref.current) {
        ref.current.scrollIntoView({block: 'nearest'})
      }
    }
  }, [selectedKey, value])

  useEffect(() => {
    if (open && isSeleted && ref.current) {
      ref.current.scrollIntoView({block: 'nearest'})
    }
  }, [open, isSeleted])

  const handleItemClick = () => {
    if (isDisabled) {
      return
    }
    onItemClick({
      value: value.toString(),
      displayValue: children,
      flagName: flagName ?? '',
    })
  }

  return canDisplayed ? (
    <StyledOption
      isFocused={isFocused}
      isSelected={isSeleted}
      isDisabled={isDisabled}
      onClick={handleItemClick}
      ref={ref}
    >
      {flagName && (
        <StyledFlagItem>
          <Suspense fallback={<LoadingIcon />}>
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
}

export default DropdownNewItem
