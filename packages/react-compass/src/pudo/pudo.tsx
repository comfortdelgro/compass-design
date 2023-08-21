'use client'

import React, {
  forwardRef,
  ReactElement,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import Button from '../button'
import {useDOMRef} from '../utils/use-dom-ref'
import PudoItem from './pudo-item'
import {StyledPUDO} from './pudo.styles'
import {PudoItemProps, PudoProps} from './pudo.types'

const PudoRefComponent = <TItemKeys extends string | number | symbol>(
  {
    items,
    css = {},
    type,
    onValuesChange,
    minLength = 2,
    maxLength: unCheckedMaxLength = 3,
    removableItems = [],
    removableLabel = 'Remove',
    addItems = [],
    addItemsLabel = 'Add',
    children,
    ...delegated
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
    Array<{name: TItemKeys; value: string}>
  >([])

  const [pudoValues, setPudoValues] = useState<Record<TItemKeys, string>>(
    arrPudoValues.reduce(
      (obj, {name, value}) => ({...obj, [name]: value}),
      {},
    ) as Record<TItemKeys, string>,
  )

  const dedupedAddItems = useMemo(
    () =>
      addItems.filter(
        ({name}, index, currArr) =>
          index ===
          currArr.findIndex((compareItem) => compareItem.name === name),
      ),
    [addItems],
  )

  const dedupedRemoveKeys = useMemo(
    () => [...new Set(removableItems)],
    [removableItems, pudoItems],
  )

  const showAddButton = useMemo(() => {
    if (type === 'label') {
      return false
    }

    if (!dedupedAddItems.length || pudoItems.length > maxLength - 1) {
      return false
    }

    return true
  }, [type, pudoItems, dedupedAddItems, maxLength])

  const showRemoveButton = useMemo(() => {
    if (type === 'label') {
      return false
    }

    if (!dedupedRemoveKeys.length || pudoItems.length < minLength + 1) {
      return false
    }

    if (!pudoItems.some(({name}) => removableItems.includes(name))) {
      return false
    }

    return true
  }, [type, pudoItems, dedupedRemoveKeys, minLength])

  const handleAddItems = useCallback(() => {
    if (!dedupedAddItems.length) {
      return
    }

    const allowToAdd = dedupedAddItems.slice(0, maxLength - pudoItems.length)
    setPudoItems((currState) => [...currState, ...allowToAdd])

    const newPudoObjValues = {
      ...pudoValues,
      ...(allowToAdd.reduce(
        (obj, {name, value}) => ({...obj, [name]: value}),
        {},
      ) as Record<TItemKeys, string>),
    }
    const newPudoArrValues = [
      ...arrPudoValues,
      ...allowToAdd.map(({name, value}) => ({name, value})),
    ]
    setPudoValues(newPudoObjValues)
    setArrPudoValues(newPudoArrValues)
    onValuesChange?.(newPudoObjValues, newPudoArrValues)
  }, [pudoItems, arrPudoValues, pudoValues, dedupedAddItems, maxLength])

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

    const newPudoObjValues = newPudoArrValues.reduce(
      (obj, {name, value}) => ({...obj, [name]: value}),
      {},
    ) as Record<TItemKeys, string>

    setPudoItems(newPudoItems)
    setPudoValues(newPudoObjValues)
    setArrPudoValues(newPudoArrValues)
    onValuesChange?.(newPudoObjValues, newPudoArrValues)
  }, [pudoItems, arrPudoValues, pudoValues, dedupedRemoveKeys, minLength])

  const renderPudoItems = pudoItems.map((itemProps, index, currArr) => (
    <PudoItem
      key={itemProps.name.toString()}
      {...itemProps}
      type={type || itemProps.type || 'input'}
      index={index}
      itemsLength={currArr.length}
      value={pudoValues[itemProps.name]}
      allowSwap={!!itemProps.allowSwap}
      handleSwap={() => {
        const swapKey = currArr[index + 1]?.name
        if (!swapKey) {
          return
        }

        const swapValue = pudoValues[swapKey]
        const currItemValue = pudoValues[itemProps.name]
        // structuredClone requires at least node@17, it might break vendor's apps.
        const newArrayPudoValues = arrPudoValues.slice()
        newArrayPudoValues[index] = {name: itemProps.name, value: swapValue}
        newArrayPudoValues[index + 1] = {name: swapKey, value: currItemValue}

        const newPudoValues = {
          ...pudoValues,
          [swapKey]: currItemValue,
          [itemProps.name]: swapValue,
        }

        setArrPudoValues(newArrayPudoValues)
        setPudoValues(newPudoValues)
        onValuesChange?.(newPudoValues, newArrayPudoValues)
      }}
      onValueChange={(value) => {
        const newPudoValues: Record<TItemKeys, string> = {
          ...pudoValues,
          [itemProps.name]: value,
        }

        const newArrayPudoValues = arrPudoValues.map((currValue) =>
          currValue.name === itemProps.name
            ? {name: itemProps.name, value}
            : currValue,
        )
        onValuesChange?.(newPudoValues, newArrayPudoValues)
        setArrPudoValues(newArrayPudoValues)
        setPudoValues(newPudoValues)
      }}
    />
  ))

  useEffect(() => {
    const dedupedItems = items.filter(
      ({name}, index, currArr) =>
        index === currArr.findIndex((compareItem) => compareItem.name === name),
    )

    setPudoItems(dedupedItems)
    setArrPudoValues(dedupedItems.map(({name, value}) => ({name, value})))
    setPudoValues(
      dedupedItems.reduce(
        (obj, {name, value}) => ({...obj, [name]: value}),
        {},
      ) as Record<TItemKeys, string>,
    )
  }, [items])

  return (
    <StyledPUDO ref={PudoRef} css={css} {...delegated}>
      <div className='pudo-items-wrapper'>{renderPudoItems}</div>

      <div className='pudo-actions'>
        {showAddButton && (
          <Button
            css={{border: 'none'}}
            variant='ghost'
            type='button'
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
            css={{border: 'none'}}
            variant='danger'
            type='button'
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

      {children}
    </StyledPUDO>
  )
}

const Pudo = forwardRef(PudoRefComponent) as <
  ItemKeys extends string | number | symbol,
>(
  p: PudoProps<ItemKeys> & {ref?: Ref<Omit<HTMLDivElement, 'onChange'>>},
) => ReactElement

export default Pudo
