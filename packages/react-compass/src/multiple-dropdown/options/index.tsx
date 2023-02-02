import {useFocusRing} from '@react-aria/focus'
import {useOption} from '@react-aria/listbox'
import {mergeProps} from '@react-aria/utils'
import {ListState} from '@react-stately/list'
import React, {Key} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {MultipleDropdownItemProps} from '../item'
import {
  StyledContent,
  StyledIcon,
  StyledOption,
  StyledRightIcon,
} from './index.styles'

interface Props<T> extends StyledComponentProps {
  state: ListState<T>
  key: Key
  item: Node<T>
}

export type LinkProps<T = object> = Props<T>

const Option = React.forwardRef<HTMLLIElement, LinkProps>(
  ({item, state}, r) => {
    const ref = useDOMRef<HTMLLIElement>(r)
    const {optionProps, isSelected, isDisabled, isFocused} = useOption(
      {key: item.key},
      state,
      ref,
    )

    const {isFocusVisible, focusProps} = useFocusRing()
    const {leftIcon} = item.props ?? {}

    return (
      <StyledOption
        isFocused={isFocused}
        isSelected={isSelected}
        isDisabled={isDisabled}
        {...mergeProps(optionProps, focusProps)}
        ref={ref}
      >
        {leftIcon && <StyledIcon>{leftIcon}</StyledIcon>}
        <StyledContent>{item.rendered}</StyledContent>
        <StyledRightIcon isSelected={isSelected}>
          <div>
            <Tick />
          </div>
        </StyledRightIcon>
      </StyledOption>
    )
  },
)

const Tick = () => (
  <svg width='10' height='10' viewBox='0 0 10 10' fill='none'>
    <path
      d='M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z'
      fill='white'
    />
  </svg>
)

export default Option
export interface Node<T> {
  type: string
  key: Key
  value: T
  level: number
  hasChildNodes: boolean
  childNodes: Iterable<Node<T>>
  rendered: React.ReactNode
  textValue: string
  'aria-label'?: string
  index?: number
  wrapper?: (element: React.ReactElement) => React.ReactElement
  parentKey?: Key
  prevKey?: Key
  nextKey?: Key
  props?: MultipleDropdownItemProps
  /** @private */
  shouldInvalidate?: (context: unknown) => boolean
}
