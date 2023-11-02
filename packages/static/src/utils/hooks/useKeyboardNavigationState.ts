import React, {useMemo} from 'react'
import {
  createDescendantContext,
  DescendantsManager,
  UseDescendantsReturn,
} from '../descendant'

export interface SelectType {
  selected: number
  setSelected: (selected: number) => void
}

export interface UseKeyboardNavigationReturn extends SelectType {
  provider: {
    descendants: DescendantsManager<HTMLElement>
    selected: number
    setSelected: React.Dispatch<React.SetStateAction<number>>
  }
  DescendantsProvider: React.Provider<DescendantsManager<HTMLElement>>
  useDescendantsContext: () => DescendantsManager<HTMLElement>
  useDescendants: () => DescendantsManager<HTMLElement>
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
    register: ((node: HTMLElement | null) => void) | null
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
