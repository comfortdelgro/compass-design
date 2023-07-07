import {DescendantsManager} from '@chakra-ui/descendant'
import React, {useContext} from 'react'
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
    onKeyDown?: (
      callbacks?: OnKeyDownCallback,
    ) => (e: React.KeyboardEvent<HTMLElement>) => void
    onMouseMove?: (index: number) => () => void
  }
>({})

export type OnKeyDownCallback = {
  [key in EKeyboardKey]?: (e: React.KeyboardEvent<HTMLElement>) => void
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
    const next = descendants.next(selected)
    if (next) {
      next.node.focus()
      setSelected(next.index)
    }
  }

  const prevFocus = () => {
    const prev = descendants.prev(selected)
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

  const onKeyDown = (callbacks?: OnKeyDownCallback) => {
    return (e: React.KeyboardEvent<HTMLElement>) => {
      const key = e.key

      switch (key) {
        case EKeyboardKey.ArrowUp:
          callbacks?.ArrowUp?.(e)
          break
        case EKeyboardKey.ArrowDown:
          callbacks?.ArrowDown?.(e)
          break
        case EKeyboardKey.Tab:
          callbacks?.Tab?.(e)
          break
        default:
          break
      }
    }
  }

  const onMouseMove = (index: number) => {
    return () => {
      setSelected?.(index)
      getNode(index)?.focus()
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
