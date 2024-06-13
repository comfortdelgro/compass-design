'use client'

import {
  CSSProperties,
  FocusEventHandler,
  forwardRef,
  ReactElement,
  Ref,
  useCallback,
  useMemo,
  useState,
} from 'react'
import Button from '../button'
import {useDeepCompareEffect} from '../utils/hooks'
import {CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import PudoItem from './pudo-item'
import type {PudoItemProps, PudoProps, PudoValueChange} from './pudo.types'
import classes from './styles/pudo.module.css'

const getCSSVariableValue = (colorInput?: string): string | undefined => {
  if (
    !colorInput ||
    typeof window === 'undefined' ||
    typeof document === 'undefined'
  ) {
    return colorInput
  }

  if (
    !window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(colorInput)
      .trim()
  ) {
    // if input is NOT a valid color variable name
    return colorInput
  }

  return `var(${colorInput})`
}

const PudoRefComponent = <TItemKeys extends PropertyKey>(
  {
    items,
    className = '',
    css = {},
    type,
    onValuesChange,
    onItemFocusChange,
    onItemSwap,
    minLength = 2,
    maxLength: unCheckedMaxLength = 3,
    removableItems = [],
    removableLabel = 'Remove',
    addItems = [],
    addItemsLabel = 'Add',
    compact,
    alignIcon,
    bgColor,
    isClearable,
    style,
    ...htmlDataAttributes
  }: PudoProps<TItemKeys>,
  ref: Ref<HTMLDivElement>,
) => {
  const maxLength =
    unCheckedMaxLength < minLength ? minLength : unCheckedMaxLength

  const PudoRef = useDOMRef<HTMLDivElement>(ref)

  /** Use for render UI */
  const [pudoItems, setPudoItems] = useState<Array<PudoItemProps<TItemKeys>>>(
    [],
  )
  const [arrPudoValues, setArrPudoValues] = useState<
    PudoValueChange<TItemKeys>
  >([])

  const dedupedAddItems = useMemo(
    () =>
      addItems.filter(
        ({name}, index, currArr) =>
          index ===
            currArr.findIndex((compareItem) => compareItem.name === name) &&
          !pudoItems.find((item) => item.name === name),
      ),
    [addItems, pudoItems],
  )

  const dedupedRemoveKeys = useMemo(
    () => [...new Set(removableItems)],
    [removableItems],
  )

  const showAddButton = useMemo(() => {
    if (type === 'custom') {
      return false
    }

    if (!dedupedAddItems.length || pudoItems.length > maxLength - 1) {
      return false
    }

    return true
  }, [type, pudoItems, dedupedAddItems, maxLength])

  const showRemoveButton = useMemo(() => {
    if (type === 'custom') {
      return false
    }

    if (!dedupedRemoveKeys.length || pudoItems.length < minLength + 1) {
      return false
    }

    // hide remove button if there are no items that allowed to be removed.
    if (!pudoItems.some(({name}) => removableItems.includes(name))) {
      return false
    }

    return true
  }, [type, dedupedRemoveKeys.length, pudoItems, minLength, removableItems])

  const handleUpdatePudoValues = useCallback(
    (newValues: PudoValueChange<TItemKeys>) => {
      setArrPudoValues(newValues)
      onValuesChange?.(newValues)
    },
    [onValuesChange],
  )

  const handleAddItems = useCallback(() => {
    if (!dedupedAddItems.length) {
      return
    }

    const allowToAdd = dedupedAddItems.slice(0, maxLength - pudoItems.length)
    setPudoItems((currState) => [...currState, ...allowToAdd])
    handleUpdatePudoValues([
      ...arrPudoValues,
      ...allowToAdd.map(({name, value = ''}) => ({name, value})),
    ])
  }, [
    dedupedAddItems,
    maxLength,
    pudoItems.length,
    arrPudoValues,
    handleUpdatePudoValues,
  ])

  const handleRemoveItems = useCallback(() => {
    if (!dedupedRemoveKeys.length) {
      return
    }

    const newPudoItems = pudoItems.slice()
    const newPudoArrValues = arrPudoValues.slice()
    for (const removeKey of dedupedRemoveKeys) {
      if (newPudoItems.length < minLength + 1) {
        break
      }

      const removeIndex = newPudoItems.findIndex(({name}) => name === removeKey)
      if (removeIndex === -1) {
        continue
      }

      newPudoItems.splice(removeIndex, 1)
      newPudoArrValues.splice(removeIndex, 1)
    }

    setPudoItems(newPudoItems)
    handleUpdatePudoValues(newPudoArrValues)
  }, [
    dedupedRemoveKeys,
    pudoItems,
    arrPudoValues,
    handleUpdatePudoValues,
    minLength,
  ])

  const swapPudoItemsHandler = useCallback(
    (
        itemName: PudoItemProps<TItemKeys>['name'],
        index: number,
        currPudoItemList: PudoItemProps<TItemKeys>[],
      ) =>
      () => {
        const swapKey = currPudoItemList[index + 1]?.name
        if (!swapKey) {
          return
        }

        // structuredClone requires at least node@17, it might break vendor's apps.
        const newArrayPudoValues = arrPudoValues.slice()
        newArrayPudoValues[index] = {
          name: itemName,
          value: arrPudoValues[index + 1]?.value ?? '',
        }
        newArrayPudoValues[index + 1] = {
          name: swapKey,
          value: arrPudoValues[index]?.value ?? '',
        }

        handleUpdatePudoValues(newArrayPudoValues)
        onItemSwap?.([itemName, swapKey])
      },
    [arrPudoValues, handleUpdatePudoValues, onItemSwap],
  )

  const onValueChangeHandler = useCallback(
    (itemName: TItemKeys) => (newValue: string) =>
      handleUpdatePudoValues(
        arrPudoValues.map((currentItemValue) =>
          currentItemValue.name === itemName
            ? {name: itemName, value: newValue}
            : currentItemValue,
        ),
      ),
    [arrPudoValues, handleUpdatePudoValues],
  )

  const onInputFocusHandler = useCallback<
    (itemName: TItemKeys) => FocusEventHandler<HTMLInputElement> | undefined
  >(
    (itemName) =>
      onItemFocusChange ? (e) => onItemFocusChange(itemName, e) : undefined,
    [onItemFocusChange],
  )

  const handlePudoItemsWrapperBlur: FocusEventHandler<HTMLDivElement> = (
    blurEvent,
  ) => {
    if (blurEvent.currentTarget.contains(blurEvent.relatedTarget)) {
      // prevent trigger onItemFocusChange when there is a PUDO input item receives focus.
      return
    }

    onItemFocusChange?.(undefined)
  }

  const renderPudoItems = useMemo(
    () =>
      pudoItems.map((itemProps, index, currArr) => (
        <PudoItem
          key={itemProps.name.toString()}
          {...itemProps}
          type={type || itemProps.type}
          index={index}
          itemsLength={currArr.length}
          value={arrPudoValues[index]?.value ?? ''}
          allowSwap={!!itemProps.allowSwap}
          handleSwap={swapPudoItemsHandler(itemProps.name, index, currArr)}
          onValueChange={onValueChangeHandler(itemProps.name)}
          onInputFocus={onInputFocusHandler(itemProps.name)}
          alignIcon={alignIcon || itemProps.alignIcon}
          isClearable={isClearable ?? itemProps.isClearable}
          compact={compact}
        />
      )),
    [
      alignIcon,
      arrPudoValues,
      compact,
      isClearable,
      onInputFocusHandler,
      onValueChangeHandler,
      pudoItems,
      swapPudoItemsHandler,
      type,
    ],
  )

  useDeepCompareEffect(() => {
    const dedupedItems = items.filter(
      ({name}, index, currArr) =>
        index === currArr.findIndex((compareItem) => compareItem.name === name),
    )

    const pudoValue = dedupedItems.map(({name, value = ''}) => ({name, value}))
    setPudoItems(dedupedItems)
    setArrPudoValues(pudoValue)
  }, [items])

  return (
    <CssInjection css={css} childrenRef={PudoRef}>
      <div
        {...htmlDataAttributes}
        ref={PudoRef}
        className={classNames(
          classes.pudoContainer,
          className,
          'cdg-pudo-container',
        )}
        style={
          {
            ...style,
            '--cdg-pudo-bg': getCSSVariableValue(
              htmlDataAttributes['data-background'] || bgColor,
            ),
          } as CSSProperties
        }
      >
        <div
          className={classNames(
            classes.pudoItemsWrapper,
            'cdg-pudo-items-wrapper',
          )}
          onBlur={handlePudoItemsWrapperBlur}
        >
          {renderPudoItems}
        </div>

        <div className={classNames(classes.pudoActions, 'cdg-pudo-actions')}>
          {showAddButton && (
            <Button
              className={classNames(
                classes.pudoActionButton,
                'cdg-pudo-action-button',
              )}
              variant='ghost'
              type='button'
              size='sm'
              onClick={handleAddItems}
              rightIcon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                >
                  <path
                    d='M7 13.9997C3.1339 13.9997 0 10.8658 0 6.99975C0 3.13365 3.1339 -0.00025177 7 -0.00025177C10.8661 -0.00025177 14 3.13365 14 6.99975C14 10.8658 10.8661 13.9997 7 13.9997ZM6.3 6.29975H4C3.72386 6.29975 3.5 6.52361 3.5 6.79975V7.19975C3.5 7.47589 3.72386 7.69975 4 7.69975H6.3V9.99975C6.3 10.2759 6.52386 10.4997 6.8 10.4997H7.2C7.47614 10.4997 7.7 10.2759 7.7 9.99975V7.69975H10C10.2761 7.69975 10.5 7.47589 10.5 7.19975V6.79975C10.5 6.52361 10.2761 6.29975 10 6.29975H7.7V3.99975C7.7 3.72361 7.47614 3.49975 7.2 3.49975H7H6.8C6.52386 3.49975 6.3 3.72361 6.3 3.99975V6.29975Z'
                    fill='#0142AF'
                  />
                </svg>
              }
            >
              {addItemsLabel}
            </Button>
          )}

          {showRemoveButton && (
            <Button
              className={classNames(
                classes.pudoActionButton,
                'cdg-pudo-action-button',
              )}
              variant='danger'
              type='button'
              size='sm'
              onClick={handleRemoveItems}
              rightIcon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M8 14.9995C4.1339 14.9995 1 11.8656 1 7.99945C1 4.13335 4.1339 0.999451 8 0.999451C11.8661 0.999451 15 4.13335 15 7.99945C15 11.8656 11.8661 14.9995 8 14.9995ZM5 7.29945C4.72386 7.29945 4.5 7.52331 4.5 7.79945V8.19945C4.5 8.47559 4.72386 8.69945 5 8.69945H11C11.2761 8.69945 11.5 8.47559 11.5 8.19945V7.79945C11.5 7.52331 11.2761 7.29945 11 7.29945H5Z'
                    fill='#E31617'
                  />
                </svg>
              }
            >
              {removableLabel}
            </Button>
          )}
        </div>
      </div>
    </CssInjection>
  )
}

const Pudo = forwardRef(PudoRefComponent) as <ItemKeys extends PropertyKey>(
  p: PudoProps<ItemKeys> & {ref?: Ref<Omit<HTMLDivElement, 'onChange'>>},
) => ReactElement

export default Pudo
