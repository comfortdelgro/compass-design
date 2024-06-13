/* eslint-disable react-refresh/only-export-components */
'use client'

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  useEffect,
  useState,
} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import MultipleChoicesSliderItem, {
  MultipleChoicesSliderItemProps,
} from './multiple-choices-slider-item'
import styles from './styles/multiple-choices-slider.module.css'

interface Props {
  css?: CSS
  onChange?: (items: number[]) => void
  children: React.ReactNode
}

export type MultipleChoicesSliderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MultipleChoicesSlider = forwardRef<
  HTMLDivElement,
  MultipleChoicesSliderProps
>(({children, onChange, css = {}, className, ...htmlDivAttributes}, ref) => {
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
        {...htmlDivAttributes}
        ref={MultipleChoicesSliderRef}
        className={classNames(
          styles.multipleChoicesSlider,
          className,
          'cdg-multiple-choices-slider',
        )}
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
