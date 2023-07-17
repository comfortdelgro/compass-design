import {
  createDescendantContext,
  DescendantsManager,
  UseDescendantsReturn,
} from '@chakra-ui/descendant'
import React, {useMemo} from 'react'

export interface SelectType {
  selected: number
  setSelected: (selected: number) => void
}

export interface UseKeyboardNavigationReturn extends SelectType {
  provider: {
    descendants: DescendantsManager<HTMLElement, object>
    selected: number
    setSelected: React.Dispatch<React.SetStateAction<number>>
  }
  DescendantsProvider: React.Provider<DescendantsManager<HTMLElement, object>>
  useDescendantsContext: () => DescendantsManager<HTMLElement, object>
  useDescendants: () => DescendantsManager<HTMLElement, object>
  useDescendant: (
    options?:
      | {
          disabled?: boolean
          id?: string
        }
      | undefined,
  ) => {
    descendants: UseDescendantsReturn
    index: number
    enabledIndex: number
    register: (node: HTMLElement | null) => void
  }
}

export const useKeyboardNavigationState = (): UseKeyboardNavigationReturn => {
  const [selected, setSelected] = React.useState(0)

  const [
    DescendantsProvider,
    useDescendantsContext,
    useDescendants,
    useDescendant,
  ] = useMemo(() => {
    return createDescendantContext()
  }, [])

  const descendants = useDescendants()

  const provider = {
    descendants,
    selected,
    setSelected,
  }

  return {
    provider,
    selected,
    setSelected,
    DescendantsProvider,
    useDescendantsContext,
    useDescendants,
    useDescendant,
  }
}
