import React, {HTMLAttributes, Key} from 'react'
import CssInjection from '../../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../../utils/use-dom-ref'
import styles from '../../styles/option.module.css'
import {DropdownItemProps} from '../item'

interface Props {
  key: Key | null
  disabledKeys?: React.Key[]
  focusKey?: React.Key
  currentKey?: React.Key
  type: 'heading' | 'color' | 'alignment'
  item: React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  onSelect: (key: React.Key) => void
  className?: string
  css?: unknown
}

export type OptionProps = Props &
  Omit<HTMLAttributes<HTMLLIElement>, keyof Props>
const Option = React.forwardRef<HTMLLIElement, OptionProps>(
  (
    {
      item,
      currentKey,
      focusKey,
      disabledKeys,
      type,
      className = '',
      css = {},
      onSelect,
    },
    ref,
  ) => {
    const optionRef = useDOMRef(ref)
    const {children} = item.props
    const isSelected = React.useMemo(
      () => currentKey == item.key,
      [currentKey, item.key],
    )
    const isFocused = React.useMemo(
      () => focusKey == item.key,
      [focusKey, item.key],
    )
    const isDisabled = React.useMemo(
      () => (item.key ? [...disabledKeys].includes(item.key) : false),
      [disabledKeys, item.key],
    )

    const handleSelect = () => {
      if (item.key && !isDisabled) onSelect(item.key)
    }

    const optionClasses = React.useMemo(() => {
      return [
        styles.rteOption,
        isFocused && styles.isFocused,
        isSelected && styles.isSelected,
        isDisabled && styles.isDisabled,
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, isDisabled, isFocused, isSelected])

    const rightIconClasses = React.useMemo(() => {
      return [
        styles.rightIcon,
        isSelected ? '' : styles.isUnselected,
        type === 'color' && styles.typeColor,
        type === 'heading' && styles.typeHeading,
      ]
        .filter(Boolean)
        .join(' ')
    }, [isSelected, type])

    return (
      <CssInjection css={css} childrenRef={optionRef}>
        <li className={optionClasses} onClick={handleSelect}>
          <div className={styles.optionContent}>{children}</div>
          <div className={rightIconClasses}>
            <svg
              width='16'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </li>
      </CssInjection>
    )
  },
)
export default Option
