import React, {useContext} from 'react'
import {DescendantsManager} from '../descendant'
import {EKeyboardKey} from '../keyboard.enum'
import {
  SelectType,
  useKeyboardNavigationState,
} from './useKeyboardNavigationState'

export const KeyboardNavigationContext = React.createContext<
  Partial<SelectType> & {
    descendants?: DescendantsManager<HTMLElement, object>
    nextFocus?: () => void
    prevFocus?: () => void
    resetFocus?: () => void
    getNode?: (index: number) => HTMLElement | undefined
    onKeyDown?: <T extends HTMLElement = HTMLElement>(
      callbacks?: OnKeyDownCallback<T> | undefined,
    ) => (e: React.KeyboardEvent<T>) => void
    onMouseMove?: (index: number) => () => void
    onFocus?: (index: number) => () => void
  }
>({})

export type OnKeyDownCallback<T extends HTMLElement = HTMLElement> = {
  [key in EKeyboardKey]?: (e: React.KeyboardEvent<T>) => void
}

export interface KeyboardNavigationProviderProps extends SelectType {
  children: React.ReactNode
  descendants: DescendantsManager<HTMLElement, object>
}

export const KeyboardNavigationProvider = (
  props: KeyboardNavigationProviderProps,
) => {
  const {children, descendants, selected, setSelected} = props
  const {DescendantsProvider} = useKeyboardNavigationState()

  const nextFocus = () => {
    const next = descendants.nextEnabled(selected)
    if (next) {
      next.node.focus()
      setSelected(next.index)
    }
  }

  const prevFocus = () => {
    const prev = descendants.prevEnabled(selected)
    if (prev) {
      prev.node.focus()
      setSelected(prev.index)
    }
  }

  const getNode = (index: number) => {
    return descendants.item(index)?.node
  }

  const resetFocus = () => {
    setSelected(0)
  }

  const onKeyDown = <T extends HTMLElement = HTMLElement>(
    callbacks?: OnKeyDownCallback<T>,
  ) => {
    return (e: React.KeyboardEvent<T>) => {
      const key = e.key as EKeyboardKey
      if (callbacks) {
        const callback = callbacks[key]
        callback?.(e)
      }
    }
  }

  const onMouseMove = (index: number) => {
    return () => {
      setSelected?.(index)
      getNode(index)?.focus()
    }
  }

  const onFocus = (index: number) => {
    return () => {
      setSelected?.(index)
    }
  }

  return (
    <DescendantsProvider value={descendants}>
      <KeyboardNavigationContext.Provider
        value={{
          selected,
          descendants,
          setSelected,
          nextFocus,
          prevFocus,
          getNode,
          resetFocus,
          onKeyDown,
          onMouseMove,
          onFocus,
        }}
      >
        {children}
      </KeyboardNavigationContext.Provider>
    </DescendantsProvider>
  )
}

export const useKeyboardNavigation = () => {
  return useContext(KeyboardNavigationContext)
}
