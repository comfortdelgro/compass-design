import {FocusEvent, useCallback} from 'react'
import {DOMAttributes, FocusableElement, FocusEvents} from '../types'
import {useSyntheticBlurEvent} from './useSyntheticBlurEvent'

export interface FocusProps<Target = FocusableElement>
  extends FocusEvents<Target> {
  isDisabled?: boolean
}

export interface FocusResult<Target = FocusableElement> {
  focusProps: DOMAttributes<Target>
}

export default function useFocus<
  Target extends FocusableElement = FocusableElement,
>(props: FocusProps<Target>): FocusResult<Target> {
  const {
    isDisabled,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onFocusChange,
  } = props

  const onBlur: FocusProps<Target>['onBlur'] = useCallback(
    (e: FocusEvent<Target>) => {
      if (e.target === e.currentTarget) {
        if (onBlurProp) {
          onBlurProp(e)
        }

        if (onFocusChange) {
          onFocusChange(false)
        }
      }
      return true
    },
    [onBlurProp, onFocusChange],
  )

  const onSyntheticFocus = useSyntheticBlurEvent<Target>(onBlur)

  const onFocus: FocusProps<Target>['onFocus'] = useCallback(
    (e: FocusEvent<Target>) => {
      if (e.target === e.currentTarget && document.activeElement === e.target) {
        if (onFocusProp) {
          onFocusProp(e)
        }

        if (onFocusChange) {
          onFocusChange(true)
        }

        onSyntheticFocus(e)
      }
    },
    [onFocusChange, onFocusProp, onSyntheticFocus],
  )

  return {
    focusProps: {
      onFocus:
        !isDisabled && (onFocusProp || onFocusChange || onBlurProp)
          ? onFocus
          : undefined,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined,
    },
  }
}
