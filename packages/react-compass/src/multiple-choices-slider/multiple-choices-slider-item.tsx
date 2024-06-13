import {forwardRef, HTMLAttributes, ReactNode, useCallback} from 'react'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/multiple-choices-slider.module.css'

interface Props {
  isSelected?: boolean
  icon: ReactNode
  label: string
  index: number
  onChange?: (index: number, isAdded: boolean) => void
}

export type MultipleChoicesSliderItemProps = Props &
  Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>

const MultipleChoicesSliderItem = forwardRef<
  HTMLButtonElement,
  MultipleChoicesSliderItemProps
>(({isSelected, icon, label, index, onChange}, ref) => {
  const itemRef = useDOMRef(ref)

  const handleItemClick = useCallback(() => {
    if (onChange) {
      onChange(index, !isSelected)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isSelected])

  const rootClasses = classNames(
    styles.multipleChoicesSliderItem,
    isSelected && styles.isActive,
    'cdg-multiple-choices-slider-item',
  )

  return (
    <button ref={itemRef} className={rootClasses} onClick={handleItemClick}>
      {icon}
      <span
        className={classNames(
          styles.itemLabel,
          'cdg-multiple-choices-slider-item-label',
        )}
      >
        {label}
      </span>
    </button>
  )
})

export default MultipleChoicesSliderItem
