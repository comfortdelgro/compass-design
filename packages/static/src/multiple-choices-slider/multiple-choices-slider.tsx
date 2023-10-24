'use client'

import clsx from 'clsx'
import React, {
  Children,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useState,
} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import MultipleChoicesSliderItem, {
  MultipleChoicesSliderItemProps,
} from './multiple-choices-slider-item'
import styles from './styles/multiple-choices-slider.module.css'

interface Props {
  css?: unknown
  onChange?: (items: number[]) => void
  children: React.ReactNode
}

export type MultipleChoicesSliderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MultipleChoicesSlider = forwardRef<
  HTMLDivElement,
  MultipleChoicesSliderProps
>(({children, onChange, css = {}, ...htmlDivAttributes}, ref) => {
  const MultipleChoicesSliderRef = useDOMRef(ref)

  const [selectedItems, setItems] = useState<number[]>([])

  const onSliderItemChange = (index: number, isAdded: boolean) => {
    if (isAdded) {
      setItems((oldItems) => [...oldItems, index])
    } else {
      setItems((oldItems) => oldItems.filter((item) => item !== index))
    }
  }

  useEffect(() => {
    if (onChange) {
      onChange(selectedItems)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems.length])

  return (
    <CssInjection css={css} childrenRef={MultipleChoicesSliderRef}>
      <div
        ref={MultipleChoicesSliderRef}
        className={clsx(
          styles.multipleChoicesSlider,
          'multiple-choices-slider',
        )}
        {...htmlDivAttributes}
      >
        {Children.map(children, (child) => {
          if (!isValidElement(child)) {
            return null
          }
          const clonedChild =
            child as ReactElement<MultipleChoicesSliderItemProps>
          const props = {} as MultipleChoicesSliderItemProps
          props.isSelected = selectedItems.includes(clonedChild.props.index)
          props.onChange = onSliderItemChange
          return cloneElement(clonedChild, {
            ...props,
            ...clonedChild.props,
          })
        })}
      </div>
    </CssInjection>
  )
})

export default MultipleChoicesSlider as typeof MultipleChoicesSlider & {
  Item: typeof MultipleChoicesSliderItem
}
